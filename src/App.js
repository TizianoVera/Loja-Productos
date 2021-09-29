import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Modal } from "react-bootstrap";



import Header from "./components/header/Header";
import Body from './components/body/Body.js';
import Footer from "./components/footer/Footer";



class App extends Component {
  render() {

    return (
      <div className="App">
<<<<<<< HEAD
        <Header />
        <Body />
        <Footer />

      </div >
=======
           <Header />
           <Body />
          <Modal/>
           <Footer />
           
      </div>
>>>>>>> 32204df7e135b2c554a83f7c15bcd28af8f2e854
    );

  }
}

export default App;
