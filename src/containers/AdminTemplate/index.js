import React from "react";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "./_components/Sidebar";

function LayoutAdmin(props) {
	return (
		<>
			< Sidebar />
			{props.children}
		</>
	);
}
function AdminTemplate({ Component, ...props }) {
	return (
		<Route
			{...props}
			render={(propsRoute) => {
				if (localStorage.getItem("UserAdmin")) {
					return (
						<LayoutAdmin>
							<Component {...propsRoute} />
						</LayoutAdmin>
					);
				}

				//redirect ve /auth
				return <Redirect to="/auth" />;
			}}
		/>
	);
}
export default AdminTemplate;
