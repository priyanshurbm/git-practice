const getUniqueCategories = (products) =>
  products.reduce(
    (categories, product) =>
      categories.includes(product.category)
        ? categories
        : [...categories, product.category],
    []
  );

const getAveragePricesByCategory = (products) => {
  const totals = products.reduce(
    (result, { category, price }) => ({
      ...result,
      [category]: {
        total: (result[category]?.total ?? 0) + price,
        count: (result[category]?.count ?? 0) + 1,
      },
    }),
    {}
  );

  return Object.entries(totals).reduce(
    (averages, [category, { total, count }]) => ({
      ...averages,
      [category]: total / count,
    }),
    {}
  );
};

const getOutOfStockProducts = (products) =>
  products.filter((product) => product.inStock === false);

module.exports = {
  getUniqueCategories,
  getAveragePricesByCategory,
  getOutOfStockProducts,
};
