import UserAlbums from "../Components/UserAlbum/UserAlbums";
import UserData from "../Components/UserData/UserData";
import AlbumPhotos from '../Components/AlbumPhotos/index';

const Paths = [
  {
    path: "/",
    Component: UserData,
  },
  {
    path: "/user",
    name: "Users",
    Component: UserData,
  },
  {
    path: "/user/:userid",
    name: "Albums",
    Component: UserAlbums,
  },
  {
    path: "/user/:userid/:albumid",
    name: "Gallary",
    Component: AlbumPhotos,
  },
];

export default Paths;