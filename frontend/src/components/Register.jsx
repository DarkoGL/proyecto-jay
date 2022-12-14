import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newUser } from '../redux/auth/auth.actions';
import './styles/Register.scss'
import ReusableNavbar from './Reusablenavbar/Navbar'
import ReusableImg from './ReusableImage/ReusableImg';

const Register = () => {
    const { register, handleSubmit, formState: {errors, isValid}} = useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const registerUser = (formdata) => {
        dispatch(newUser(formdata, navigate));
    };


  return (
    <>
      <ReusableNavbar clase='navbar--register'/>
      <main className='main--register'>
      <form onSubmit= {handleSubmit(registerUser)}>
      <ReusableImg enlace='/assets/imagenes/Crown.png' logo='Corona' clase='img--crown'/>
        <label>
            e-mail
            <input
          type="email"
          name="email"
          {...register("email", {
            required: "Introduce un email, por favor",
            minLength: {
              value: 5,
              message: "Introduce un email más largo",
            },
            pattern: {
              message: "Introduce un email con formato válido",
            },
          })}
        />
          {errors.email ? <>
        {errors.email.type === "required" && <p>{errors.email.message}</p>}
        {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        {/*cómo manejamos que ya exista un mail? */}
      </> : null}
        </label>
        <label>
        Password
        <input type="password" name="password" {...register('password', {
            required: "Introduce tu contraseña",
            pattern:{
              value: /^[a-zA-Z][a-zA-Z0-9.-]{1,20}$/
            }
        }) } />
      </label>
      {errors.password ? <p>Password incorrecto</p> : null}

      <label>
        Username
        <input type="text" name="userName" {...register("userName", {
            required: "Introduce tu nombre de usuario",
            pattern: /^[a-zA-Z][a-zA-Z0-9.-]{1,20}$/,
        })} />
      </label>
      {errors.userName ? <p>Username inválido</p> : null}
      <button type="submit" disabled={!isValid}>Enviar</button>
    </form>
    </main>
    </>
    
    
  )
}

export default Register