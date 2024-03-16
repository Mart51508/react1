import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Mainlayout from './Component/MainLayout/Mainlayout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';


const routes =createBrowserRouter([
{path:'/' , element:<Mainlayout/> , children:[
{index:true , element:<Home/>},
{path:'/About' , element:<About/>},
{path:'/Portfolio' , element:<Portfolio/>},
{path:'/Contact' , element:<Contact/>},

  ]}
])

function App() {
  return <>
<RouterProvider router={routes}/> 
  </>
}

export default App;
