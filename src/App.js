import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { renderRoutesHome, renderRoutesAdmin } from "./routes";

import "antd/dist/antd.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				{renderRoutesHome()}
				{renderRoutesAdmin()}
				{/* Trang chủ */}
				{/* <Route exact path="/" component={HomePage} /> */}
				{/* About */}
				{/* <Route path="/about" component={AboutPage} /> */}
				{/* Moive List */}
				{/* <Route path="/movie-list" component={ListMoviePage} /> */}
				{/* Trang không tồn tại  */}
				<Route path="" component={PageNotFound} />
			</Switch>
		</BrowserRouter>
	);
}
export default App;
