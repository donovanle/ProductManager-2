import {BrowserRouter, Route, Switch} from "react-router-dom"
import AllProducts from "./views/AllProducts";
import CreateProduct from "./views/CreateProduct";
import OneProduct from "./views/OneProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <CreateProduct/>
          <AllProducts/>
        </Route>
        <Route exact path="/products/:id">
          <OneProduct/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
