import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Appoinment from "./components/Appoinment/Appoinment";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route exact path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
