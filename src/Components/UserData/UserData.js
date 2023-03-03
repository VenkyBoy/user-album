import React, { useEffect, useState } from 'react'
import { getData } from '../../common/Api';
import { FETCH_USERS_URL } from '../../common/constants';
import UserCard from './UserCard';

const UserData = ({history}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(FETCH_USERS_URL, userDataCallBack);
  }, []);

  const userDataCallBack = (data) => {
    setUsers(data);
    setLoading(false);
  };

  if (loading) {
    return <div className={'container'}>Loading Users....</div>;
  }

  if (!users) {
    return <div>No Users Found</div>;
  }

  return (
    <div>
      <main className="list-of-cards">
        {users.map((eachUser) => (
          <UserCard key={eachUser.id} userData={eachUser} history={history} />
        ))}
      </main>
    </div>
  );
}

export default UserData