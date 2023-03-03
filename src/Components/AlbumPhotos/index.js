import React, { useEffect, useState } from "react";
import { getData } from "../../common/Api";
import { FETCH_PHOTOS_URL } from "../../common/constants";

const AlbumPhotos = ({
  match: {
    params: { albumid },
  },
}) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(FETCH_PHOTOS_URL.replace("%s", albumid), photosCallBack);
  }, []);

  const photosCallBack = (data) => {
    setPhotos(data);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading Users....</div>;
  }

  if (!photos) {
    return <div>No Users Found</div>;
  }

  return (
    <div>
      {photos.map(({ thumbnailUrl, title, id }) => {
        return <img test-id={'image'} key={id} alt={title} src={thumbnailUrl} className="photo_box" />;
      })}
    </div>
  );
};

export default AlbumPhotos;
