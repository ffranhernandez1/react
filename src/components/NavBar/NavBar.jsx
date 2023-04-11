import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return <div className="div-principal"> 
              <div className="div-img"><Link to={'/'} ><img src="https://d2az8otjr0j19j.cloudfront.net/templates/008/089/twig/static/images/soma/logo.png?458247279" alt="" className="imagen-logo"/></Link></div>
              <ul className='nav-bar'>
                <li className='item'><NavLink to={'/categoria/remera'} className={(isActive)=> isActive ? 'link' : 'link-active'}>remeras</NavLink></li>
                <li className='item'><NavLink to={'/categoria/buzos'} className={(isActive)=> isActive ? 'link' : 'link-active'}>buzos</NavLink></li>
                <li className='item'><NavLink to={'/categoria/pantalones'} className={(isActive)=> isActive ? 'link' : 'link-active'}>pantalones</NavLink></li>
                <li className="item"><CartWidget /></li>
              </ul>
          </div>
  }
  
  export default NavBar