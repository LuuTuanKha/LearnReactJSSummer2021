import Nav from "./component/Nav";
import routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
     const maproutes = routes.map((route, index) => {
          return (
               <Route key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
               />
          );
     });
     return (
          <Router>
               <div className="App container">
                  
                    
                    {/* <img src='http://itplus-academy.edu.vn/upload/b0c061227df9ed11a921c1977ffddd23/images/2212/nhung-dieu-quan-trong-cua-reactjs-ban-can-biet-2.png' className="rounded mx-auto d-block" alt='Banner'/> */}
                    <Nav />
                    <br />
                    <Switch>{maproutes}</Switch>
               </div>
          </Router>
     );
}

export default App;
