import React from "react";

import ArticleCard from "./ArticleCard";
import StickyHeading from "../shared/StickyHeading";

import { Article } from "../../interfaces/article.interface";

interface ArticleGridProps {
  articles: Article[];
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
}: ArticleGridProps) => {
  return (
    <>
      <StickyHeading>Articles</StickyHeading>
      {!articles?.length ? (
        <div>No articles</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
          {articles.map((article: any) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </>
  );
};
