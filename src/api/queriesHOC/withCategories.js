import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../shemas/categories";

export const useCategories = (Component) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  return () => <Component categoriesQuery={{ loading, error, data }} />;
};
