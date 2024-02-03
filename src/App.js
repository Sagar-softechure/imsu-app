import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './assets/css/style.css';
import Layout from './components/Layout';
import Home from './pages/Home';
function App() {
  return (
<>
  <BrowserRouter basename='/'>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
