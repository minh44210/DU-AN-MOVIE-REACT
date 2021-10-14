import React, { Component } from "react";
import "./style.css";
export default class PageNotFound extends Component {
	render() {
		return (
			<div>
				<div className="bg">
					<div className="site">
						<div className="sketch">
							<div className="bee-sketch red" />
							<div className="bee-sketch blue" />
						</div>
						<h1>
							404:
							<small>Page not found</small>
						</h1>
					</div>
				</div>
			</div>
		);
	}
}
