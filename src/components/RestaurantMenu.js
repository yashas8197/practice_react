import Shimmer from "./Shimmer";
import useRestaurantsMenu from "../../utils/useRestaurantsMenu";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantsMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}-{" " + costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.card?.id}>{item.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
