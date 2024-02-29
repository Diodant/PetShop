import React from 'react';
import DogImg from "./img/dog.png"
import CatImg from "./img/cat.png"
import BirdImg from "./img/bird.png"
import LizardImg from "./img/lizard.png"
import GroomImg from "./img/groom.png"
import HotelImg from "./img/hotel.png"
import ArrowIcon from './img/rightarrow.svg';

const Header = () => (
  <header>
    <div className="banner">Отримайте безкоштовну доставку при замовленні на суму понад 1000₴</div>
    <nav>
      <div id="logo">
        Pet Shop
      </div>
      <ul className="navigation-menu">
        <li>
          <a href="#products">Продукти</a>
          <ul className="subnav">
            <li className="card-med" id="sup-dog">
              <div className="card-image">
                <img src={DogImg} alt="Dogs" />
              </div>
              <div className="service-l">
              <span className="service-title">Собаки</span>
              <span className="service-link">Послуги <img src={ArrowIcon} alt="Arrow" /></span>
              </div>
            </li>
            <li className="card-med" id="sup-cat">
              <div className="card-image">
                <img src={CatImg} alt="Cats" />
              </div>
              <div className="service-l">
              <span className="service-title">Коти</span>
              <span className="service-link">Послуги <img src={ArrowIcon} alt="Arrow" /></span>
              </div>
            </li>
            <li className="card-med" id="sup-bird">
              <div className="card-image">
                <img src={BirdImg} alt="Birds" />
              </div>
              <div className="service-l">
              <span className="service-title">Птахи</span>
              <span className="service-link">Послуги <img src={ArrowIcon} alt="Arrow" /></span>
              </div>
            </li>
            <li className="card-med" id="sup-lizard">
              <div className="card-image">
                <img src={LizardImg} alt="Lizards" />
              </div>
              <div className="service-l">
              <span className="service-title">Ящірки</span>
              <span className="service-link">Послуги <img src={ArrowIcon} alt="Arrow" /></span>
              </div>
            </li>
          </ul>
        </li>
        <li>
        <a href="#products">Послуги</a>
          <ul className="subnav">
          <li className="card-med" id="serv-groom">
              <div className="card-image">
                <img src={GroomImg} alt="Groom" />
              </div>
              <div className="service-l">
              <span className="service-title">Грумінг</span>
              <span className="service-link">Послуги <img src={ArrowIcon} alt="Arrow" /></span>
              </div>
            </li>
            <li className="card-med" id="serv-board">
              <div className="card-image">
                <img src={HotelImg} alt="Hotel" />
              </div>
              <div className="service-l">
              <span className="service-title">Готель</span>
              <span className="service-link">Послуги <img src={ArrowIcon} alt="Arrow" /></span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div id="utility">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </nav>
  </header>
);

export default Header;
