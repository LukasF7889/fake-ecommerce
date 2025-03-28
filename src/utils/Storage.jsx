const getStorage = () => {
  const data = JSON.parse(localStorage.getItem("cart")) || [];
  const filterData = data.filter((e) => e.quantity > 0);
  return filterData;
};

const saveStorage = (updatedCart) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export { getStorage, saveStorage };
