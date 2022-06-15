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
    }
  }
`;

export const useGetArticles = (): Article[] => {
  const { data } = useQuery(ARTICLE_LIST);

  return data?.articles;
};
