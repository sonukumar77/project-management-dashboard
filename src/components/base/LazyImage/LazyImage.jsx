import { useState } from "react";

function LazyImage({
  fallBackIcon = null,
  imageUrl = null,
  imgStyles,
  alt = "",
}) {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  return (
    <>
      {imgSrc ? (
        <img
          src={imgSrc}
          className={imgStyles}
          alt={alt}
          onError={() => setImgSrc(null)}
        />
      ) : (
        fallBackIcon
      )}
    </>
  );
}

export default LazyImage;
