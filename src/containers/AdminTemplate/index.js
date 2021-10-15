import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Sidebar from "./_components/Sidebar";
import DashBoardPage from "./../AdminTemplate/DashBoardPage";

function test(props) {
  const { exact, path, component } = props;
  return (
    <>
      <DashBoardPage />

      <Route exact={exact} path={path} component={component} />
    </>
  );
}
function AdminTemplate(props) {
  const { exact, path, component } = props;

  return (
    <>
      <Route exact={exact} path={path} component={component} />
    </>
  );
}
export default AdminTemplate;
