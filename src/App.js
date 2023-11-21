// App.js
import React, { useState, useEffect } from "react";
import GalleryFrame from "./Components/GalleryFrame";
import ButtonsBar from "./Components/ButtonsBar";

function App() {
  const [artId, setArtId] = useState(12720);
  const [data, setData] = useState({});

  useEffect(() => {
    document.title = "Welcome to Artworld";

    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resData) => setData(resData))
      .catch((error) => console.error("Error fetching artwork:", error));
  }, [artId]);

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <GalleryFrame artworkData={data} />
      <ButtonsBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
