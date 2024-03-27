import { Link } from 'react-router-dom';
import logo1 from "./img/logo.png";
export default function Nav() {
    return (

        <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist" style={{ "backgroundColor": 'rgb(50, 33, 126)', "color": 'white', "fontSize": "3vh" }}>
            <li class="nav-item" role="presentation">
                <img class="logo1" src={logo1} />
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" >
                    <Link to="/">אודות</Link>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link">
                    <Link to="/cart">עגלה</Link>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" >
                    <Link to="/shop">מוצרים</Link>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" >
                    <Link to="/home">בית</Link>

                </a>
            </li>
        </ul>


    )
}
