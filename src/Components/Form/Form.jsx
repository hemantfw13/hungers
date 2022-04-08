import { useState } from "react";
import { Link } from "react-router-dom";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    cost_for_two: 0,
    image: "",
    category: "",
    votes: 0,
    stars: 0,
    payment_methods: {
      card: false,
      cash: false,
      upi: false,
    },
  });

  const handleChange = (e) => {
    if (e.target.id == "card") {
      let c = formData.payment_methods.card;
      setFormData({
        ...formData,
        payment_methods: { ...formData.payment_methods, card: !c },
      });
    } else if (e.target.id == "cash") {
      let c = formData.payment_methods.cash;
      setFormData({
        ...formData,
        payment_methods: { ...formData.payment_methods, cash: !c },
      });
    } else if (e.target.id == "upi") {
      let c = formData.payment_methods.upi;
      setFormData({
        ...formData,
        payment_methods: { ...formData.payment_methods, upi: !c },
      });
    } else {
      setFormData({ ...formData, [e.target.className]: e.target.value });
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/get-restaurants", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          className="name"
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <br />
        <label>Cost for two</label>
        <br />
        <input
          type="number"
          className="cost_for_two"
          onChange={handleChange}
          placeholder="Enter Cost for two"
        />
        <br />
        <label>Image</label>
        <br />
        <input
          type="text"
          className="image"
          onChange={handleChange}
          placeholder="Enter Image URL"
        />
        <br />
        <label>Category</label>
        <br />
        <input type="text" className="category" onChange={handleChange} />
        <br />
        <label>Votes</label>
        <br />
        <input type="number" className="votes" onChange={handleChange} />
        <br />
        <label>Stars</label>
        <br />
        <input
          type="number"
          className="stars"
          onChange={handleChange}
          placeholder="Enter Stars"
        />
        <br />
        <label>Payment Methods</label>
        <br />

        <input
          type="checkbox"
          className="payment"
          id="cash"
          onChange={handleChange}
        />
        <span>Cash</span>
        <br />
        <input
          type="checkbox"
          className="payment"
          id="card"
          onChange={handleChange}
        />
        <span>Card</span>
        <br />
        <input
          type="checkbox"
          className="payment"
          id="upi"
          onChange={handleChange}
        />
        <span>UPI</span>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
