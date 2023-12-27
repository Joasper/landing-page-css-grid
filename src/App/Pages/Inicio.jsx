import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CiWallet } from "react-icons/ci";
import { RiShareBoxLine } from "react-icons/ri";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import StepsApp from "../../Components/Steps";
import VerticalLinearStepper from "../../Components/StepsMui";
import BasicAccordion from "../../Components/StepsAntd-";
import { Swiper, SwiperSlide } from "swiper/react";

import AcordeonPc from "../../Components/Steps";
import Acordeonn from "../../Components/Acordeonn";
import YourComponent from "../../Components/Circular";
import CircularProgress from "@mui/material/CircularProgress";
import { FaShoppingCart } from "react-icons/fa";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css";

const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#1b2024",
};

import Tarjetas from "../../Components/Tarjetas";
import { CrearOrden } from "../../helpers/Paypal";
export const Inicio = () => {
  const [louding, setlouding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setlouding(false);
    }, 5000);

    // Limpiamos el timer cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      {louding ? (
        <div className="loudingpage">
          <CircularProgress
            thickness={6}
            size={100}
            className="circular"
            style={{
              color: "#03c22d",
              marginTop: "280px",

              strokeWidth: 6,
            }}
          />
        </div>
      ) : (
        <div className="">
          <section className="main__hero">
            <nav className="main__nav container">
              <figure className="hero-img">
                {" "}
                <img
                  src="../../Public/LIVEGOODIALOGO2.png"
                  alt=""
                  srcset=""
                  className="img-logo"
                />
              </figure>

              <div className="header__btns">
                <div className="btn_primary_btn">
                  <a href="" className="btn btn__Primary celular ">
                    Pagar Membresia
                  </a>
                </div>
                <div className="btns-bottom">
                  <a href="#registro" className="btn btn__Secundary ">
                    Registrate y Gana $1USD
                  </a>
                  <a href="#ia" className="btn btn__Secundary principal">
                    Impulsa tu Red con IA
                  </a>
                  <a href="" className="btn btn__Primary destok">
                    Pagar Membresia
                  </a>
                </div>
              </div>
            </nav>
            <section className="main__main2">
              <div className="main__content container">
                <div className="main__title">
                  <h1 className="h2">
                    Imagina un mundo donde puedas alcanzar una libertad
                    financiera de
                    <span className="header__span"> $2.047,50</span> al mes con
                    LiveGood, ¡y eso sin la necesidad de referir a nadie!
                  </h1>
                </div>
              </div>
            </section>
            <section className="main__main3">
              <div className="main__video container">
                <iframe
                  src="https://player.vimeo.com/video/894560725?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  width={660}
                  title="LiveGood-Pay.Network"
                  className="livegood"
                ></iframe>
              </div>
              <div className="header__main__btn">
                <a href="" className="btn_header__main">
                  Academia LiveGood IA <RiShareBoxLine className="btn__btn" />
                </a>
              </div>
            </section>
          </section>

          <section className="main__main4">
            <div className="main__content2">
              <div className="main__card container">
                <h1 className="card__title">
                  Nuestro <span className="span__main">Equipo</span>
                </h1>
                <div className="item">
                  <div className="item1">
                    <div className="main__cards">
                      <div className="card__border">
                        <picture className="Section__Perfil__Img">
                          <img
                            src="../Public/image2.png"
                            alt=""
                            srcset=""
                            className="img-card imagen"
                          />
                          <h6 class="Section__Profecion">CEO</h6>
                          <p class="Section__Name name1">Ben Glinsky </p>
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="item2">
                    <div className="main__cards">
                      <div className="card__border">
                        <picture className="Section__Perfil__Img Section__Perfil__Img2">
                          <img
                            src="../../Public/image5.png"
                            alt=""
                            srcset=""
                            className="img-card img-card2"
                          />
                          <h6 class="Section__Profecion Section__Profecion2">
                            DIRECTOR DESARROLLO
                          </h6>
                          <p class="Section__Name Section__Name2">
                            Ryan Goodkin
                          </p>
                        </picture>
                      </div>
                    </div>
                  </div>

                  <div className="item3">
                    <div className="main__cards">
                      <div className="card__border">
                        <picture className="Section__Perfil__Img">
                          <img
                            src="../../Public/image6.png"
                            alt=""
                            srcset=""
                            className="img-card img-card3"
                          />
                          <h6 class="Section__Profecion Section__Profecion3">
                            DIRECTORA DE PRODUCTO
                            <p class="Section__Name Section__Name3">
                              Lisa Goodkin
                            </p>
                          </h6>
                        </picture>
                      </div>
                    </div>
                  </div>

                  <div className="item4">
                    <div className="main__cards">
                      <div className="card__border">
                        <picture className="Section__Perfil__Img">
                          <img
                            src="../../Public/image7.png"
                            alt=""
                            srcset=""
                            className="img-card img-card4"
                          />
                          <h6 class="Section__Profecion Section__Profecion4">
                            DIRECTOR DE RED
                          </h6>
                          <p class="Section__Name Section__Name4">
                            Nauder Khazan
                          </p>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section__main5" id="registro">
            <div className="main__form container">
              <h3 className="main5__title">
                Pre-regístrate y Gana{" "}
                <span className="Second_SPan">$1.00 USD</span>
              </h3>

              <p className="main5__paragrah2">
                <span className="There__SPan">
                  ¿Listo para dar el primer paso hacia el éxito y la salud
                  óptima?
                </span>
              </p>
              <p className="main5__paragrah">
                Hemos facilitado el camino para ti. Simplemente completa nuestro
                formulario de pre-registro y como agradecimiento por unirte a
                nuestra misión, te daremos $1.00 USD Sí, así de sencillo.
              </p>
              <div className="formbox">
                <form className="form">
                  <TextField
                    className="Input"
                    variant="outlined"
                    placeholder="Ingresa Paypal o Monedero BTC"
                    InputProps={{
                      style: { color: "white" },
                      endAdornment: (
                        <InputAdornment position="end">
                          <CiWallet
                            color="white"
                            fontSize={"20px"}
                            className="cartera"
                          />
                        </InputAdornment>
                      ), // Cambiar el color del texto
                    }}
                    InputLabelProps={{
                      style: { color: "white" }, // Cambiar el color del texto del placeholder
                    }}
                  />
                  <div className="Text__fields__both">
                    <TextField
                      className="Input both"
                      variant="outlined"
                      placeholder="Nombre"
                      InputProps={{
                        style: { color: "white" }, // Cambiar el color del texto
                      }}
                      InputLabelProps={{
                        style: { color: "white" }, // Cambiar el color del texto del placeholder
                      }}
                    />
                    <TextField
                      className="Input both"
                      variant="outlined"
                      placeholder="Apellido"
                      InputProps={{
                        style: { color: "white" }, // Cambiar el color del texto
                      }}
                      InputLabelProps={{
                        style: { color: "white" }, // Cambiar el color del texto del placeholder
                      }}
                    />
                  </div>
                  <TextField
                    className="Input"
                    variant="outlined"
                    placeholder="Telefono"
                    InputProps={{
                      style: { color: "white" }, // Cambiar el color del texto
                    }}
                    InputLabelProps={{
                      style: { color: "#737d82" }, // Cambiar el color del texto del placeholder
                    }}
                  />
                  <TextField
                    className="Input"
                    variant="outlined"
                    placeholder="Pais y Direccion"
                    InputProps={{
                      style: { color: "white" }, // Cambiar el color del texto
                    }}
                    InputLabelProps={{
                      style: { color: "white" }, // Cambiar el color del texto del placeholder
                    }}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    className="btn-Field"
                    style={{ backgroundColor: "#FAFF00", color: "black" }}
                  >
                    Reclamar Recompensa
                  </Button>
                </form>
              </div>
            </div>
          </section>

          <section className="section__main6">
            <div
              className="main__carousel container"
              style={{ textAlign: "center" }}
            >
              <div className="header__main__btn">
                <a href="" className="btn_header__main">
                  Quiero Comprar{" "}
                  <RiShareBoxLine className="btn__btn btn__three" />
                </a>
              </div>
              <h1 className="livegood_h1">
                Como funciona <span className="span__livegood">LiveGood</span> y
                sus productos{" "}
              </h1>
              <div
                className="Carousel"
                style={{
                  width: "80%", // Cambia el ancho según tu diseño
                  height: "250px", // Cambia la altura según tu diseño
                  margin: "0 auto", // Centra el Carousel horizontalmente
                }}
              >
                <div className="item20">
                  <Carousel className="carousel" dotPosition="bottom" autoplay>
                    <div>
                      <h3 style={contentStyle}>
                        <img
                          src="../../Public/image13.png"
                          alt=""
                          className="img__Section__there"
                        />
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle} className="h3-carousel">
                        <img
                          src="../../Public/image12.png"
                          alt=""
                          className="img__Section__there"
                        />
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>
                        <img
                          src="../../Public/image11.png"
                          alt=""
                          className="img__Section__there"
                        />
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>
                        <img
                          src="../../Public/image10.png"
                          alt=""
                          className="img__Section__there"
                        />
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>
                        <img
                          src="../../Public/image9.png"
                          alt=""
                          className="img__Section__there"
                        />
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>
                        <img
                          src="../../Public/image8.png"
                          alt=""
                          className="img__Section__there"
                        />
                      </h3>
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="main6__descriptions">
                <p className="main6__descripcion">
                  <h1 className="h1__footer">
                    <span className="span__livegood footer">
                      {" "}
                      Nutrición Avanzada, Oportunidad Real
                    </span>{" "}
                    En LiveGood, conectamos bienestar y progreso. Nuestros
                    suplementos premium y planes de compensación te empoderan
                    para alcanzar una vida plena y exitosa.
                  </h1>
                  <h1 className="h1__footer">
                    <span className="span__livegood footer">
                      Calidad a tu Alcance
                    </span>{" "}
                    Vive saludable con nuestros productos orgánicos a precios
                    sin competencia. Con LiveGood, la excelencia es accesible
                    para todos, cada día.
                  </h1>
                  <h1 className="h1__footer">
                    <span className="span__livegood footer">
                      Crecimiento Compartido
                    </span>{" "}
                    Únete y prospera en nuestro modelo de negocio transparente y
                    colaborativo. Con LiveGood, tu esfuerzo se traduce en
                    resultados tangibles y satisfacción duradera.
                  </h1>
                </p>
              </div>
            </div>
          </section>

          <section className="section__main7" id="ia">
            <div className="main__IA container">
              <h1 className="main__ia__title">
                Potencia Tu Red LiveGood con{" "}
                <span className="span__ia">
                  Inteligencia Artificial Avanzada
                </span>
              </h1>
              <p className="parrafoia">
                Completa los Prompt y Genera Una Estrategia Con IA Para Ganar
                Con LiveGood en segundos
              </p>
              <BasicAccordion />
              <StepsApp />
            </div>
          </section>

          <section className="section__main8 privado">
            <div className="main__footerPage container ontainer-fluid d-flex justify-content-center align-items-center">
              <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <h2 className="title__main8">RESEÑAS DE MIEMBROS</h2>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="d-flex app">
                      <div className="card__footer__app">
                        <div className="card__icon">
                          <img src="..//Public/comillas.png" alt="" srcset="" />
                        </div>
                        <div className="border__card__app">
                          <div className="img__card">
                            <img src="../../Public/live.png" alt="" srcset="" />
                          </div>
                          <div className="Description__card">
                            <p className="descripcion">
                              ¡La herramienta de IA de LiveGood cambio el juego!
                              En minutos, elaboró una estrategia personalizada
                              que se alinea perfectamente con mis metas. Ahora
                              tengo un plan claro y acciones definidas que
                              resuenan con mi estilo de vida y objetivos de
                              negocio. Además, el bono de pre-registro fue
                              instantáneo. ¡Esto es innovación de verdad!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card__footer__app">
                        <div className="card__icon">
                          <img src="..//Public/comillas.png" alt="" srcset="" />
                        </div>
                        <div className="border__card__app">
                          <div className="img__card">
                            <img
                              src="../../Public/live2.png"
                              alt=""
                              srcset=""
                              className="img-card"
                            />
                          </div>
                          <div className="Description__card">
                            <p className="descripcion">
                              ¡La herramienta de IA de LiveGood cambio el juego!
                              En minutos, elaboró una estrategia personalizada
                              que se alinea perfectamente con mis metas. Ahora
                              tengo un plan claro y acciones definidas que
                              resuenan con mi estilo de vida y objetivos de
                              negocio. Además, el bono de pre-registro fue
                              instantáneo. ¡Esto es innovación de verdad!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="d-flex app">
                      <div className="card__footer__app">
                        <div className="card__icon">
                          <img src="..//Public/comillas.png" alt="" srcset="" />
                        </div>
                        <div className="border__card__app">
                          <div className="img__card">
                            <img
                              src="../../Public/live3.png"
                              alt=""
                              srcset=""
                              className="img-card"
                            />
                          </div>
                          <div className="Description__card">
                            <p className="descripcion">
                              ¡La herramienta de IA de LiveGood cambio el juego!
                              En minutos, elaboró una estrategia personalizada
                              que se alinea perfectamente con mis metas. Ahora
                              tengo un plan claro y acciones definidas que
                              resuenan con mi estilo de vida y objetivos de
                              negocio. Además, el bono de pre-registro fue
                              instantáneo. ¡Esto es innovación de verdad!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card__footer__app">
                        <div className="card__icon">
                          <img src="..//Public/comillas.png" alt="" srcset="" />
                        </div>
                        <div className="border__card__app">
                          <div className="img__card">
                            <img
                              src="../../Public/live4.png"
                              alt=""
                              srcset=""
                              className="img-card"
                            />
                          </div>
                          <div className="Description__card">
                            <p className="descripcion">
                              ¡La herramienta de IA de LiveGood cambio el juego!
                              En minutos, elaboró una estrategia personalizada
                              que se alinea perfectamente con mis metas. Ahora
                              tengo un plan claro y acciones definidas que
                              resuenan con mi estilo de vida y objetivos de
                              negocio. Además, el bono de pre-registro fue
                              instantáneo. ¡Esto es innovación de verdad!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                  style={{
                    marginLeft: "-80px",
                  }}
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                  style={{
                    marginRight: "-80px",
                  }}
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
                <div className="header__main__btn">
                  <a
                    href=""
                    className="btn_header__main"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Quiero ser miembro
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section__main8 publico">
            <div className="main__footerPage container container-fluid d-flex justify-content-center align-items-center">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <h2 className="title__main8">RESEÑAS DE MIEMBROS</h2>
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="card__footer__app">
                        <div className="card__icon">
                          <img src="../Public/comillas.png" alt="" srcset="" />
                        </div>
                        <div className="border__card__app">
                          <div className="img__card">
                            <img src="../../Public/live.png" alt="" srcset="" />
                          </div>
                          <div className="Description__card">
                            <p className="descripcion">
                              ¡La herramienta de IA de LiveGood cambio el juego!
                              En minutos, elaboró una estrategia personalizada
                              que se alinea perfectamente con mis metas. Ahora
                              tengo un plan claro y acciones definidas que
                              resuenan con mi estilo de vida y objetivos de
                              negocio. Además, el bono de pre-registro fue
                              instantáneo. ¡Esto es innovación de verdad!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="card__footer__app">
                        <div className="card__icon">
                          <img src="../Public/comillas.png" alt="" srcset="" />
                        </div>
                        <div className="border__card__app">
                          <div className="img__card">
                            <img
                              src="../../Public/live2.png"
                              alt=""
                              srcset=""
                              className="img-card"
                            />
                          </div>
                          <div className="Description__card">
                            <p className="descripcion">
                              ¡La herramienta de IA de LiveGood cambio el juego!
                              En minutos, elaboró una estrategia personalizada
                              que se alinea perfectamente con mis metas. Ahora
                              tengo un plan claro y acciones definidas que
                              resuenan con mi estilo de vida y objetivos de
                              negocio. Además, el bono de pre-registro fue
                              instantáneo. ¡Esto es innovación de verdad!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="card__footer__app">
                        <div className="card__icon">
                          <img src="../Public/comillas.png" alt="" srcset="" />
                        </div>
                        <div className="border__card__app">
                          <div className="img__card">
                            <img
                              src="../../Public/live3.png"
                              alt=""
                              srcset=""
                              className="img-card"
                            />
                          </div>
                          <div className="Description__card">
                            <p className="descripcion">
                              ¡La herramienta de IA de LiveGood cambio el juego!
                              En minutos, elaboró una estrategia personalizada
                              que se alinea perfectamente con mis metas. Ahora
                              tengo un plan claro y acciones definidas que
                              resuenan con mi estilo de vida y objetivos de
                              negocio. Además, el bono de pre-registro fue
                              instantáneo. ¡Esto es innovación de verdad!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                    style={{
                      marginLeft: "-45px",
                    }}
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                    style={{
                      marginRight: "-45px",
                    }}
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="header__main__btn">
                  <a
                    href=""
                    className="btn_header__main"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Quiero ser miembro
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section__main9">
            <div className="main__book container">
              <div className="contenedor-libros">
                <div className="libro-left"></div>
                <div className="libro-container">
                  <h2 className="title__footer__end diamond">
                    Maestría en Network Marketing{" "}
                  </h2>
                  <h2 className="title__footer__end orange">Tu Kit de Éxito</h2>
                  <div className="book">
                    {" "}
                    <p className="parrafo__footer">
                      Adquiere ahora tu acceso completo a la Academia LiveGood y
                      nuestro extenso manual de 80 páginas por un único pago de
                      $29.55. Domina las técnicas de cierre, absorbe
                      conocimientos de marketing de alto nivel y empodera tu
                      estrategia de promoción. Todo lo que necesitas para
                      prosperar en LiveGood en un paquete integral.
                    </p>
                    <picture className="picture___footer">
                      <img
                        src="../../Public/image14.png"
                        alt=""
                        srcset=""
                        className="img__footer"
                      />
                    </picture>
                  </div>

                  <div
                    className="botondel final"
                    style={{
                      textAlign: "center",
                      marginTop: "50px",
                    }}
                  >
                    <a href="" className="bottom__footer botonfinally">
                      Compra Ahora $29.95 USD <FaShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section__main10">
            <div className="main10__final container">
              <div className="main10__content">
                <a href="" className="btn-main10">
                  LIVEGOOD IA PAY
                </a>
                <picture className="img__main10">
                  <img
                    src="../../Public/LIVEGOODIALOGO2.png"
                    alt=""
                    srcset=""
                    className="fotomain10"
                  />
                </picture>
              </div>
            </div>
            <section className="section__main11 celularderechos">
              <div className="main11___derechos container">
                <div className="combinacion">
                  <div className="section11__content">
                    <h6 className="descripcion BotIa">Bot IA</h6>
                    <ul>
                      <li>
                        <a href="">Comprar Bot WhatsApp</a>
                      </li>
                      <li>
                        <a href="">Alquilar Bot WhatsApp</a>
                      </li>
                      <li>
                        <a href="">Reseller Bot WhatsApp</a>
                      </li>
                    </ul>
                  </div>
                  <div className="section11__content">
                    <h6 className="descripcion description-secuund">
                      IA LiveGood
                    </h6>
                    <ul>
                      <li>
                        <a href="">BOT LiveGood</a>
                      </li>
                      <li>
                        <a href="">Generar Estrategia IA</a>
                      </li>
                      <li>
                        <a href="">Reseller Bot WhatsApp</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="section11__content">
                  <h6 className="descripcion Livegood-item">LiveGood</h6>
                  <ul>
                    <li>
                      <a href="">Quiero Inscribirme</a>
                    </li>
                    <li>
                      <a href="">Quiero Comprar</a>
                    </li>
                    <li>
                      <a href="">Hacer Pre-registro</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="section__main11  computadoraderechos">
              <div className="main11___derechos container">
                <div className="combinacion combinacion2">
                  <div className="section11__content">
                    <h6 className="descripcionn BotIa">Bot IA</h6>
                    <ul>
                      <li>
                        <a href="">Comprar Bot WhatsApp</a>
                      </li>
                      <li>
                        <a href="">Alquilar Bot WhatsApp</a>
                      </li>
                      <li>
                        <a href="">Reseller Bot WhatsApp</a>
                      </li>
                    </ul>
                  </div>
                  <div className="section11__content">
                    <h6 className="descripcionn description-secuund">
                      IA LiveGood
                    </h6>
                    <ul>
                      <li>
                        <a href="">BOT LiveGood</a>
                      </li>
                      <li>
                        <a href="">Generar Estrategia IA</a>
                      </li>
                      <li>
                        <a href="">Reseller Bot WhatsApp</a>
                      </li>
                    </ul>
                  </div>
                  <div className="section11__content">
                    <h6 className="descripcionn Livegood-item">LiveGood</h6>
                    <ul>
                      <li>
                        <a href="" className="adeli">
                          Quiero Inscribirme
                        </a>
                      </li>
                      <li>
                        <a href="">Quiero Comprar</a>
                      </li>
                      <li>
                        <a href="">Hacer Pre-registro</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <p style={{ textAlign: "center" }} className="derechosautor">
            Todos Los Derechos Reservados 2024
          </p>
        </div>
      )}
    </main>
  );
};
