import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_component/Navbar";
<<<<<<< HEAD
// import PageNotFound from "../PageNotFound/index";
import Footer from "./_component/footer";
export default function HomeTemplate(props) {
	const { exact, path, component } = props;

	return (
		<>
			<Navbar />

			<Route exact={exact} path={path} component={component} />
			<Footer />
		</>
	);
=======
import PageNotFound from "../PageNotFound/index";

export default function HomeTemplate(props) {
  const { exact, path, component } = props;

  function LayoutHome(props) {
    return (
      <>
        <Navbar />
        {props.children}
      </>
    );
  }

  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={component} />
    </LayoutHome>
  );
>>>>>>> 743211a6bdd33b316b5711b31e3b245b8cff3fdb
}
