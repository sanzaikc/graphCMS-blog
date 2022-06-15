import React from "react";
import { useParams } from "react-router";

import StickyHeading from "../components/shared/StickyHeading";

import { ReactComponent as Author } from "../assets/author.svg";
import { useShowArticle } from "../hooks/article/useShowArticle";
import FormatDate from "../utils/FormatDate";

const TheArticle: React.FC = () => {
  const { slug } = useParams();

  const { article, loading } = useShowArticle(slug);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="w-full lg:w-2/3 pb-10">
        <StickyHeading>
          <h1 className="font-semibold">{article.title}</h1>
        </StickyHeading>
        <div className="mb-6 text-sm font-medium text-gray-500 flex justify-between">
          <div>{new FormatDate(article.createdAt).formalDate()}</div>
          <div className="flex items-center">
            <Author className="h-3 text-red-200" />
            <span className="mx-2">{article.author.name}</span>
          </div>
        </div>
        {article.coverImage && (
          <div className="h-52 w-full bg-fuchsia-200 lg:h-[400px]">
            <img
              src={article.coverImage.url}
              alt="Cover"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <br />
        <div dangerouslySetInnerHTML={{ __html: article.content.html }} />
      </div>
    </div>
  );
};

export default TheArticle;
