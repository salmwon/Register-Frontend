import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Page/LandingPage'
import RegisterPage from './Page/RegisterPage'
import AllStudents from './Page/AllStudents'



function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/allStudents' element={<AllStudents/>}/>
     </Routes>
    </>
  )
}

export default App
