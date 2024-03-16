const calcPercentageScrollEl = (e: UIEvent) => {
  const { clientHeight, scrollTop, scrollHeight } = e.target as HTMLDivElement;
  const percentage = Math.round(
    (scrollTop * 100) / (scrollHeight - clientHeight),
  );
  return { percentage };
};

export default calcPercentageScrollEl;
