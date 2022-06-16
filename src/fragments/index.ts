import { gql } from "@apollo/client";

export const CORE_ARTICLE_FIELDS = gql`
  fragment CoreArticleFields on Article {
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
`;
