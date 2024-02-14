import { ITEM_IMG_URL } from "../utils/constants";
const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((data) => {
        const { id, name, isVeg, price, description, imageId } =
          data?.card?.info;
        return (
          <div key={id} className="font-jost text-sm">
            <div className="flex border-b border-black h-auto">
              <div className="p-1 m-1 w-3/5">
                <h4 className="font-semibold">{name}</h4>
                <p>{isVeg == 1 ? "(veg)" : "(Non Veg)"}</p>
                <h5 className="font-semibold ">Rs{". " + price / 100}</h5>
                <p>{description}</p>
              </div>
              {imageId ? (
                <div className="w-2/5 p-1 flex justify-center">
                  <div>
                    <button className="p-1 bg-black text-white rounded-lg  absolute mx-8 my-2 ">
                      Add +
                    </button>
                  </div>
                  <img
                    src={ITEM_IMG_URL + imageId}
                    className=" md:w-28 md:h-24 h-16 w-20 "
                  />
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemsList;
