const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=");
  if (!res.ok) {
    throw new Error("Fetching data failed");
  }
  return res.json();
};

export const getSingleData = async (id) => {
  const item = await getData();
  const singleItem = await item.find((product) => product.id === id);
  return singleItem;
};
