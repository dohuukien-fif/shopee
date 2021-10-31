import React, { useState, useEffect, useSelector } from "react";
import Dropdow from "./dropdow";
import { Button } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Search from "./Autocomplete";
import axios from "axios";
import { useUserContext } from "./../../contexts/Authcontentx";
function Navbar2() {
  const [search, setsearch] = useState(false);
  const { user, logoutUser } = useUserContext();
  const [Api, setApi] = useState([]);
  const ProgLang = ["Javascript", "Java", "Python", "Nodejs", "Reactjs"];
  const FetchApi = async () => {
    const response = await axios
      .get("https://607ab7e2bd56a60017ba2fe2.mockapi.io/api/product")
      .catch((err) => {
        console.log("lỗi");
      });
    setApi(response.data);
  };
  console.log(Api);
  useEffect(() => {
    FetchApi();
  }, []);
  console.log(user);
  return (
    <div>
      <div className="container__header">
        <div className="header">
          <div className="Header1">
            <div>
              <BiMessageDetail className="icon_header" />
            </div>
            <div className="hotel">
              <h1> {user ? user.displayName : <h1>lo gin</h1>}</h1>
              <span>Hotline:093.9348888</span>
              <br />
              <span>Tổng đài:1900 232322</span>
            </div>
          </div>
          <div className="Header2">
            <Link to="/">
              <img
                className="header--image"
                src="https://vuahanghieu.com/assets/images/logo.svg"
              />
            </Link>
          </div>

          <div className="Header3">
            <BsSearch
              className={search ? "activesearch" : "icon-search"}
              onClick={() => setsearch(!search)}
            />
            {search && (
              <div className="search">
                <input
                  className="header3_input"
                  type="text"
                  placeholder=" Tìm Kiếm Sản Phẩm,Thương Hiệu"
                ></input>
                <button className="btns">
                  <AiOutlineSearch />
                </button>
              </div>
            )}
          </div>
          <div className="Header4">
            <div className="search">
              <Search lang={Api} />
              <button className="btns">
                <AiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
        <Dropdow />
      </div>
    </div>
  );
}
export default Navbar2;
