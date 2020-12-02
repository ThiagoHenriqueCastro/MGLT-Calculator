import api from "./api";

export const getAll = async (page = 1) => {
  const { data } = await api.get("starships/", {
    params: {
      page,
    },
  });
  if (data.next) {
    const starships = await getAll(page + 1);
    return [...data.results, ...starships];
  } else {
    return data.results;
  }
};
