export default function Item({
  image = "https://img.freepik.com/premium-vector/happy-anime-face-manga-style-big-blue-eyes-little-nose-big-kawaii-mouth-yellow-sparkles-her-eyes-hand-drawn-illustration_163875-596.jpg?w=2000",
  title = "item Title",
  price = "$price",
  discount = "$Discount",
  count,
  setcount,
}) {
  const handleLess = () => {
    if (count === 1) {
      setcount(1);
    } else {
      setcount(count - 1);
    }
  };
  const handleMore = () => {
    setcount(count + 1);
  };

  return (
    <article className="Item">
      <img src={image} alt={title} className="Item_image" />
      <section className="Item_data">
        <h3>{title}</h3>
        <div className="Item_data-price">
          <span>${discount}</span>
          <span>${price}</span>
        </div>
        <div className="Item_ammount">
          {" "}
          <span onClick={handleLess}>-</span> {count}{" "}
          <span onClick={handleMore}>+</span>{" "}
        </div>
      </section>
    </article>
  );
}
