import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container ">
      
        <Link to="/" className="navbar-brand mx-auto font-weight-bold">
        {/* <i class="fa fa-mobile" ></i> */}
         Product Dashboard
        </Link>
        {/* <div>
          <Link to="/edit-product" className="btn btn-light ml-auto">
            Add New
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default TopNav;