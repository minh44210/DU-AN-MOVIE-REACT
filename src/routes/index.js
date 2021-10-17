// import { Switch } from "@mui/material";
// HOME
import AboutPage from "../containers/HomeTemplete/AboutPage";
import HomePage from "../containers/HomeTemplete/HomePage";
import ListMoviePage from "../containers/HomeTemplete/ListMoviePage";
import DetailMoive from "../containers/HomeTemplete/DetailMoive";
import DetailBg from "../containers/HomeTemplete/_component/DetailBg";
import DatVeMoive from "../containers/HomeTemplete/DatVeMoive";
import HomeTemplate from "../containers/HomeTemplete";
import AdminTemplate from "../containers/AdminTemplate";
// / HOME
// LOGIN HOME
import RegisterPage from "../containers/CheckOutHomeTemplate/RegisterPage";
import Login from "../containers/CheckOutHomeTemplate/loginPage";
import Checkout from "../containers/CheckOutHomeTemplate/index";
// LOGIN HOME
// ADMIN
import DashBoardPage from "../containers/AdminTemplate/DashBoardPage";
import Films from "../containers/AdminTemplate/Films";
import AuthPage from "../containers/AdminTemplate/AuthPage"
import { Dashboard } from "@mui/icons-material";
// ADMIN

// HOME
const routesHome = [
	{
		exact: true,
		path: "/",
		component: HomePage,
	},
	{
		exact: false,
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

// LOGIN
const routesLogin = [
	{
		exact: false,
		path: "/dangky",
		component: RegisterPage,
	},
	{
		exact: false,
		path: "/Login",
		component: Login,
	},
];

// ADMIN
const routesAdmin = [
	{
		exact: false,
		path: "/auth",
		component: AuthPage,
	},
	{
		exact: false,
		path: "/dashboard",
		component: DashBoardPage,
	}, {
		exact: false,
		path: "/dashboard/films",
		component: Films,
	},
];
function renderRoutesHome() {
	return routesHome.map((route, index) => {
		return (
			<HomeTemplate
				key={index}
				exact={route.exact}
				path={route.path}
				component={route.component}
			/>
		);
	});
}
function renderRoutesLogin() {
	return routesLogin.map((route, index) => {
		return (
			<Checkout
				key={index}
				exact={route.exact}
				path={route.path}
				component={route.component}
			/>
		);
	});
}
function renderRoutesAdmin() {
	return routesAdmin.map((route, index) => {
		return (
			<AdminTemplate
				key={index}
				exact={route.exact}
				path={route.path}
				component={route.component}
			/>
		);
	});
}
export { renderRoutesHome, renderRoutesAdmin, renderRoutesLogin };
