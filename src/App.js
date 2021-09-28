import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




import Header from "./components/header/Header";
import Body from './components/body/Body.js';
import Footer from "./components/footer/Footer";


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />

      </div >
    );

  }
}

export default App;
