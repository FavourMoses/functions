import './App.css'
import Home from './pages/homefolder/homepage'
import {Routes,Route} from 'react-router-dom'
import Service from './pages/servicepage/servicepage'
function App() {


  return (
    <>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path = '/service' element={<Service/>}/>
      </Routes>
    </>
  )
}

export default App
