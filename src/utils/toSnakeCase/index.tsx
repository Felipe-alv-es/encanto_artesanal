export function toSnakeCase(str) {
  if (typeof str !== "string") {
    throw new Error("O parâmetro deve ser uma string");
  }

  return str
    .replace(/[A-Z]/g, (letter) => `${letter.toLowerCase()}`)
    .replace(/\s+/g, "_")
    .toLowerCase();
}
