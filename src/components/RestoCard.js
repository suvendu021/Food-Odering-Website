import CARD_URL from "../utils/constants";

const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="h-72 w-52 p-2 hover:bg-gray-300 shadow-lg mt-12 m-2 rounded-xl">
      <img
        className="w-48 h-36 rounded-xl"
        src={CARD_URL + cloudinaryImageId}
      />

      <h4 className="font-bold text-lg overflow-hidden whitespace-nowrap overflow-ellipsis">
        {name}
      </h4>
      <h6 className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
        {cuisines.join(", ")}
      </h6>
      <h6 className="font-bold text-sm">{costForTwo}</h6>
      <h6 className="text-xs font-medium">⭐{avgRating}</h6>
    </div>
  );
};
export default RestoCard;
