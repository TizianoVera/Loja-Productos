import React from "react";
import "../../assets/styles.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import CardBody from "../body/CardBody";
import {  ImCart } from "react-icons/im";

const Header = () => {
  return (
    <div className="">




      <Navbar className="Navbar align-content-lg-between" bg="" expand="lg" >
        <Navbar.Brand className="Navbarbrand" bg="dark" href="#action1">TechWorld </Navbar.Brand>
        <Navbar.Toggle className="dropdown-toggle" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link className="Nav" href="#action1" bg="white">Home</Nav.Link>
            <Nav.Link className="Link" href="#action2">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action </NavDropdown.Item>
              <NavDropdown.Divider className="divider" />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className=" d-flex justify-content-flex-end  align-content-center">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 align-content-center"
              
              aria-label="Search"
            />
            <Button variant="info " className="align-content-center">Search</Button>
            

               {/* <button type="button" placeholder="Search"
              className="mr-"  variant="warning" size="sm" ><ImCart/> </button> */}
            {/* <a name="" id="" class="btn btn-info m-2"  style={{ width: "3rem" }} href="#" role="button" m-3> </a> */}
           
          </Form>
          <Button type="search"
              placeholder="Search"
              className="m-2 align-content-center"
              aria-label="Search" size="sm" variant="warning " ><ImCart/></Button>
        </Navbar.Collapse>
      </Navbar>


      {/* comenso o carousel */}

      <Carousel fade className="mt-3">
        <Carousel.Item>
          <img
            className="vtex-carousel-2-x-img vtex-carousel-2-x-img--mx w-75 h-75 fz-100"
            src="https://img.ibxk.com.br/2020/03/09/09111156392166.jpg?w=1120&h=420&mode=crop&scale=both"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Think Big,Think Different</h1>
            <p>Technology as an important part of our lives in the present days.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="vtex-carousel-2-x-img vtex-carousel-2-x-img--mx w-75 h-75"
            src="https://img.ibxk.com.br/2019/11/27/27144836172153.jpg?w=1120&h=420&mode=crop&scale=both"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Our Goal</h2>
            <p>Giving new solutions to old problems.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="vtex-carousel-2-x-img vtex-carousel-2-x-img--mx w-75 h-75"
            src="https://img.ibxk.com.br/2021/08/13/13171116778385.jpg?w=704&h=264&mode=crop&scale=both"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Purpose</h2>
            <p>
              Start with why and enrich others people´s lives the best way possibe by helping them, to solve their problems using our products.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* comenso o carousel */}
      {/* comenso as card */}
      
      <div class="container cont1">
        <div class="row">
        <div class="card1">
          <div class="imgbox"></div>
          <div class="content1">
            <h3>Produto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              culpa eligendi accusantium blanditiis hic voluptas suscipit
              provident odio officia fugit ipsam laboriosam, delectus tempora
              tempore excepturi id debitis expedita architecto.
            </p>
            <a href="#" className="button">Ler mais</a>
              <a href="#" className="button">Frete gratis</a>
          </div>
          </div>

          <div class="card1">
            <div class="imgbox"></div>
            <div class="content1">
              <h3>Produto</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                culpa eligendi accusantium blanditiis hic voluptas suscipit
                provident odio officia fugit ipsam laboriosam, delectus tempora
                tempore excepturi id debitis expedita architecto.
              </p>
              <a href="#" className="button">Ler mais</a>
              <a href="#" className="button">Frete gratis</a>
            </div>
          </div>

          <div class="card1">
            <div class="imgbox"></div>
            <div class="content1">
              <h3>Produto</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                culpa eligendi accusantium blanditiis hic voluptas suscipit
                provident odio officia fugit ipsam laboriosam, delectus tempora
                tempore excepturi id debitis expedita architecto.
              </p>
              <a href="#" className="button">Ler mais</a>
              <a href="#" className="button">Frete gratis</a>
            </div>
          </div>

          <div class="card1">
            <div class="imgbox"></div>
            <div class="content1">
              <h3>Produto</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                culpa eligendi accusantium blanditiis hic voluptas suscipit
                provident odio officia fugit ipsam laboriosam, delectus tempora
                tempore excepturi id debitis expedita architecto.
              </p>
              <a href="#" className="button">Ler mais</a>
              <a href="#" className="button">Frete gratis</a>
            </div>
          </div>

          {/* fim as card */}
        </div>
      </div>
    </div>
  );
};

export default Header;
