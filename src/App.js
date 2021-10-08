import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { renderRoutesHome } from "./routes";
import Navbar from "./containers/HomeTemplete/_component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
