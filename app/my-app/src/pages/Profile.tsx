import React from 'react';
import { useUser } from '../context/UserContext';

const Profile: React.FC = () => {
  const { user, logout } = useUser();

  if (!user) return <p>Вы не авторизованы</p>;

  return (
    <div>
      <h1>Профиль</h1>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default Profile;
