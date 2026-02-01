import { useMutation, useQuery, useQueryClient } from "react-query";

type ApiResponse = {
  data: {
    id: number;
    title: string;
    description: string;
    largedescription: string;
    imagesrc: string[];
    imagealt: string;
    producttype: string;
    isActive?: boolean;
  }[];
};

const backendUrl = process.env.REACT_APP_BACKEND_URL;

if (!backendUrl) {
  throw new Error("Backend URL is not defined");
}

const fetchApiData = async (): Promise<ApiResponse> => {
  const response = await fetch(backendUrl);

  if (!response.ok) {
    throw new Error("Falha ao buscar os dados");
  }

  const data = await response.json();

  const processedData = data.data.map((item: any) => ({
    ...item,
    imagesrc:
      typeof item.imagesrc === "string"
        ? JSON.parse(item.imagesrc)
        : item.imagesrc,
  }));

  return { ...data, data: processedData.reverse() };
};

const useApiData = () => {
  const queryClient = useQueryClient();

  const {
    data: apiData,
    error,
    isLoading,
  } = useQuery<ApiResponse>({
    queryKey: ["apiData"],
    queryFn: fetchApiData,
  });

  const saveMutation = useMutation({
    mutationFn: async (formData: {
      id?: number;
      title: string;
      description: string;
      largedescription: string;
      images: string[];
      producttype: string;
    }) => {
      const token = localStorage.getItem("authToken");
      const method = formData.id ? "PUT" : "POST";
      const url = formData.id ? `${backendUrl}/${formData.id}` : backendUrl;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          largedescription: formData.largedescription,
          imagesrc: formData.images,
          imagealt: formData.title,
          producttype: formData.producttype,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro ao salvar os dados:", errorData);
        throw new Error("Falha ao salvar os dados");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apiData"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${backendUrl}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao excluir o item");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apiData"] });
    },
  });

  const toggleActiveMutation = useMutation({
    mutationFn: async ({ id, isActive }: { id: number; isActive: boolean }) => {
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${backendUrl}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isActive }),
      });

      if (!response.ok) {
        throw new Error("Falha ao atualizar isActive");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apiData"] });
    },
  });

  return {
    apiData,
    isLoading,
    error,
    handleSave: saveMutation.mutateAsync,
    handleDelete: deleteMutation.mutateAsync,
    handleToggleActive: toggleActiveMutation.mutateAsync,
  };
};

export default useApiData;
