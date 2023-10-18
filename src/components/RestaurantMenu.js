import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../../utils/Constant";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log(json);
    setResMenu(json.data);
  };

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
