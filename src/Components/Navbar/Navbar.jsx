import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
    </div>
  );
};
