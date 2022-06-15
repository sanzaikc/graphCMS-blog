import React from "react";

interface ImagePlaceholderProps {
  placeholder?: string;
  small?: boolean;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  placeholder = "article",
  small = false,
}) => {
  return (
    <div className="grid h-full w-full select-none place-content-center bg-fuchsia-100">
      {/* dark:bg-slate-700 */}
      <div
        className={`font-extrabold tracking-wider text-fuchsia-100 drop-shadow-xl ${
          small ? "text-3xl" : "text-6xl"
        }`}
      >
        {placeholder}
      </div>
    </div>
  );
};

export default ImagePlaceholder;
