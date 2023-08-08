import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/dashboard' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/register' element ={<RegisterPage/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/clients' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/new-client' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/clients/:id' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/routines' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/new-rutine' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/routines/:id' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/exercises' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/new-exercise' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/exercises/:id' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>
        <Route path='/profile' element ={<h1>Bienvenido a Fitnify, Registrate accediendo a /register desde el browser</h1>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App