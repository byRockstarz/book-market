import { Redirect, Route, Switch } from "react-router-dom";
import { path } from "./constant";

const Router = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={path.home} />
      <Route path={path.home}>
        <div>home</div>
      </Route>
      <Route path={path.createBook}>
        <div>createbook</div>
      </Route>
      <Route path={`${path.updateBook}/:bookId`}>
        <div>update</div>
      </Route>
      <Route path={`${path.detailBook}/:bookId`}>
        <div>detailbook</div>
      </Route>
      <Route path="*">
        <div>ERROR 404 NOT FOUND</div>
      </Route>
    </Switch>
  );
};

export default Router;
