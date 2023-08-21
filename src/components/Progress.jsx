import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = ({ completed }) => {
  return (
    <ProgressBar
      completed={completed}
      animateOnRender={true}
      initCompletedOnAnimation={0}
      transitionDuration="10s"
      bgColor="#198754"
      borderRadius="10px"
      height="15px"
      isLabelVisible={true}
    />
  );
};

export default Progress;
