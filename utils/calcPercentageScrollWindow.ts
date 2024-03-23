export const calcPercentageScrollWindow = () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  const percent = (scrolled / scrollHeight) * 100;
  return { percent };
};
