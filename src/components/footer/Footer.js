import React from 'react';
import "../../assets/foter.css";

function Footer() {
  return (
    <div>
      <div className="caixaPrincipal">
        <ul className="caixaPrimeira">
          <p>PRODUTOS & SERVIÇOS</p>
          <div className="caixaInternaPrimeira">
            <div>
              <li>
                <a href="#">smarphones</a>
              </li>
              <li>
                <a href="#">tablet</a>
              </li>

              <li>
                <a href="#">acessorios</a>
              </li>

              <li>
                <a href="#">informatica</a>
              </li>

              <li>
                <a href="#">tv e audio</a>
              </li>
            </div>
          </div>
        </ul>
    
        <ul className="caixaSegunda">
          <p>LOJA ONLINE</p>
          <li>
            <a href="#">consulte o status de seu pedido</a>
          </li>
          <li>
            <a href="#">chat online</a>
          </li>
          <li>
            <a href="#">fale conosco</a>
          </li>
          <li>
            <a href="#">duvidas frequentes</a>
          </li>
          <li>
            <a href="#">promoçoes</a>
          </li>
          <li>
            <a href="#">ajuda para comprar</a>
          </li>
        </ul>

        <ul className="caixaTercera">
          <p>SUPORTE TÉCNICO</p>
          <li>
            <a href="#">chat online</a>
          </li>
          <li>
            <a href="#">email</a>
          </li>
          <li>
            <a href="#">fale conosco</a>
          </li>
          <li>
            <a href="#">centro de serviços</a>
          </li>
          <li>
            <a href="#">comunidade</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>
          Esse website é melhor visualizado nas versões Microsoft Internet
          Explorer 11 ou superior e/ou nas últimas versões dos navegadores
          Google Chrome e Mozilla Firefox.
        </h2>
      </div>
      <div className="caixaFoot">
        <div className="caixaCopyright">
          <a href="#">
            <p className="num1">ACCECIBILIDADE MAPA DO SITE</p>
          </a>
          <a href="#">
            <p className="num2">TERMOS & CONDIÇÕES LOJA ONLINE</p>
          </a>
          <a href="#">
            <p className="num3">PRIVACIDADE LOJA ONLINE</p>
          </a>
          <a href="#">
            <p className="num4">LEGAL</p>
          </a>
        </div>
        <div className="redes">
          <a href="#">
            <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/color/48/000000/facebook.png" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/color-glass/48/000000/twitter.png" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;