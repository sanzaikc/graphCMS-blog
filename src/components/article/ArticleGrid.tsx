import React from "react";

import { Article } from "../../interfaces/article.interface";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
}: ArticleGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {articles.map((article: any) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};
