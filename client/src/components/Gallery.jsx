import Card from "./Card";

export default function Gallery({ products }) {
  console.log(products);
  return (
    <div className="p-10 gallery">
      {products.map((p, i) => {
        return (
          <Card
            key={i}
            id={p.id}
            name={p.title}
            description={p.description}
            price={p.price}
            image={p.image}
          />
        );
      })}
    </div>
  );
}
