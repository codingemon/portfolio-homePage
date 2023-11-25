import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "@/public/404error2";

export default function ErrorAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
