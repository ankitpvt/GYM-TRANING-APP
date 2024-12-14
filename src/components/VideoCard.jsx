import React from "react";

const VideoCard = ({ video1 }) => {
  return (
    <div className="card border rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
      <iframe
        width="100%"
        height="200"
        src={video1.url}
        title={video1.name}
        className="rounded-t-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="card-body p-4">
        <h3 className="card-title text-xl font-semibold">{video1.name}</h3>
        <p className="card-text text-gray-600">{video1.description}</p>
        <p className="text-sm text-blue-700 font-medium">
          Focus Area: {video1.focusArea}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
