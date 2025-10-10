export default function Card({ ...props }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">${props.price}</div>
          <div className="badge badge-outline">Agregar</div>
        </div>
      </div>
    </div>
  );
}
