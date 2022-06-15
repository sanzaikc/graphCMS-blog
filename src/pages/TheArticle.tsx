import React from "react";
import { useParams } from "react-router";

const TheArticle: React.FC = () => {
  const { slug } = useParams();
  return <div>The ArticleL: {slug}</div>;
};

export default TheArticle;
