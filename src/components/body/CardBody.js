import React from "react";

import "../../assets/Card1.css";
import { Card, Button, FontAwesomeIcon } from "react-bootstrap";

const CardBody = () => {
  return (
    <div className="container  mt-1">
      <section className="row ">
        <div className="col-md-3 mb-3 ">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://ausdroid.net/wp-content/uploads/2021/05/img_1990-scaled.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             <Button variant="outline-warning">Copmrar</Button>{' '}
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-3 ">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://navbharattimes.indiatimes.com/photo/msid-84232863,imgsize-197019/pic.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <i classNome="bx bxs-star" style={{ color: "#f9e909" }}></i>
                <i classNome="bx bxs-star" style={{ color: "#f9e909" }}></i>
                <i classNome="bx bxs-star" style={{ color: "#f9e909" }}></i>
                {/* <i className='bx bxs-star' style='{color}:#ffef00'></i>
                                <i className='bx bxs-star' style='{color}:#ffef00'></i>
                                <i className='bx bxs-star' style='{color}:#ffef00'></i>
                                <i className='bx bxs-star' style='{color}:#ffef00'></i>
                                <i className='bx bxs-star' style='{color}:#ffef00'></i>
                                <i className='bx bxs-star' style='{color}:#ffef00'></i> */}
              </Card.Text>
             <Button variant="outline-warning">Copmrar</Button>{' '}
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-3 ">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQWfPGmBPrNYuJt6146MXjAj1B2DtOLozqg&usqp=CAU"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             <Button variant="outline-warning">Copmrar</Button>{' '}
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-3 mt-1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://thegadgetflow.com/wp-content/uploads/2021/04/Microsoft-Surface-Laptop-4-02-1200x900.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             <Button variant="outline-warning">Copmrar</Button>{' '}
            </Card.Body>
          </Card>
        </div>
           {/* ===========imagem longa */}
        <div>
        <Card>
          <Card.Img
            variant="bottom"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQun8Sh-hd9wGloBfY6BkWL_6CIX1iHV0noVA&usqp=CAU"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* ========================== fim imagem longa */}
        <div className="col-md-3 mb-3 mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://tactfulminds.com/wp-content/uploads/2018/04/featured2-800x445.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             <Button variant="outline-warning">Copmrar</Button>{' '}
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-3 mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/Z2MyXuHstIs/maxresdefault.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             <Button variant="outline-warning">Copmrar</Button>{' '}
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-3 mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.wccftech.com/wp-content/uploads/2020/06/1_K8nqevbb3a-GWxuufuZ7uQ.png"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             <Button variant="outline-warning">Comprar</Button>{' '}
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-3 mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/max/1200/1*UCf1F1rEBOrmFxbSuIrJag.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             <Button variant="outline-warning">Comprar</Button>{' '}
            </Card.Body>
          </Card>
        </div>
      </section>

      <div>
        <Card className="mt-2">
          <Card.Img
            variant="bottom"
            src="https://www.hcbonline.us/portals/heritagecommunitybank/Images/Online%20Banking.png?ver=QFYpnd7CsnKvsNPZLpYoSg%3D%3D"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardBody;
