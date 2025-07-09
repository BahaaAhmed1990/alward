import { cva } from "class-variance-authority";
import React from "react";

const imgView = cva("flex justify-start ml-2 items-center", {
  variants: {
    intent: {
      logo: "w-[110px] h-[31px] lg:w-[221px] lg:h-[63px]",
    },
    lang: {
      AR: 'justify-end'
    }
  },
});

export default function ImgView({ src, intent, lang, ...props }) {
  return (
    <div id="img-container" className={imgView({ intent, lang })} {...props}>
      <img src={src} alt={intent} />
    </div>
  );
}
