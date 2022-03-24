const getRandomNumber = (max) => {
  const randomNumber = Math.floor(Math.random() * max);
  if (randomNumber === 0) return getRandomNumber(max);
  return randomNumber;
};

export default getRandomNumber;
