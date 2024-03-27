import img1 from "../img/img (1).jpg"
import img2 from "../img/img (2).jpg"
import img3 from "../img/img (3).jpg"
import img4 from "../img/img (4).jpg"
import img5 from "../img/img (5).jpg"
import img6 from "../img/img (6).jpg"
import img7 from "../img/img (7).jpg"
import img8 from "../img/img (8).jpg"
const category = [
    { "name": "פמוטים", "id": 1, "img": img1, "ref": "" },
    { "name": "גביעים", "id": 2, "img": img2, "ref": "./Shop" },
    { "name": "חנוכיות", "id": 3, "img": img3, "ref": "" },
    { "name": "מגשים לחלה", "id": 4, "img": img4, "ref": "" },
    { "name": "מוצרי הבדלה", "id": 5, "img": img5, "ref": "" },
    { "name": "קנדלברות", "id": 6, "img": img6, "ref": "" },
    { "name": "קופסאות אתרוג", "id": 9, "img": img7, "ref": "" },
    { "name": "מזוזות", "id": 10, "img": img8, "ref": "" }
]
export default function Home() {
    return (
        <>
            <div class="categories">
                {category.map(item => (
                    <div class="categoriesCard">
                        <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                            <img src={item.img} class="img-fluid" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <a href={item.ref} class="btn btn-outline-secondary" data-mdb-ripple-init>רוצה לקנות</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}