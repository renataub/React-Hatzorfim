import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function GoToPayment() {
    useEffect(() => {
        alert("האם אתה בטוח שאתה רוצה לעבור לתשלום?")
    }, [])
    const navigate = useNavigate();
    const product = useSelector(state => state.cartReducer);
    let sum = 0;
    product.forEach(element => {
        sum += (element.cartQTY * element.product_price)
    });
    return (
        <>
            <h6 style={{ "textAlign": "left", "margin": 30 }}>הסכום לתשלום הוא: {sum}$    </h6>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">תמונה</th>
                        <th scope="col">שם מוצר</th>
                        <th scope="col">מחיר</th>
                        <th scope="col">כמות</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(item => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td><img class="card-img-top" src={item.img} alt="Card image cap" style={{ "width": "10vh" }} /></td>
                            <td>{item.product_name}</td>
                            <td>{item.product_price}</td>
                            <td>{item.cartQTY}</td>
                        </tr>))}
                </tbody>
            </table>
            <button class="btn btn-outline-secondary" style={{ "textAlign": "left" }}>לתשלום</button>
        </>
    )
}