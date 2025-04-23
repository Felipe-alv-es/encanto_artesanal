import { useCallback } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  imgSrc: string[];
  imgAlt: string;
  quantity: number;
}

export function useSendWhatsapp(phoneNumber: string) {
  const sendProducts = useCallback(
    (products: Product[]) => {
      if (!products || products.length === 0) return;

      const greeting =
        "Olá! Tudo bem?\nSegue a listinha dos itens que quero:\n\n";
      const thankYou =
        "Desde já, muito obrigado(a)! Fico no aguardo do seu retorno.";

      const message = [
        greeting,
        ...products.map(
          (product, index) =>
            `- ${index + 1}. ${product.name}\n` +
            `${product.price}\n` +
            `Quantidade: ${product.quantity}\n\n`
        ),
        thankYou,
      ].join("");

      const urlEncodedMsg = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${urlEncodedMsg}`;

      window.open(whatsappLink, "_blank");
    },
    [phoneNumber]
  );

  return { sendProducts };
}
