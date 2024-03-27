import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../redux/action/cartActions";
import { decreaseQty } from "../redux/action/productsAction";
import cart from ".././img/shopping-cart.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Shop() {
  const product = useSelector((state) => state.productReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button class="btn btn-outline-secondary" style={{"position":"relative", "left": "45%", "width":"9vw", "height":"6vh"}}onClick={() => navigate("/Cart")}>עגלת הקניות <img src={cart} style={{ "width": "2rem" }}></img></button>
      <div style={{ "display": "grid", "grid-template-columns": "auto auto auto auto", "grid-template-rows": "auto auto" }}>
        {product.map(item => (
          <div class="card" style={{ "width": "18vw", "margin": "1vh", "borderColor":'rgb(50, 33, 126)' }}>
            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
              <img src={item.img} class="img-fluid" />
            </div>
            <div class="card-body" >
               <h5 class="card-title">{item.name}</h5>
              <h5 class="card-title" >{item.product_name}</h5>
              <h5 class="card-title" >מחיר-  {item.product_price}$</h5>
              <p className="card-text">הכמות במלאי- {item.unitsInStock}</p>
              <div>
                <button class="btn btn-outline-secondary" onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(item));
                  dispatch(decreaseQty(item));
                  setOpen(true)
                }}
                ><img  src={cart} style={{ "width": "3rem" }}></img>הוסף לעגלה   </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
