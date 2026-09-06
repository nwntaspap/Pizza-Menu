import Pizza from "./Pizza";

function PizzaMenu({ data }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine, 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      {data && data.length > 0 ? (
        <ul className="pizzas">
          {data.map((pizza) => (
            <Pizza key={pizza.name} pizza={pizza} />
          ))}
        </ul>
      ) : (
        // Empty State
        <p>No Pizzas to show</p>
      )}
    </main>
  );
}

export default PizzaMenu;
