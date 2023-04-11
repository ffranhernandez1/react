
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App () {
  
  return (
    <BrowserRouter>
      <div className='App'>
          <NavBar />
          <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:cid' element={<ItemListContainer />}/>
          <Route path='/detail/:pid' element={<ItemDetailContainer />}/>
          <Route path='*' element={<Navigate to='/' />}/>
          </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App
