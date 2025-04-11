export function toUrlFormat(str) {
  if (typeof str !== "string") {
    throw new Error("O parâmetro deve ser uma string");
  }

  return str
    .replace(/[_\s]+/g, "-")
    .replace(/[A-Z]/g, (letter) => `${letter.toLowerCase()}`)
    .toLowerCase();
}
