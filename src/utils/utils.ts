export const capitalizeName = (name: string) => {
  if (!name) return "";
  return name[0].toUpperCase().concat(name.slice(1));
};
