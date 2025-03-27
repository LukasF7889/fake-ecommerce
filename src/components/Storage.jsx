const getStorage = () => {
  const data = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(data);
  return data;
};

const saveStorage = (item) => {
  const data = getStorage();
  const newData = [...data, item];
  localStorage.setItem("cart", JSON.stringify(newData));
};

export { getStorage, saveStorage };
