import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { IconName, BsStarFill } from "react-icons/bs";
import "../../assets/Card1.css";

export default class cCardProduct extends Component {
  // activação do modal
  // constructor (){
  //    super()
  //    this.state = {
  //     show:false
  //  }

  // }
  //   handleModal(){
  //   this.setState({show:!this.state.show})
  //  }
  //fin activaçao do modal

  render() {
    return (
      <div className="cardBodyProduto">
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
                onClick={() => {
                  this.handleModal();
                }}
                variant="dark"
                size="sm"
                className="comprautton"
              >
                Comprar
              </Button>{" "}
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
