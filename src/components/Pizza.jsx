function Pizza({ pizza: { name, ingredients, price, photoName, soldOut } }) {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={`${name} Photo`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : `Price: ${price}$`}</span>
      </div>
    </div>
  );
}

export default Pizza;
