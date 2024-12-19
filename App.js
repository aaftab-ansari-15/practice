import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Bontact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home /> 
  },
  {
    path: '/about',
    element: <About /> 
  },
  {
    path: '/contact',
    element: <Contact />
  },
  
])
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
