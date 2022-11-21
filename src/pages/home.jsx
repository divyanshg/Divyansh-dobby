import { useEffect, useState } from "react";
import config from "../config";
import getAllImages from "../api/getAllImages";

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { images } = await getAllImages();
      setImages(images);
    })();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div>
          <img src={`${config.API_URL}/uploads/${image.filename}`} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
