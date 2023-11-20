import './App.css';
import Footer from './components/Footer';
import Carousel from './components/Home/Carousel';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersForm from './components/Forms/UsersForm';
import Typescriptdemo from './components/TypeScripts/Typescriptdemo';
import VueJS from './components/VUE/VueJS';
import Nextdemo from './components/NextJS/Nextdemo';
import GitInfo from './components/GIT/GitInfo';
import Examplecss from './components/CSSFrameworks/Examplecss';

export const Pagename = [
  { id: 1, path: '/',   name: 'Home',component: Carousel },
  { id: 2, path: '/CSSFrameworks', name: 'CSSFrameworks', component: Examplecss },
  { id: 3, path: '/GIT', name: 'GIT', component: GitInfo },
  { id: 4, path: '/Forms', name: 'Forms', component: UsersForm },
  { id: 5, path: '/Typrscript', name: 'Typescript', component: Typescriptdemo },
  { id: 6, path: '/VueJS', name: 'VueJS', component: VueJS },
  { id: 7, path: '/NextJS', name: 'NEXTJS', component: Nextdemo },
];



function App() {
 

  return (
   
         <BrowserRouter>  
      <Navbar />
      <Routes>
      {Pagename.map((route) => (
        <Route exact path={route.path} element={< route.component />}></Route> 
      ))}
      </Routes>   
      <Footer />
  </BrowserRouter>

   
    
   
  );
}

export default App;
