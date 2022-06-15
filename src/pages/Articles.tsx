import React from "react";

import { ArticleGrid } from "../components/article/ArticleGrid";

import { useGetArticles } from "../hooks/article/useGetArticles";

const Articles: React.FC = () => {
  const { articles, loading } = useGetArticles();

  if (loading) return <p>Loading...</p>;

  return <ArticleGrid articles={articles}></ArticleGrid>;
};

export default Articles;
