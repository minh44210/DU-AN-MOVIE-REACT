import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { actLogout } from "./../../AuthPage/modules/actions";
import { Link, withRouter } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { connect } from "react-redux";
import "./index.css";
import { IconContext } from "react-icons";

function Sidebar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className="navbar">
					<Link to="#" className="menu-bars">
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
				</div>
				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>

							);
						})}
						<li className="nav-text m-2 text-light">
							Logout
							<button className="btn-logout btn-primary m-1" onClick={() => {
								this.props.logout(this.props.history);
							}}><IoIcons.IoIosLogOut /></button>
						</li>
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		logout: (history) => {
			dispatch(actLogout(history));
		},
	};
};

const ConnectedComponent = connect(null, mapDispatchToProps)(Sidebar);
export default withRouter(ConnectedComponent);

