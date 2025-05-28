export const createSlug = (str: string): string => {
  return str
    .normalize("NFD") // Normalize to decompose characters
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(" ", "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};
