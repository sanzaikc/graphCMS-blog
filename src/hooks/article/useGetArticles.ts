import { gql, useQuery } from "@apollo/client";

import { Article } from "../../interfaces/article.interface";

const ARTICLE_LIST = gql`
  query GetArticles {
    articles {
      id
      slug
      title
      content {
        html
      }
      coverImage {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
      createdAt
    }
  }
`;

export const useGetArticles = () => {
  const { data, error, loading } = useQuery(ARTICLE_LIST);

  const articles: Article[] = data?.articles || [];

  return { articles, error, loading };
};
