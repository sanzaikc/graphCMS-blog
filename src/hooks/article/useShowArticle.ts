import { gql, useQuery } from "@apollo/client";

import { CORE_ARTICLE_FIELDS } from "./../../fragments/index";

const ARTICLE_DETAIL = gql`
  ${CORE_ARTICLE_FIELDS}
  query GetArticleDetail($slug: String!) {
    article(where: { slug: $slug }) {
      ...CoreArticleFields
    }
  }
`;

export const useShowArticle = (slug?: string) => {
  const { loading, error, data } = useQuery(ARTICLE_DETAIL, {
    variables: {
      slug,
    },
  });

  const article = data?.article || undefined;

  return { loading, error, article };
};
