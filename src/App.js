import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListConteiner";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Greeting from "./components/Greeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from './context/CartContext';
import Footer from './components/Footer';



const App = () => {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    
    <NavBar />
    <Greeting /> 
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
    
    
    </Routes>
    </BrowserRouter>
    </CartContextProvider>

    <Footer/>

    </>
    )
   }
export default App