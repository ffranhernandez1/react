
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'

function App () {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
      <div className='App'>
          <NavBar />
          <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:cid' element={<ItemListContainer />}/>
          <Route path='/detail/:pid' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartContainer />}/>
          <Route path='*' element={<Navigate to='/' />}/>
          </Routes>
      </div>
      </BrowserRouter>
    </CartContextProvider>
  )

}

export default App
