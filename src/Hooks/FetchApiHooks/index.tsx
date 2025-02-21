import { useMutation, useQuery, useQueryClient } from "react-query";

type ApiResponse = {
  data: {
    id: number;
    title: string;
    description: string;
    imagesrc: string;
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
  return { ...data, data: data.data.reverse() };
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
      imageSrc: string;
      producttype: string;
    }) => {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          imagesrc: formData.imageSrc,
          imagealt: formData.title,
          producttype: formData.producttype,
        }),
      });

      if (!response.ok) {
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
      const response = await fetch(`${backendUrl}/${id}`, { method: "DELETE" });

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
