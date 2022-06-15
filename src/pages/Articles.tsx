import React, { useEffect } from "react";

import { ArticleGrid } from "../components/article/ArticleGrid";

import { useGetArticles } from "../hooks/article/useGetArticles";

const Articles: React.FC = () => {
  const { articles, loading } = useGetArticles();

  useEffect(() => {
    document.title = "Chaos | Articles";
  }, []);

  if (loading) return <p>Loading...</p>;

  return <ArticleGrid articles={articles}></ArticleGrid>;
};

export default Articles;
