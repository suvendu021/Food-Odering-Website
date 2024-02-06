import { ITEM_IMG_URL } from "../utils/constants";
const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((data) => {
        const { id, name, isVeg, price, description, imageId } =
          data?.card?.info;
        return (
          <div key={id} className="font-jost">
            <div className="flex border-b border-black my-5 w-3/5 mx-auto h-auto">
              <div className="p-2 m-2 w-3/5">
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm">{isVeg == 1 ? "(veg)" : "(Non Veg)"}</p>
                <h5 className="font-semibold text-sm">
                  Rs{". " + price / 100}
                </h5>
                <p className="text-sm">{description}</p>
              </div>
              <div className="w-2/5 p-2 flex justify-center">
                <div>
                  <button className="p-1 bg-black text-white rounded-lg text-sm absolute mx-8 my-14">
                    Add +
                  </button>
                </div>
                <img src={ITEM_IMG_URL + imageId} className=" w-28 h-24 " />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemsList;
