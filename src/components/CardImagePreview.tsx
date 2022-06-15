import React from "react";

interface CardImagePreviewProps {
  image: string;
}

const CardImagePreview: React.FC<CardImagePreviewProps> = ({
  image,
  ...props
}: CardImagePreviewProps) => {
  return (
    <div {...props}>
      {image ? (
        <img src={image} alt="Cover" className="h-full w-full  object-cover" />
      ) : (
        // <ArticleImagePlaceholder sm={sm} />
        <div>Placeholder</div>
      )}
    </div>
  );
};

export default CardImagePreview;
