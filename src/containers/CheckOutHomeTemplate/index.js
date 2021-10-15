import React from "react";
import { Route } from "react-router-dom";
import LoginHomePage from "./loginPage/index";
import RegisterPage from "./RegisterPage";
// import PageNotFound from "../PageNotFound/index";

function LonginTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <LoginHomePage />
      <RegisterPage />

      <Route exact={exact} path={path} component={component} />
    </>
  );
}

function RegsiterTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <Route exact={exact} path={path} component={component} />
    </>
  );
}
export default (LonginTemplate, RegsiterTemplate);
