export const scrollTo = (id: string) => {
  close();
  setTimeout(() => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }, 80);
};
