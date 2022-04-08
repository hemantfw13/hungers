import { useEffect, useState } from "react";
import "./RestaurantDetails.css";

export const RestaurantDetails = ({ obj, pay }) => {
  const [accept, setAccept] = useState([]);

  useEffect(() => {
    let arr = [];
    // console.log(pay)
    for (var key in pay) {
      if (pay[key] === true) {
        arr.push(key);
      }
    }
    setAccept([...arr]);
  }, []);
  // console.log(accept)

  return (
    <div id="main">
      <div id="left">
        <img src={obj.url} />
      </div>

      <div>
        <h3>Name:{obj.name}</h3>
        {/* <h3>{obj.}Categories</h3> */}
        <h3>Cost for two:{obj.cost_for_two}</h3>
      </div>
      <div>
        <h3>Accepts</h3>
        {accept.map((a) => {
          return <span>{a}, </span>;
        })}
        <h3>Stars:{obj.stars}</h3>
        <h3>Votes:{obj.votes}</h3>
      </div>
    </div>
  );
};
