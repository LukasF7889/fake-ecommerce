const getStorage = () => {
  const data = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(data);
  return data;
};

const saveStorage = (updatedCart) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export { getStorage, saveStorage };
