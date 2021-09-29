import React from "react";
import "../../assets/Body2.css";

const CardBody = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
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
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000" alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Apple iphone 13 Pro Max</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          officiis voluptate ipsum reprehenderit consequuntur
                          adipisci in corporis, atque eveniet eos, esse enim
                          recusandae placeat architecto.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img
                          src="https://i04.hsncdn.com/is/image/HomeShoppingNetwork/prodgrid230/apple-macbook-pro-13-retina-i5-16gb-ram-512gb-ssd-bundl-d-2020052014424732~9654133w_SPA.jpg"
                          alt=""
                        />
                      </div>
                      <div className="img-text">
                        <h2>Apple Watch Serie 6 GPS 40MM Vermelho</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          officiis voluptate ipsum reprehenderit consequuntur
                          adipisci in corporis, atque eveniet eos, esse enim
                          recusandae placeat architecto.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src="img/" alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Persone three</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          officiis voluptate ipsum reprehenderit consequuntur
                          adipisci in corporis, atque eveniet eos, esse enim
                          recusandae placeat architecto.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src="img/" alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Persone four</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          officiis voluptate ipsum reprehenderit consequuntur
                          adipisci in corporis, atque eveniet eos, esse enim
                          recusandae placeat architecto.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src="img/" alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Persone fivr</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          officiis voluptate ipsum reprehenderit consequuntur
                          adipisci in corporis, atque eveniet eos, esse enim
                          recusandae placeat architecto.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src="img/" alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Persone six </h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt repellat autem, nostrum fuga voluptas
                          officiis voluptate ipsum reprehenderit consequuntur
                          adipisci in corporis, atque eveniet eos, esse enim
                          recusandae placeat architecto.
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
    </div>
  );
};

export default CardBody;
