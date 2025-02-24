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
    imagesrc: JSON.parse(item.imagesrc),
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
      title: string;
      description: string;
      largedescription: string;
      images: string[];
      producttype: string;
    }) => {
      const token = localStorage.getItem("authToken");

      const response = await fetch(backendUrl, {
        method: "POST",
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
    onSuccess: (newItem) => {
      queryClient.invalidateQueries({ queryKey: ["apiData"] });

      queryClient.setQueryData<ApiResponse>(["apiData"], (oldData) => {
        if (oldData) {
          return {
            ...oldData,
            data: [newItem, ...oldData.data].reverse(),
          };
        }
        return { data: [newItem] };
      });
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

  return {
    apiData,
    isLoading,
    error,
    handleSave: saveMutation.mutateAsync,
    handleDelete: deleteMutation.mutateAsync,
  };
};

export default useApiData;
