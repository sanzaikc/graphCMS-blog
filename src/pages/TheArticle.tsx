import React, { useEffect } from "react";
import { useParams } from "react-router";

import StickyHeading from "../components/shared/StickyHeading";

import { ReactComponent as Author } from "../assets/author.svg";
import { useShowArticle } from "../hooks/article/useShowArticle";
import FormatDate from "../utils/FormatDate";

const TheArticle: React.FC = () => {
  const { slug } = useParams();

  const { article, loading } = useShowArticle(slug);

  useEffect(() => {
    if (article) document.title = `Chaos | ${article.title}`;
  }, [article]);

  if (loading) return <div>Loading...</div>;

  if (!article) return <div>Article not found.</div>;
  return (
    <div>
      <div className="w-full lg:w-2/3 pb-10">
        <StickyHeading>
          <div className="font-semibold text-3xl">{article.title}</div>
        </StickyHeading>
        <div className="font-medium text-gray-500 flex justify-between border-b pb-4">
          <div className="capitalize tracking-wide bg-fuchsia-50 text-fuchsia-600  px-2 py-0.5 rounded-sm">
            {article.flair}
          </div>
          <div>{new FormatDate(article.createdAt).formalDate()}</div>
          <div className="flex items-center space-x-2">
            <img
              src={article.createdBy.picture}
              alt="Avatar"
              className="h-6 w-6 rounded-full"
            />
            <div className="pr-2">{article.createdBy.name}</div>
          </div>
        </div>
        {article.coverImage && (
          <div className="mt-6 h-52 w-full bg-fuchsia-200 lg:h-[400px]">
            <img
              src={article.coverImage.url}
              alt="Cover"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: article.content.html }}
        />
      </div>
    </div>
  );
};

export default TheArticle;
