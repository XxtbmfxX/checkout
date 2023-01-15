import "../styles/items.css";
import Item from "./Item";

import img1 from "../assets/photo1.png";
import img2 from "../assets/photo2.png";

export default function items(props) {
  return (
    <>
      <article className="FormItems">
        <Item
          image={img1}
          title="Vintage Backpag"
          discount={props.prices[0]}
          price={props.discount[0]}
          count={props.counter1}
          setcount={props.setcounter1}
        />
        <Item
          image={img2}
          title="Levi Shoes"
          discount={props.prices[1]}
          price={props.discount[1]}
          count={props.counter2}
          setcount={props.setcounter2}
        />

        <div className="Total">
          <section className="Items_ammount">
            <small>Shipping</small>
            <small> $19 </small>
          </section>

          <section className="Items_ammount">
            <small>Total</small>
            <small>{props.Total.toFixed(2)}</small>
          </section>
        </div>
      </article>
    </>
  );
}
