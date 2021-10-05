import React from "react";
import { IconName, FcLike, FcDislike, FcShipped } from "react-icons/fc";
// import Modal from "react-bootstrap/Modal";
import "../../assets/Card1.css";
import { Card, Button, FontAwesomeIcon,  } from "react-bootstrap";

import CardProduct from "./CardProduct";
import { BsTypeH2 } from "react-icons/bs";

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

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2  mt-3 ">
          <CardProduct
            title="Laptp PHP 7"
            variant="top"
            img="https://tactfulminds.com/wp-content/uploads/2018/04/featured2-800x445.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.001,12"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2  mt-3 ">
          <CardProduct
            title="Laptp PHP 8"
            variant="top"
            img="https://www.cnet.com/a/img/fSG68GMMapah815ZPfwvEXrTDsE=/1200x675/2021/04/12/ec06344f-4113-4966-9b4f-8fdcd129869f/014-hp-spectre-x360-14.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 5034,32"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2  mt-3 ">
          <CardProduct
            title="Laptp PHP 9"
            variant="top"
            img="https://cdn.wccftech.com/wp-content/uploads/2020/06/1_K8nqevbb3a-GWxuufuZ7uQ.png"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 8034,82"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2  mt-3 ">
          <CardProduct
            title="Laptp PHP 10"
            variant="top"
            img="https://images.prismic.io/frameworkmarketplace/5d87bd50-8e78-4a7a-ade9-4356e3693416_Pre-Marketplace+-+image_02.jpg?auto=compress,format"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.802,20"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2  mt-3 ">
          <CardProduct
            title="Laptp PHP 11"
            variant="top"
            img="https://cdn.mos.cms.futurecdn.net/QzNQrNQ6HMcb652X46WJZY-1200-80.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.230,00"
          />
        </div>

        <div className="col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2  mt-3 ">
          <CardProduct
            title="Laptp PHP 12"
            variant="top"
            img="https://www.xmg.gg/wp-content/uploads/background_fusion-15-1920x1080.jpg"
            descriçao="jhond Some quick example text to build on the card title and make up
              the bulk of the card's content."
            precios="R$ 1.000,00"
          />
        </div>

        <div>
          <Card className="mt-3 m-4">
            <Card.Body>
              <Card.Text className="cardBod container">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="https://tesla-computacion.com/modules/posslideshows/images/b8c9d4e4b046df73c6e5dc7c05d24b34fd9e239b_componentes.png" />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CardBody;
