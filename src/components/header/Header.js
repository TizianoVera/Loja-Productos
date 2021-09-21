import React from "react";
import "../../assets/styles.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,} from "react-bootstrap";
import { Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="black" expand="lg">
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0 "  style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1" bg="white">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex justify-content-flex-end">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>

      {/* comenso o carousel */}

      <Carousel fade>
        <Carousel.Item>
          <img
            className="vtex-carousel-2-x-img vtex-carousel-2-x-img--mx w-75 h-75 fz-100"
            src="https://cdn.pixabay.com/photo/2017/04/23/09/44/smoothies-2253423__340.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="vtex-carousel-2-x-img vtex-carousel-2-x-img--mx w-75 h-75"
            src="https://cdn.pixabay.com/photo/2016/10/09/14/00/vegetable-juices-1725835__340.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="vtex-carousel-2-x-img vtex-carousel-2-x-img--mx w-75 h-75"
            src="https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000595__340.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* comenso o carousel */}
      {/* comenso as card */}
      <hr />
      <div class="container1">
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
            <a href="#">Ler mais</a>
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
            <a href="#">Ler mais</a>
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
            <a href="#">Ler mais</a>
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
            <a href="#">Ler mais</a>
          </div>
        </div>
      </div>
      {/* fim as card */}
    </div>
  );
};

export default Header;
