import React from "react";

interface CardImagePreviewProps {
  image: string;
}

const CardImagePreview: React.FC<CardImagePreviewProps> = ({
  image,
}: CardImagePreviewProps) => {
  return (
    <div className="h-52 w-full flex-shrink-0">
      {image ? (
        <img src={image} alt="Preview" className="h-full w-full object-cover" />
      ) : (
        // <ArticleImagePlaceholder sm={sm} />
        <div>Placeholder</div>
      )}
    </div>
  );
};

export default CardImagePreview;
