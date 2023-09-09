import resList from "../../utils/mockData";
import ResturentCard from "./Restaurant";

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResturentCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
