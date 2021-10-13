import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_component/Navbar";
import PageNotFound from "../PageNotFound/index";

export default function HomeTemplate(props) {
  const { exact, path, component } = props;

  return (
    <>
      <Navbar />

      <Route exact={exact} path={path} component={component} />
    </>
  );
}
