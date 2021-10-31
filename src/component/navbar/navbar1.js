import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useUserContext } from "./../../contexts/Authcontentx";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { useUserContext } from "./../../contexts/Authcontentx";
function Navbar1() {
  const Cart = useSelector((state) => state.Cart);
  console.log(Cart);
  const [error, setError] = useState("");

  const { user, logoutUser } = useUserContext();
  const history = useHistory();
  // const sex = localStorage.getItem("mp");
  console.log(user);
  async function handleLogout() {
    setError("");

    try {
      await logoutUser();
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <div className="container-headers">
        <div className="container_header-topbar">
          <div className="container__waper">
            <ul>
              <li>
                <span>
                  <Link>RSS</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link>tin tức</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link>Kênh người bán</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="mail">
            <span style={{ color: "red" }}>
              {" "}
              <strong style={{ color: "red" }}>
                {/* Email: {user.displayName} */}
              </strong>{" "}
            </span>
            {error && <Alert variant="danger">{error}</Alert>}
            <button className="btn-mail" onClick={handleLogout}>
              Log out
            </button>
          </div>
          <div className="container__waper2">
            <ul>
              <li></li>
              <li>
                <span>
                  <Link>Tài Khoản</Link>
                </span>
                <div className="formss">
                  <ul className="ul">
                    <li>
                      <Link className="login" to="/login">
                        {" "}
                        Đăng nhập
                      </Link>
                    </li>

                    <li>
                      <Link className="login" to="/signup">
                        {" "}
                        Đăng kí
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="Gio">
                <span>
                  <Link
                    to={
                      user
                        ? "/cart"
                        : <h1>login</h1> && <Redirect to="/login" />
                    }
                  >
                    Giỏ hàng
                  </Link>
                  <div className="quantity-title">
                    <span className="quantity" style={{ color: "red" }}>
                      {" "}
                      {user ? Cart.length : 0}
                    </span>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar1;
