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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {articles.map((article: any) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </>
  );
};
