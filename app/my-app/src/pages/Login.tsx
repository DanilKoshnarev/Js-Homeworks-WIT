import React from 'react';
import { useForm } from 'react-hook-form';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const { login } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    await login(data.email, data.password);
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: 'Email обязателен' })} />
      {errors.email && <p>{errors.email.message}</p>}
      <input type="password" {...register('password', { required: 'Пароль обязателен' })} />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;Login.tsx
