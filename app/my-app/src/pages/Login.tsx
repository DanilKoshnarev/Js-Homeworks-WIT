import React from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Логин</label>
          <input {...register('username', { required: 'Логин обязателен' })} />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <label>Пароль</label>
          <input type="password" {...register('password', { required: 'Введи пароль!:(' })} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
