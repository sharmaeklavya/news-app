import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} exact />
        <Route path="/product-list" component={Product} exact />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} exact />
        <Route path="*" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
