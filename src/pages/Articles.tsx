import React from "react";
import { useQuery } from "@apollo/client";

import { ARTICLE_LIST } from "../graphql/queries";
import { ArticleGrid } from "../components/article/ArticleGrid";

export default function Articles() {
  const { data } = useQuery(ARTICLE_LIST);

  return (
    <div>
      <ArticleGrid>
        {data?.articles.map((article: any) => (
          <div key={article.id} className="bg-white">
            <p>{article.title}</p>
            <img
              src={article.coverImage.url}
              alt="Cover"
              className="h-2/3 w-1/4"
            />
          </div>
        ))}
      </ArticleGrid>
    </div>
  );
}
