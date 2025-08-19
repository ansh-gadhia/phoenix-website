import React from "react";

const Video = () => {
  return (
    <div className="flex justify-center my-6">
      <video
        controls
        width="75%"
        className="rounded-2xl shadow-lg"
        src="https://drive.google.com/uc?export=download&id=1wHuIJLdf7jc1tZLlHU-mq2Dn16Vc5VKQ"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
