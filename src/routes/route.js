import { Redirect, Route, Switch } from "react-router-dom";
import { path } from "./constant";

const Router = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={path.home} />
      <Route path={path.home}>
        <div></div>
      </Route>
      <Route path={path.createBook}>
        <div></div>
      </Route>
      <Route path={`${path.updateBook}/:bookId`}>
        <div></div>
      </Route>
      <Route path={`${path.detailBook}/:bookId`}>
        <div></div>
      </Route>
      <Route path="*">
        <div>ERROR 404</div>
      </Route>
    </Switch>
  );
};

export default Router;
