import React from 'react'
import { useForm } from "react-hook-form";
import { axiosInstance } from '../API';

const Form = () => {
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
    <div className='Form'>
           <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username', {
            required: "Имя не может быть пустым",
            minLength: {
              value: 4,
              message: 'минимум 4 символа'
            },   maxLength: {
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
    </div>
  )
}

export default Form