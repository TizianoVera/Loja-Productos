import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
//import "./Modal"
import { IconName, BsStarFill, } from "react-icons/bs";
import "../../assets/Card1.css";
import { ImCart } from "react-icons/im";


export default class CardProduct extends Component {


  render() {

    return (
      <div className="cardBod">
        <Card style={{ width: "13rem" }} >
          <Card.Img variant="top" src={this.props.img} />

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.descriçao}</Card.Text>

            <span className="span price">{this.props.precios} </span>
            <div class=" icons star mt-2 mb-3 align-items-center ">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="iconsconpra">
            

              <Button
                variant="dark"
                size="sm"
                className="comprautton" 
              >
                comprar
              </Button>{" "}


              <Button

                variant="warning "
                size="sm"
                className="comprautton itenCard"
              > 
                <ImCart /> +
              </Button>{" "}
            </div>
          </Card.Body>
        </Card>   


      </div>

    );
  }
}

