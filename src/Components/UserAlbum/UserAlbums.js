import React, { useEffect, useState } from "react";
import { FETCH_USER_ALBUMS_URL } from "../../common/constants";
import { getData } from "../../common/Api";

const UserAlbums = ({
  history,
  match: {
    params: { userid },
  },
}) => {
  const [userAlbumData, setAlbumsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(FETCH_USER_ALBUMS_URL.replace("%s", userid), userAlbumCallBack);
  }, []);

  const navigatePhotos = (id) => {
    history?.push({
      pathname: `/user/${userid}/${id}`,
    });
  };

  const userAlbumCallBack = (data) => {
    setAlbumsData(data);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading User Albums....</div>;
  }

  if (!userAlbumData?.length) {
    return <div>No Albums Found for the user</div>;
  }

  return (
    <div>
      <main className="list-of-cards user-albums-wrapper">
        {userAlbumData.map(({ title, id }) => {
          return (
            <div key={id} className="card-wrapper user-albums" onClick={() => navigatePhotos(id)}>
              <div key={id} className="user-album-name">{title}</div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default UserAlbums;
