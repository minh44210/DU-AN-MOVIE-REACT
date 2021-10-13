import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
<<<<<<< HEAD
import { renderRoutesHome, renderRoutesAdmin } from "./routes";
// import Footer from "./containers/HomeTemplete/_component/footer";
=======
import { renderRoutesHome } from "./routes";
import Footer from "./containers/HomeTemplete/_component/footer";
>>>>>>> 743211a6bdd33b316b5711b31e3b245b8cff3fdb
import "antd/dist/antd.css";

function App() {
<<<<<<< HEAD
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
=======
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        {/* Trang chủ */}
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* About */}
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* Moive List */}
        {/* <Route path="/movie-list" component={ListMoviePage} /> */}
        {/* Trang không tồn tại  */}
        <Route path="" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
>>>>>>> 743211a6bdd33b316b5711b31e3b245b8cff3fdb
}

export default App;
