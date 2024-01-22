//body of app
import RestoCard from "./RestoCard";
import { rest_lists } from "../utils/restoData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search-item</div>
      <div className="resto-container">
        {rest_lists.map((restaurant) => (
          <RestoCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
