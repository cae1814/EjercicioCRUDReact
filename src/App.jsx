import { EjercicioReactJs } from './ComponentScreen/EjercicioReactJs';
import { EjercicioReactJs2 } from './ComponentScreen/EjercicioReactJs2';
import { EjercicioCrudReact } from './ComponentScreen/EjercicioCrudReact';
import { EjercicioCrudReactP2 } from './ComponentScreen/EjercicioCrudReactP2';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EjercicioCrudReactP2/>}  />
          <Route path='/EjercicioReactJs' element={<EjercicioReactJs/>}  />
          <Route path='/ejercicioReactJS2' element={<EjercicioReactJs2/>} />
          <Route path='/EjercicioCrudReact' element={<EjercicioCrudReact/>} />
          <Route path='/EjercicioCrudReactP2' element={<EjercicioCrudReactP2/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

