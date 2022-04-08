import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Redux/action";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";

export const Show = () => {
  const data =
    useSelector((store) => {
      return store.data;
    }) || [];
  const dispatch = useDispatch();
  const [showData, setShowdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/get-restaurants").then((res) => {
      res.json().then((res) => {
        dispatch(addData(res));
        setShowdata([...res]);
      });
    });
  }, []);

  const btn3 = () => {
    let arr = [];
    data.forEach((item) => {
      if (item.stars > 3) {
        arr.push(item);
      }
    });
    arr = arr.sort((a, b) => {
      return a.stars - b.stars;
    });
    setShowdata([...arr]);
  };

  const btn4 = () => {
    let arr = [];
    data.forEach((item) => {
      if (item.stars > 4) {
        arr.push(item);
      }
    });
    // console.log(arr)
    arr = arr.sort((a, b) => {
      return a.stars - b.stars;
    });
    setShowdata([...arr]);
  };

  const btn2 = () => {
    let arr = [];
    data.forEach((item) => {
      if (item.stars > 2) {
        arr.push(item);
      }
    });
    // console.log(arr)
    arr = arr.sort((a, b) => {
      return a.stars - b.stars;
    });
    setShowdata([...arr]);
  };

  const btn1 = () => {
    let arr = [];
    data.forEach((item) => {
      if (item.stars > 1) {
        arr.push(item);
      }
    });
    // console.log(arr)
    arr = arr.sort((a, b) => {
      return a.stars - b.stars;
    });
    setShowdata([...arr]);
  };

  const All = () => {
    setShowdata([...data]);
  };

  const Payment = (a) => {
    let arr = [];
    if (a == "card") {
      data.forEach((item) => {
        if (
          item.payment_methods.card === true &&
          item.payment_methods.cash === false
        ) {
          arr.push(item);
        }
      });
    } else if (a === "cash") {
      data.forEach((item) => {
        if (
          item.payment_methods.card == false &&
          item.payment_methods.cash == true
        ) {
          arr.push(item);
        }
      });
    } else if (a == "all") {
      data.forEach((item) => {
        if (
          item.payment_methods.card == true &&
          item.payment_methods.cash == true
        ) {
          arr.push(item);
        }
      });
    }
    console.log(arr);
    setShowdata([...arr]);
  };

  const LowHigh = (a) => {
    let arr = data;

    if (a == "low") {
      arr = arr.sort((a, b) => {
        return a.cost_for_two - b.cost_for_two;
      });
    } else {
      arr = arr.sort((a, b) => {
        return b.cost_for_two - a.cost_for_two;
      });
    }
    setShowdata([...arr]);
  };

  return (
    <div>
      <div>
        <button onClick={All}>All</button>
        <button onClick={btn1}>1 Start</button>
        <button onClick={btn2}>2 Start</button>
        <button onClick={btn3}>3 Start</button>
        <button onClick={btn4}>4 Start</button>

        <br />
        <button
          onClick={() => {
            Payment("all");
          }}
        >
          All methods
        </button>
        <button
          onClick={() => {
            Payment("card");
          }}
        >
          Card
        </button>
        <button
          onClick={() => {
            Payment("cash");
          }}
        >
          Cash
        </button>
        <br />
        <button
          onClick={() => {
            LowHigh("high");
          }}
        >
          High to Low
        </button>
        <button
          onClick={() => {
            LowHigh("low");
          }}
        >
          Low to High
        </button>

        {showData.map((a, i) => {
          return <RestaurantDetails key={i} obj={a} pay={a.payment_methods} />;
        })}
      </div>
    </div>
  );
};
