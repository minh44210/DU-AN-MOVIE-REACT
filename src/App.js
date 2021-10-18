import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import {
<<<<<<< HEAD
  renderRoutesHome,
  renderRoutesAdmin,
  renderRoutesLoginHome,
=======
	renderRoutesHome,
	renderRoutesAdmin,
	renderRoutesLogin,
>>>>>>> a445694aa891555bd8b34265ea6df67a2db07b6d
} from "./routes";
// import LoginHomePage from "./containers/CheckOutHomeTemplate/loginPage";
// import RegisterPage from "./containers/CheckOutHomeTemplate/RegisterPage";
function App() {
<<<<<<< HEAD
  return (
    <BrowserRouter>
      <Switch>
        {/* HOME  */}
        {renderRoutesHome()}
        {/* ADMIN DASHBOARD */}
        {renderRoutesAdmin()}
        {/* LOGIN HOME */}
        {renderRoutesLoginHome()}
        {/* <LoginHomePage /> */}
        {/* Trang không tồn tại  */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
=======
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
>>>>>>> a445694aa891555bd8b34265ea6df67a2db07b6d
}
export default App;
