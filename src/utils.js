const chooseRandomNumber = (min, max) => {
  const number = min + Math.random() * (max - min + 1);
  return Math.floor(number);
};
export default chooseRandomNumber;
