import React from "react";

import { ArticleGrid } from "../components/article/ArticleGrid";

import { useGetArticles } from "../hooks/article/useGetArticles";

const Articles: React.FC = () => {
  const articles = useGetArticles() || [];

  return <ArticleGrid articles={articles}></ArticleGrid>;
};

export default Articles;
