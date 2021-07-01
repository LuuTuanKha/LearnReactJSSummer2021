import Nav from "./component/Nav";
import routes from "./routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App container">
      <Nav/>
      Body
      
    </div>
    </Router>
  );
}

export default App;
