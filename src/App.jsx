import { EjercicioReactJs } from './ComponentScreen/EjercicioReactJs';
import { EjercicioReactJs2 } from './ComponentScreen/EjercicioReactJs2';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EjercicioReactJs/>}  />
          <Route path='/ejercicioReactJS2' element={<EjercicioReactJs2/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

