import React from 'react';
import { useForm } from 'react-hook-form';

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя</label>
          <input {...register('name', { required: 'Имя введи :(' })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register('email', { required: 'Email введи:(' })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Пароль</label>
          <input type="password" {...register('password', { required: 'Пароль введи:(' })} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
