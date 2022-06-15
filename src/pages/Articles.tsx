import React from "react";

import { ArticleGrid } from "../components/article/ArticleGrid";

import { useGetArticles } from "../hooks/article/useGetArticles";

const Articles: React.FC = () => {
  const articles = useGetArticles() || [];

  return (
    <ArticleGrid>
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
    </ArticleGrid>
  );
};

export default Articles;
