export const createSlug = (str: string): string => {
  return str
    .normalize("NFD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "-")
    .replace(/[^a-z0-9\-]+/g, "")
    .replace(/(.)\1+/g, "$1");
};
