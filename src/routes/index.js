// import { Switch } from "@mui/material";
import AboutPage from "../containers/HomeTemplete/AboutPage";
import HomePage from "../containers/HomeTemplete/HomePage";
import ListMoviePage from "../containers/HomeTemplete/ListMoviePage";
import { Route } from "react-router-dom";
import DetailMoive from "../containers/HomeTemplete/DetailMoive";
import DetailBg from "../containers/HomeTemplete/_component/DetailBg";
import DatVeMoive from "../containers/HomeTemplete/DatVeMoive";

const routesHome = [
  {
    exact: true,
    path: "/home",
    component: HomePage,
  },
  {
    exact: true,
    path: "/",
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
  {
    exact: false,
    path: "/datve",
    component: DatVeMoive,
  },
  {
    exact: false,
    path: "/ungdung",
    component: DetailBg,
  },

  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoive,
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
