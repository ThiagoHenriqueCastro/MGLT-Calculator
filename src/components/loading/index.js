import React from "react";
import { Wrapper, TextInfo } from "./styles/loading";
import Lottie from "react-lottie";
import animationData from "../../bb8.json";

export default function Loading({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

Loading.Lottie = function LoadingLottie({ ...restProps }) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidyMid slice" },
  };

  return <Lottie height={200} width={200} options={options} {...restProps} />;
};

Loading.TextInfo = function LoadingTextInfo({ children, ...restProps }) {
  return <TextInfo {...restProps}>{children}</TextInfo>;
};
