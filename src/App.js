import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductListing from "./component/productList";
import Product2 from "./component/product22";
import "./App.css";
import ProductDetails from "./component/productDetel";

import Mota2 from "./component/mota2";
import Navbar from "./component/navbar/navbar";
import Homes from "./component/banner/banner";
import Watch from "./component/Watch/menu";
import Mota3 from "./component/motass/mota3";
import Cart from "./container/cartContainer";
import Tui from "./component/túi/menu";
import MotaTui from "./component/motass/MotaTui";
import Nuoc from "./component/nươc hoa/menu";
import MotaHoa from "./component/motass/NươcHoa";
import Giày from "./component/Giay/menu";
import MotaGiay from "./component/motass/moTagiay";
import Thoitrang from "./component/Thoitrang/menu";
import Hot from "./component/kinh/menu";
import Hotm from "./component/motass/kinh";
import MotaFa from "./component/Mota3/MotaFashing";
import Mu from "./component/Mũ/menu";
import MotaMu from "./component/Mota3/MotaMu";
import Mypham from "./component/myphams/menu";
import MotaMypham from "./component/Mota3/MotaMypham";
import Son from "./component/son/menu";
import MotaSon from "./component/Mota3/MotaSon";
import Carts from "./component/Mota3/cart";
import Login from "./component/login/login";
import FogetPaworks from "./component/login/forgetPasswork";
import UpdateProfile from "./component/login/updateProvider";
import Gies from "./component/login/gisres";
import PrivateRoute from "./component/login/pricvete";
import { useUserContext } from "./contexts/Authcontentx";

import Nabar1 from "./component/navbar/navbar1";
import { Container } from "react-bootstrap";
import Homess from "./component/navbar/glHome";
function App() {
  const { user, registerUser, logoutUser } = useUserContext();
  return (
    <div className="App">
      <Router>
        <>
          {" "}
          {/* {registerUser !== null && <Redirect to="/login" />} */}
          {logoutUser && <Redirect to="/" />}
          {user === null && <Redirect to="/" />}
          {user && <Redirect to="/" />}
          <Navbar />
          <Switch>
            <Route path="/" component={Homess} exact />
            <Route path="/productList" component={ProductListing} />
            <Route path="/Watch" component={Watch} />
            <Route path="/túi-sách" component={Tui} />
            <Route path="/Thoi-trang" component={Thoitrang} />
            <Route path="/Nước- hoa" component={Nuoc} />
            <Route path="/Kính" component={Hot} />
            <Route path="/Giày" component={Giày} />
            <Route path="/Mũ" component={Mu} />
            <Route path="/My-pham" component={Mypham} />
            <Route path="/Son" component={Son} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={FogetPaworks} />
            <Route path="/signup" component={Gies} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/product" component={Product2} />
            <Route path="/Producsi/:garyId" component={Hotm} />
            <Route path="/products/:productIds" component={Mota2} />
            <Route path="/watchs/:ids" component={Mota3} />
            <Route path="/tui-sach/:ids" component={MotaTui} />
            <Route path="/nươc-hoa/:idss" component={MotaHoa} />
            <Route path="/Giay/:idsss" component={MotaGiay} />
            <Route path="/Thời-trang/:fashingId" component={MotaFa} />
            <Route path="/Mỹ-phẩm/:myphamId" component={MotaMypham} />
            <Route path="/Sons/:sonId" component={MotaSon} />
            <Route path="/Mu/:muId" component={MotaMu} />

            <Route path="/Cart" component={Cart} />

            {/* <Route exact path="/" component={Homes} /> */}
            <Route path="/update-profile" component={UpdateProfile} />
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}></div>
            </Container>

            <Route>404 Not Found!</Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
