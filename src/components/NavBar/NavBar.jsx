import CartWidget from './CartWidget'

const NavBar = () => {
    return <div className="div-principal"> 
              <div className="div-img"><a href=""><img src="https://d2az8otjr0j19j.cloudfront.net/templates/008/089/twig/static/images/soma/logo.png?458247279" alt="" className="imagen-logo"/></a></div>
              <ul className='nav-bar'>
                <li className='item'><a href="" className='link'>remeras</a></li>
                <li className='item'><a href="" className='link'>buzos</a></li>
                <li className='item'><a href="" className='link'>pantalones</a></li>
                <li className="item"><CartWidget /></li>
              </ul>
          </div>
  }
  
  export default NavBar