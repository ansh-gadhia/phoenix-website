import React from "react";

const Video = () => {
  return (
    <div className="flex justify-center items-center">
      <video
        className="rounded-2xl shadow-lg"
        width="75%"
        controls
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bannervideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
