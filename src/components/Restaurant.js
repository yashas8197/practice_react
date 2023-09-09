import { FOOD_IMG_URL } from "../../utils/Constant";

const ResturentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={FOOD_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default ResturentCard;
