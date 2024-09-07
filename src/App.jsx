import { EjercicioReactJs } from './ComponentScreen/EjercicioReactJs';
import { EjercicioReactJs2 } from './ComponentScreen/EjercicioReactJs2';
import { EjercicioCrudReact } from './ComponentScreen/EjercicioCrudReact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EjercicioCrudReact/>}  />
          <Route path='/EjercicioReactJs' element={<EjercicioReactJs/>}  />
          <Route path='/ejercicioReactJS2' element={<EjercicioReactJs2/>} />
          <Route path='/EjercicioCrudReact' element={<EjercicioCrudReact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

