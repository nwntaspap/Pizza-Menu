import Pizza from "./Pizza";

function PizzaMenu({ data }) {
  return (
    <>
      <h2>Our Menu</h2>
      {data.map((pizza) => (
        <Pizza key={pizza.name} pizza={pizza} />
      ))}
    </>
  );
}

export default PizzaMenu;
