import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { IconName, BsStarFill, } from "react-icons/bs";
import "../../assets/Card1.css";
import {  ImCart } from "react-icons/im";


export default class cCardProduct extends Component {
  

  render() {
    return (
      <div className="cardBod">
        <Card style={{ width: "12rem" }}>
          <Card.Img variant="top" src={this.props.img} />

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.descriçao}</Card.Text>

            <span>{this.props.precios} </span>
            <div class=" icons star mt-2 mb-3 align-items-center ">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div>
              {/* button do modal */}
              
              <Button
                
                variant="dark"
                size="sm"
                className="comprautton"
              >
                Comprar 
              </Button>{" "}
              <Button
                
                variant="warning "
                size="sm"
                className="comprautton"
              >
                 <ImCart/>
              </Button>{" "}
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
