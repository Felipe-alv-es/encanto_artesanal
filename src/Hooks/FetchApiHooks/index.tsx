import { useEffect, useState } from "react";

type ApiResponse = {
  data: {
    id: number;
    title: string;
    description: string;
    imagesrc: string;
    imagealt: string;
  }[];
};

const useApiData = (formData: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);

  const handleSave = async () => {
    try {
      const response = await fetch(
        "https://encanto-artesanal-back.onrender.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            imagesrc: formData.imageSrc,
            imagealt: formData.title,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao salvar os dados");
      }

      await response.json();
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `https://encanto-artesanal-back.onrender.com/api/posts/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Falha ao excluir o item");
      }

      setApiData((prevData) =>
        prevData
          ? {
              ...prevData,
              data: prevData.data.filter((item) => item.id !== id),
            }
          : null
      );
    } catch (error) {
      console.error("Erro ao excluir o item:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://encanto-artesanal-back.onrender.com/api/posts/"
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar os dados");
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  return {
    handleSave,
    apiData,
    handleDelete,
  };
};

export default useApiData;
