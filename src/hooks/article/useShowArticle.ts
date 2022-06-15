import { gql, useQuery } from "@apollo/client";

const ARTICLE_DETAIL = gql`
  query GetArticleDetail($slug: String!) {
    article(where: { slug: $slug }) {
      title
      content {
        html
        raw
      }
      coverImage {
        url
      }
      author {
        name
      }
      createdAt
    }
  }
`;

export const useShowArticle = (slug: string | undefined) => {
  const { loading, error, data } = useQuery(ARTICLE_DETAIL, {
    variables: {
      slug,
    },
  });

  const article = data?.article || undefined;

  return { loading, error, article };
};