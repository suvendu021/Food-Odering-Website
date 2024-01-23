import CARD_URL from "../utils/constants";
const CardBackGround = {
  backgroundColor: "#f0f0f0",
};
const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="resto-card" style={CardBackGround}>
      <div>
        <img className="resto-img" src={CARD_URL + cloudinaryImageId} />
      </div>
      <h4>{name}</h4>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{costForTwo}</h6>
      <h6>{avgRating + " "}Stars</h6>
    </div>
  );
};
export default RestoCard;
