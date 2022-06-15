import React from "react";
import { Link } from "react-router-dom";

import CardImagePreview from "../CardImagePreview";

import { ReactComponent as Author } from "../../assets/author.svg";
import FormatDate from "../../utils/FormatDate";

interface ArticleCardProps {
  author: {
    name: string;
  };
  title: string;
  slug: string;
  flair: string;
  content: {
    html: string;
  };
  coverImage: {
    url: string;
  };
  createdAt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  slug,
  content,
  flair,
  coverImage,
  createdAt,
  author,
}: ArticleCardProps) => {
  return (
    <Link
      to={`/${slug}`}
      className="relative group bg-white text-decoration-none"
    >
      <div className="cursor-pointer">
        {/* // dark:hover:bg-slate-900 */}
        <CardImagePreview image={coverImage?.url} />
        <div className="py-4">
          <div className="mb-4 text-xs text-gray-500 flex items-end justify-between">
            <div className="capitalize tracking-wide text-xs bg-fuchsia-100  px-1 py-0.5 rounded-sm">
              {flair}
            </div>
            <div>{new FormatDate(createdAt).formalDate()}</div>
            <div className="flex items-center">
              <Author className="h-3 text-red-200" />
              <span className="mx-2">{author.name}</span>
            </div>
          </div>
          <div className="my-4 font-semibold line-clamp-2 lg:text-xl group-hover:text-fuchsia-600">
            {title}
          </div>
          <div
            className="text-sm text-gray-600 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 transform bg-fuchsia-50 transition-all duration-150 ease-out group-hover:translate-x-4 group-hover:translate-y-4"></div>
    </Link>
  );
};

export default ArticleCard;
