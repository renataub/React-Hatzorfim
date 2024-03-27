import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './silverStore/Shop';
import Cart from './silverStore/Cart';
import GoToPayment from './silverStore/GoToPayment';
import About from './silverStore/About';
import Home from './silverStore/Home';
import Nav from './Nav';
function App() {
  // const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
              <Route exact path="/" element={<About></About>}></Route>
              <Route exact path="/shop" element={<Shop></Shop>}></Route>
              <Route exact path="/Cart" element={<Cart></Cart>}></Route>
              <Route exact path="/home" element={<Home></Home>}></Route>
              <Route exact path="/GoToPayment" element={<GoToPayment></GoToPayment>}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </header>
    </div>
  );
}
export default App;
