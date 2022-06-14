import { gql } from "@apollo/client";

export const ARTICLE_LIST = gql`
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
