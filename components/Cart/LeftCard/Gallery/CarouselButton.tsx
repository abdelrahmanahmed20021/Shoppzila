import { useState } from "react";

import { cn } from "@/libs/cn";

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props;
  const [isGaping, setIsGaping] = useState(false);

  return (
    <div
      onMouseDown={() => setIsGaping(true)}
      onMouseUp={() => setIsGaping(false)}
      className={cn(
        "embla-thumbs__slide".concat(
          selected ? " embla-thumbs__slide--selected" : ""
        ),
        "cursor-grab",
        isGaping && "cursor-grabbing"
      )}
    >
      <button
        onClick={onClick}
        className={cn(
          "embla-thumbs__slide__button cursor-grab",
          isGaping && "cursor-grabbing"
        )}
        type="button"
        onMouseDown={() => setIsGaping(true)}
        onMouseUp={() => setIsGaping(false)}
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};
