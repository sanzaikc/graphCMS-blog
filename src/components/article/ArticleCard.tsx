import React from "react";
import { Link } from "react-router-dom";

import CardImagePreview from "../CardImagePreview";

interface ArticleCardProps {
  title: string;
  slug: string;
  content: {
    html: string;
  };
  coverImage: {
    url: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  slug,
  content,
  coverImage,
}: ArticleCardProps) => {
  return (
    <Link to={`/${slug}`} className="relative group bg-white">
      <div className="cursor-pointer">
        {/* // dark:hover:bg-slate-900 */}
        <CardImagePreview image={coverImage.url} />
        <div className="py-4">
          <div className="mb-4 text-xs text-gray-500">
            {/* {new FormatDate(created_at).formalDate()} */}
            Jun 11 2020
          </div>
          <div className="my-4 font-semibold line-clamp-2 lg:text-xl">
            {title}
          </div>
          <div
            className="text-sm text-gray-600 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 transform bg-fuchsia-50 transition-all duration-150 ease-out group-hover:translate-x-4 group-hover:translate-y-4"></div>
    </Link>
  );
};

export default ArticleCard;
