import { Redirect, Route, Switch } from "react-router-dom";
import { path } from "./constant";
import Create from "../pages/book/create";
import Home from "../pages/home";

const Router = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={path.home} />
      <Route path={path.home}>
        <Home />
      </Route>
      <Route path={path.createBook}>
        <Create />
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
