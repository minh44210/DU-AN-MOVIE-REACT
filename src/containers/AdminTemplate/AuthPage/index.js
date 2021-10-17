import React, { useState } from "react";
import { actAuthApi } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../component/Loader";

function AuthPage(props) {
	const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.authReducer.loading);
	const error = useSelector((state) => state.authReducer.error);

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const handleLogin = (event) => {
		event.preventDefault();
		dispatch(actAuthApi(state, props.history));
	};

	if (loading) return <Loader />;

	const renderNoti = () => {
		return (
			error && (
				<div className="alert alert-danger">
					{error?.response?.data?.content}
				</div>
			)
		);
	};

	return (

		<div className="container">
			<div className="row mt-5">
				<div className="col-md-10 mx-auto ">
					<h3>Login Admin</h3>
					{renderNoti()}
					<form onSubmit={handleLogin}>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								className="form-control"
								name="taiKhoan"
								onChange={handleOnChange}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								name="matKhau"
								onChange={handleOnChange}
							/>
						</div>
						<button type="submit" className="btn btn-success w-50 mb-4">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;