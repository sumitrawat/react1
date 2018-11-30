import React, { Component } from "react";
//porps.total becomes {total} by destucturing
const Navbar = ({ total }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Total Products <span className="badge badge-primary">{total}</span>
      </a>
    </nav>
  );
};

export default Navbar;
