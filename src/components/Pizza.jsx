function Pizza({ pizza }) {
  return (
    <>
      <p>{pizza.name}</p>
      <img src={pizza.photoName} alt="Pizza Photo" width={300} height={300} />
    </>
  );
}

export default Pizza;
