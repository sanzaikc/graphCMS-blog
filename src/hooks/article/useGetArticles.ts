import { gql, useQuery } from "@apollo/client";

import { Article } from "../../interfaces/article.interface";
import { CORE_ARTICLE_FIELDS } from "../../fragments";

const ARTICLE_LIST = gql`
  ${CORE_ARTICLE_FIELDS}
  query GetArticles {
    articles(orderBy: createdAt_DESC) {
      id
      slug
      ...CoreArticleFields
    }
  }
`;

export const useGetArticles = () => {
  const { data, error, loading } = useQuery(ARTICLE_LIST);

  // const articles: Article[] = data?.articles || [];

  let articles = [] as Article[];
  articles = data?.articles;

  return { articles, error, loading };
};
