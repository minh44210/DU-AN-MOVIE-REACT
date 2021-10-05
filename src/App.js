import "./App.css";
import AboutPage from "./containers/HomeTemplete/AboutPage";
import HomePage from "./containers/HomeTemplete/HomePage";
import ListMoviePage from "./containers/HomeTemplete/ListMoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      {/* Trang chủ */}
      <Route exact path="/" component={HomePage} />
      {/* About */}
      <Route path="/about" component={AboutPage} />
      {/* Moive List */}
      <Route path="/movie-list" component={ListMoviePage} />
      {/* Trang không tồn tại  */}
      <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
