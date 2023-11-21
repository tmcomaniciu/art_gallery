// GalleryFrame.js
import React from "react";

function GalleryFrame({ artworkData }) {
  if (!artworkData || Object.keys(artworkData).length === 0) {
    return <div>Loading...</div>;
  }

  const { primaryImage, objectID, title, artistDisplayName, medium } =
    artworkData;

  const imageSize = {
    width: "500px",
    height: "auto",
  };

  return (
    <div>
      <img src={primaryImage} alt={title} style={imageSize} />
      <h1>{title}</h1>
      <h3>by {artistDisplayName}</h3>
      <p>Medium: {medium}</p>
      <p>Object ID: {objectID}</p>
    </div>
  );
}

export default GalleryFrame;
