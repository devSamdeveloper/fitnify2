import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'


import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import Clients from './pages/Clients'
import ClientFormPage from './pages/ClientFormPage'
import Routines from './pages/Routines'
import RoutineFormPage from './pages/RoutineFormPage'
import Excercises from './pages/Excercises'
import ExcerciseFormPage from './pages/ExcerciseFormPage'
import Profile from './pages/Profile'
import HomePage from './pages/HomePage'
import ProtectedRoutes from './ProtectedRoutes'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route element= {<ProtectedRoutes/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/new-client' element={<ClientFormPage />} />
            <Route path='/clients/:id' element={<ClientFormPage />} />
            <Route path='/routines' element={<Routines />} />
            <Route path='/new-rutine' element={<RoutineFormPage />} />
            <Route path='/routines/:id' element={<RoutineFormPage />} />
            <Route path='/excercises' element={<Excercises />} />
            <Route path='/new-exercise' element={<ExcerciseFormPage />} />
            <Route path='/exercises/:id' element={<ExcerciseFormPage />} />
            <Route path='/profile' element={<Profile />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App