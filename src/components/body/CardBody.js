import React from "react";
import { IconName, FcLike, FcDislike, FcShipped } from "react-icons/fc";
// import Modal from "react-bootstrap/Modal";
import "../../assets/Card1.css";
import { Card, Button, FontAwesomeIcon,  } from "react-bootstrap";

import CardProduct from "./CardProduct";
//import { BsTypeH2 } from "react-icons/bs";

const CardBody = () => {
  return (
    
    <div className="container  mt-1 ">
      
      <section className="row conte g-lg-8 ">
        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2 mt-2  ">
          <CardProduct
            title="Laptp PHP"
            variant="top"
            img="https://www.fotografia-dg.com/imagens-wp/2020/07/melhor-notebook-2020.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.234,45"
            
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2  mt-2 ">
          <CardProduct
            title="Laptp PHP"
            variant="top"
            img="https://i.ytimg.com/vi/Z2MyXuHstIs/maxresdefault.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.504,21"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2 mb-2 mt-2 ">
          <CardProduct
            title="Laptp PHP 3"
            variant="top"
            img="https://cdn.wccftech.com/wp-content/uploads/2020/06/1_K8nqevbb3a-GWxuufuZ7uQ.png"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.100,44"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2 mb-2 mt-2 ">
          <CardProduct
            title="Laptp PHP 3"
            variant="top"
            img="https://miro.medium.com/max/1200/1*UCf1F1rEBOrmFxbSuIrJag.jpeg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.034,99"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 mt-2 ">
          <CardProduct
            title="Laptp PH"
            variant="top"
            img="https://images.indianexpress.com/2021/03/Gaming-Laptops-1.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.204,92"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2 mb-2 mt-2 ">
          <CardProduct
            title="Laptp PHP 6"
            variant="top"
            img="https://img.paisawapas.com/ovz3vew9pw/2020/10/21110553/best-laptops-for-gaming.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.500,00"
          />
        </div>

        {/* ===========imagem longa ============================================================================*/}

        <div className="mt-3 cardBod container m-2">
          <Card>
            <Card.Img
              variant="bottom"
              src="https://www.computersdirect.co.ke/wp-content/uploads/2020/11/intel-banner-en-new.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* ========================== fim imagem longa =========================================================*/}



      </section>
    </div>
  );
};

export default CardBody;
