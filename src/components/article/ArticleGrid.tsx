import React from "react";

import { Article } from "../../interfaces/article.interface";

interface ArticleGridProps {
  articles: Article[];
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
}: ArticleGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {articles.map((article: any) => (
        <div key={article.id} className="bg-white">
          <p>{article.title}</p>
          <img
            src={article.coverImage.url}
            alt="Cover"
            className="h-2/3 w-1/4"
          />
        </div>
      ))}
    </div>
  );
};
