import React from "react";
import { Link } from "react-router-dom";

import CardImagePreview from "../shared/CardImagePreview";

import FormatDate from "../../utils/FormatDate";

interface ArticleCardProps {
  author: {
    name: string;
  };
  title: string;
  slug: string;
  flair: string;
  content: { text: string };
  coverImage: {
    url: string;
  };
  createdAt: string;
  createdBy: {
    name: string;
    picture: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  slug,
  content,
  flair,
  coverImage,
  createdAt,
  createdBy,
}) => {
  return (
    <Link
      to={`/${slug}`}
      className="text-decoration-none group relative border bg-white lg:border-none"
    >
      <div className="cursor-pointer">
        {/* // dark:hover:bg-slate-900 */}
        <CardImagePreview image={coverImage?.url} />
        <div className="px-2 py-4 lg:px-0">
          <div className="mb-4 flex items-end justify-between text-xs text-gray-500">
            <div className="rounded-sm bg-fuchsia-50 px-1 py-0.5 text-xs  capitalize tracking-wide text-fuchsia-600">
              {flair}
            </div>
            <div>{new FormatDate(createdAt).formalDate()}</div>
            <div className="flex items-center space-x-2">
              <img
                src={createdBy.picture}
                alt="Avatar"
                className="h-5 w-5 rounded-full"
              />
              <div className="pr-2">{createdBy.name}</div>
            </div>
          </div>
          <div className="my-4 font-semibold line-clamp-1 group-hover:text-fuchsia-600 lg:text-xl">
            {title}
          </div>
          <div
            className="text-sm text-gray-600 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 transform bg-fuchsia-50 transition-all duration-150 ease-out group-hover:translate-x-4 group-hover:translate-y-4"></div>
    </Link>
  );
};

export default ArticleCard;
