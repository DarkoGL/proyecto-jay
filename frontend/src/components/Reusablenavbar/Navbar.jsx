import React from 'react'
import ButtonLogout from '../componentes/ButtonLogout'
import Anchor from '../Linkreusable/Link'
import { useSelector } from 'react-redux'
import ReusableImg from '../ReusableImage/ReusableImg'



const ReusableNavbar = ({clase}) => {
  const {user, token} = useSelector((state) => state.auth)

  return (
    <>
      
      <nav className={clase}>
      <ReusableImg enlace={'/assets/imagenes/20thAnniversary.png'} logo={'logo'} clase={'navbar--img'}/>
      <ul className='navbar--list'>
      <li><Anchor nav='/' texto='Inicio' type='navbar--link'/></li>
        <li><Anchor nav='/characters' texto='Personajes' type='navbar--link'/></li>
      {
        !user && <>
                <li><Anchor nav='/login' texto='Iniciar Sesión' type='navbar--link'/></li>
                <li><Anchor nav='/register' texto='Regístrate' type='navbar--link'/></li>
                </>
      }
      {
        user?.rol === 'admin' && <> 
        <li>
        <Anchor nav='/newCharacter' texto='Crear Personaje' type='navbar--link'/>
        </li>
        </>
      }
      {
        user && <li><ButtonLogout/></li>
      }
      
        
    
      {/* <input></input> */}
      {/* preguntar a santi */}
      {/* <Anchor texto='Detalles' type='navbar--link'/> */}
      </ul>
    </nav>
    </>
    
  )
}



export default ReusableNavbar