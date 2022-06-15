import { gql, useQuery } from "@apollo/client";

import { Article } from "../../interfaces/article.interface";

const ARTICLE_LIST = gql`
  query GetArticles {
    articles(orderBy: createdAt_DESC) {
      id
      slug
      title
      content {
        html
      }
      flair
      coverImage {
        url
      }
      createdBy {
        name
        picture
      }
      createdAt
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
