import './App.css'
import Quora from './components/Quora'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotificationPage from './components/NotificationPage'


function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Quora/>}></Route>
        <Route path='/NotificationPage' element={<NotificationPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
