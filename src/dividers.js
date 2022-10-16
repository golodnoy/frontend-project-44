const getDividers = (num) => {
  const arr = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

export default getDividers;
