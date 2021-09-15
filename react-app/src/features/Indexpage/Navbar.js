import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
function Navbar({className}) {
    return (
      <header className={className}>
        <a to="/" className="brand">
          AnimeList
        </a>
        <a to="/create-product"></a>
      </header>
    );
  }
  Navbar.propTypes = {
    className: PropTypes.string.isRequired
  };
  export default styled(Navbar)`
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    border-bottom: 1px solid #dee2e6;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    color:white;
  
    padding: 1rem 2rem 1rem 2rem;
    position: fixed;
    z-index: 100;
  
    .brand {
      font-weight: bold;
      font-size: 1.5rem;
    }
  `;