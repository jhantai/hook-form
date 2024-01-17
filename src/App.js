import React from 'react';
import Form from './form/form';
import { Route, Routes } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { axiosInstance } from './API';
import './App.css'


const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: "onChange" })

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/login", data)
      console.log(response.data.message);
      reset()
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className='App'>
    fodjofjisdjio
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username', {
            required: "Имя не может быть пустым",
            minLength: {
              value: 4,
              message: 'минимум 4 символа'
            }, maxLength: {
              value: 16,
              message: 'максимум 16 символов'
            }
          })}

          type='text'
          placeholder='Логин'
          className='input'


        />
        {errors?.username &&
          (<div>{errors.username.message}</div>)
        }

        <input
          {...register('password', {
            required: "Пароль не может быть пустым",
            minLength: {
              value: 4,
              message: 'минимум 4 символа'

            }
          })}
          type="password"
          placeholder='Пароль'
          className='input'
        />
        {errors?.password &&
          (<div>{errors.password.message}</div>)
        }
        <button>войти</button>
      </form>

      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/White' element={<Form />} />


      </Routes>

    </div>
  );

};


export default App;
