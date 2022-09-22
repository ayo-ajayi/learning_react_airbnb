export default function Card(props) {
  const prop = props.item;
  let badgeText;
  if (prop.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (prop.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${prop.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.svg" className="card--star" />
        <span>{prop.stats.rating}</span>
        <span className="grey">({prop.reviewCount}) • </span>
        <span className="grey">{prop.location}</span>
      </div>
      <p className="card--title">{prop.title}</p>
      <p className="card--price">
        <span className="bold"> From ${prop.price} </span>/ person{" "}
      </p>
    </div>
  );
}
