import React from 'react'
import { useForm } from "react-hook-form";
import { axiosInstance } from '../API';
import Vectors from '../img/Vectors.png';
import darkmode from '../img/darkmode.png'
import Form from '../form/form';
import './HomePage.css'

const HomePage = () => {


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

        <div className='HomePage'>
            <div className='sign_in_name_parents'>
                <h1 className='sign_in_name'>Sign in</h1>
                <p className='sign_under_text'>Sign in and start managing your candidates!</p>
            </div>


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
                    placeholder='Login'
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
                    placeholder='Password'
                    className='input'
                />
                {errors?.password &&
                    (<div>{errors.password.message}</div>)
                }
                <div className="chechbox-menu">
                    <input type="checkbox"
                        name=""
                        className='checkboxman' />
                    <p className='remember-me'>remember me</p> <p>Forgot password?</p>
                </div>

                <button className='button-to-sign'>Login</button>

            </form>
            <div className="photo-footer-daddy">

                <a href="/Form" className='change-button-href'>
                    <button className='change-button-button'> <img src={darkmode} alt="" /></button>
                </a>

            </div>

        </div>

    )
}

export default HomePage