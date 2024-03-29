import React from "react";

import ImagePlaceholder from "./ImagePlaceholder";

interface CardImagePreviewProps {
  image: string;
}

const CardImagePreview: React.FC<CardImagePreviewProps> = ({ image }) => {
  return (
    <div className="h-52 w-full flex-shrink-0">
      {image ? (
        <img src={image} alt="Preview" className="h-full w-full object-cover" />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );
};

export default CardImagePreview;
