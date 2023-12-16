
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banmen.jpg';
import women_banner from './Components/Assests/banwomen.jpg';
import kids_banner from './Components/Assests/banchild.jpg';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/Aadmi' element={<ShopCategory banner={men_banner} category="Aadmi"/>}/>
  <Route path='/Aurat' element={<ShopCategory banner={women_banner} category="Aurat"/>}/>
  <Route path='/Baalak' element={<ShopCategory banner={kids_banner} category="Baalak"/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path='/product/:productId' element={<Product/>}/>

  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
