const chooseRandomNumber = (min, max) => {
  const number = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(number);
};
export default chooseRandomNumber;
