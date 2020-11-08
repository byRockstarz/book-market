import { Redirect, Route, Switch } from "react-router-dom";
import { path } from "./constant";
import HomePage from "../pages/home";
import CreateBookPage from "../pages/book/create";
import DetailPage from "../pages/book/detail";

const Router = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={path.home} />
      <Route path={path.home}>
        <HomePage />
      </Route>
      <Route path={path.createBook}>
        <CreateBookPage />
      </Route>
      <Route path={`${path.updateBook}/:bookId`}>
        <div></div>
      </Route>
      <Route path={`${path.detailBook}/:bookId`}>
        <DetailPage />
      </Route>
      <Route path="*">
        <div>ERROR 404</div>
      </Route>
    </Switch>
  );
};

export default Router;
