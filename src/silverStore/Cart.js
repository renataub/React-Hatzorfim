// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, deleteItemFromCart } from "../redux/action/cartActions";
import add_cart from "../img/add-to-cart.png";
import delete_cart from "../img/delete.png";
import { addAllQty, addQty, decreaseQty } from "../redux/action/productsAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import payment from "../img/icons8-payment-80.png"
export default function Cart() {
    // const [productInCart, setProductsInCart] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsInCart = useSelector((state) => state.cartReducer);
    const [qty, setQty] = useState(0);
    const product = useSelector(state => state.cartReducer);
    let sum = 0;
    product.forEach(element => {
        sum += (element.cartQTY * element.product_price)
    });
    return (
        <>
            <h6 >הסכום לתשלום הוא: {sum}$    </h6>
            <button class="btn btn-outline-secondary" onClick={() => navigate("/GoToPayment")}><img src={payment}></img>לתשלום</button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">תמונה</th>
                        <th scope="col">שם מוצר</th>
                        <th scope="col">מחיר</th>
                        <th scope="col"></th>
                        <th scope="col">כמות</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {productsInCart.map(item => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td><img class="card-img-top1" src={item.img} alt="Card image cap" style={{ "height": "10vh" }} /></td>
                            <td>{item.product_name}</td>
                            <td>{item.product_price}</td>
                            <td><button class="btn btn-outline-secondary" onClick={(e) => {
                                e.preventDefault();
                                dispatch(addToCart(item));
                                dispatch(decreaseQty(item));
                                setQty(item.cartQTY)
                            }}>
                                <img src={add_cart} style={{ "width": "1rem" }}></img>
                            </button></td>
                            <td>{item.cartQTY}</td>
                            <td><button class="btn btn-outline-secondary" onClick={(e) => {
                                e.preventDefault();
                                dispatch(deleteFromCart(item));
                                dispatch(addQty(item));
                                setQty(item.cartQTY)
                            }}
                            ><img src={delete_cart} style={{ "width": "1rem" }}></img></button></td>
                            <td><button class="btn btn-outline-secondary" onClick={(e) => {
                                e.preventDefault();
                                dispatch(deleteItemFromCart(item));
                                dispatch(addAllQty(item, item.cartQTY));
                                setQty(item.cartQTY)
                            }}
                            >מחק מוצר</button></td>
                        </tr>))}
                </tbody>
            </table>
        </>
    )
}