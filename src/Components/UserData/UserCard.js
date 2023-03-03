import React from "react";
import { getRandomImage } from "../../common/helper";

const UserCard = ({userData, history}) => {
  const { id, name, email, username } = userData || {};

  const navigateUser = () => {
    history?.push({
      pathname: `user/${id}`,
    });
  };

  return (
    <div className="card-wrapper" onClick={navigateUser}>
      <div className="top-items">
        <img alt={name} src={getRandomImage()} />
      </div>
      <div className='bottom-items'>
        <h3>{name}</h3>
        <p className='label'>email</p>
        <h5>{email}</h5>
        <p data-testid="custom-element" className='label'>username</p>
        <h5>{username}</h5>
      </div>
    </div>
  );
};

export default UserCard;
