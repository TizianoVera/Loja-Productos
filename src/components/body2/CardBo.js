import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/Body2.css";

const CardBo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
            </ol>
            <div className="caroussel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-3">
                    <div className="single-box" style={{ width: "12rem" }}
>
                      <div className="img-area">
                        <img
                          src="https://www.gcmegamart.com/image/product/244/CLAYOUT3/517/0/1?t=1604618282"
                          alt=""
                        />
                      </div>
                      <div className="img-text">
                        <h2>Apple Watch Series 6GPS 44mm</h2>
                        <p>
                          Caixa espacial de alumínio • Pulseira esportiva A
                          caixa de alumínio é leve e feita com uma liga de
                          alumínio aeroespacial 100% reciclado.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="single-box" style={{ width: "12rem" }}
>
                      <div className="img-area">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8W8KGdTGFQgJdGrdXfjN8dCaS04bXWvFevA&usqp=CAU"
                          alt=""
                        />
                      </div>
                      <div className="img-text">
                        <h2>Apple iphone 12 Pro Max 256GB</h2>
                        <p>
                          O Apple iPhone 12 Pro Max é um smartphone iOS com
                          características inovadoras que o tornam uma excelente
                          opção para qualquer tipo de utilização.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="single-box" style={{ width: "12rem" }}>
                      <div className="img-area">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0247/7191/9925/products/ip11promaxslvr_76c24cf9-5a70-4934-9954-289075af65c3_230x.jpg?v=1619872950"
                          alt=""
                        />
                      </div>
                      <div className="img-text">
                        <h2>Apple iphone 11 Pro Max 256GB</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="single-box" style={{ width: "12rem" }}
>
                      <div className="img-area">
                        <img
                          src="https://divizion.com/image/cache/catalog/iphone2021/iphone13promax/985698765648-230x230.jpg"
                          alt=""
                        />
                      </div>
                      <div className="img-text">
                        <h2>Apple iphone 13 Pro Max 512GBGold</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          officiis
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="single-box" style={{ width: "12rem" }}
>
                      <div className="img-area">
                        <img
                          src="https://i01.hsncdn.com/is/image/HomeShoppingNetwork/prodgrid230/apple-airpods-2nd-gen-earbuds-with-wired-case-accessori-d-20210902095017807~9278776w_7KN.jpg"
                          alt=""
                        />
                      </div>
                      <div className="img-text">
                        <h2>Apple Headphone | HSN</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="single-box" style={{ width: "12rem" }}
>
                      <div className="img-area">
                        <img
                          src="http://www.pcdepo.com/image/cache//data/products/resim-6905-230x230.jpg"
                          alt=""
                        />
                      </div>
                      <div className="img-text">
                        <h2>Apple </h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
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
    </div>
  );
};

export default CardBo;
