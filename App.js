import './App.css';
import Header from './header';
import PostView from './post-view';
import LandingForm from "./landingform"
import Landing from "./landingpage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './form';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/post-view' element={<PostView/>}/>
      <Route path='/form-page' element={<LandingForm/>} />
    </Routes>
    </BrowserRouter> 
    </> 
    
  );
}

export default App;
