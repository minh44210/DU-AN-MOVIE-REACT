// import { Switch } from "@mui/material";
import AboutPage from "../containers/HomeTemplete/AboutPage";
import HomePage from "../containers/HomeTemplete/HomePage";
import ListMoviePage from "../containers/HomeTemplete/ListMoviePage";
import { Route } from "react-router-dom";

const routesHome = [
  {
    exact: true,
    path: "/home",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/movie-list",
    component: ListMoviePage,
  },
];
// const routesAdmin = [];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
}
export { renderRoutesHome };
