import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import {
  renderRoutesHome,
  renderRoutesAdmin,
  renderRoutesLogin,
} from "./routes";
// import LoginHomePage from "./containers/CheckOutHomeTemplate/loginPage";
// import RegisterPage from "./containers/CheckOutHomeTemplate/RegisterPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* HOME  */}
        {renderRoutesHome()}
        {/* ADMIN DASHBOARD */}
        {renderRoutesAdmin()}
        {/* LOGIN HOME */}
        {renderRoutesLogin()}
        {/* <LoginHomePage /> */}
        {/* Trang không tồn tại  */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
