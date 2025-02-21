import BigbrewImage from "./assets/maxresdefault.jpg"

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={BigbrewImage} alt="BigBrew Image" />
      <h2 className="card-title">BigBrew</h2>
      <p className="card-text">Quench you thirst with a milktea</p>
    </div>
  );
}
export default Card;