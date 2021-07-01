import Nav from "./component/Nav";
import routes from "./routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const maproutes = routes.map((route,index) => {
    return <Route path={route.path} component={route.component} exact={route.exact}/>
  });
  return (
    <Router>
    <div className="App container">
      <Nav/>
      <br />
      <Switch>

        {maproutes}
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
