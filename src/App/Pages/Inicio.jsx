import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { CiWallet } from "react-icons/ci";
import { RiShareBoxLine } from "react-icons/ri";
import { Carousel } from "antd";
const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#1b2024",
};

export const Inicio = () => {
  return (
    <main className="main">
      <section className="main__hero">
        <nav className="main__nav container">
          <img src=".:/../Public/LIVEGOODIALOGO2.png" alt="" srcset="" />
          <div className="header__btns">
            <div className="btn_primary_btn">
              <a href="" className="btn btn__Primary">
                Pagar Membresia
              </a>
            </div>
            <div className="btns-bottom">
              <a href="" className="btn btn__Secundary">
                Registrate y Gana $1USD
              </a>
              <a href="" className="btn btn__Secundary">
                Impulsa tu Red con IA
              </a>
            </div>
          </div>
        </nav>
      </section>

      <section className="main__main2">
        <div className="main__content container">
          <div className="main__title">
            <h1 className="h2">
              Imagina un mundo donde puedas alcanzar una libertad financiera de
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
            className="video"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="LiveGood-Pay.Network"
          ></iframe>
        </div>
        <div className="header__main__btn">
          <a href="" className="btn_header__main">
            Academia LiveGood IA <RiShareBoxLine className="btn__btn" />
          </a>
        </div>
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
                      <img src="../../../Public/image2.png" alt="" srcset="" />
                      <h6 class="Section__Profecion">
                        CEO
                        <p class="Section__Name">Ben Glinsky </p>
                      </h6>
                    </picture>
                  </div>
                </div>
              </div>
              <div className="item2">
                <div className="main__cards">
                  <div className="card__border">
                    <picture className="Section__Perfil__Img">
                      <img src="../../../Public/image2.png" alt="" srcset="" />
                      <h6 class="Section__Profecion">
                        CEO
                        <p class="Section__Name">Ben Glinsky </p>
                      </h6>
                    </picture>
                  </div>
                </div>
              </div>

              <div className="item3">
                <div className="main__cards">
                  <div className="card__border">
                    <picture className="Section__Perfil__Img">
                      <img src="../../../Public/image2.png" alt="" srcset="" />
                      <h6 class="Section__Profecion">
                        CEO
                        <p class="Section__Name">Ben Glinsky </p>
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
                        src="../../../Public/image2.png"
                        alt=""
                        srcset=""
                        className="img"
                      />
                      <h6 class="Section__Profecion">
                        CEO
                        <p class="Section__Name">Ben Glinsky </p>
                      </h6>
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__main5">
        <div className="main__form container">
          <h3 className="main5__title">
            Pre-regístrate y Gana <span className="Second_SPan">$1.00 USD</span>
          </h3>

          <p className="main5__paragrah2">
            <span className="There__SPan">
              ¿Listo para dar el primer paso hacia el éxito y la salud óptima?
            </span>
          </p>
          <p className="main5__paragrah">
            Hemos facilitado el camino para ti. Simplemente completa nuestro
            formulario de pre-registro y como agradecimiento por unirte a
            nuestra misión, te daremos $1.00 USD Sí, así de sencillo.
          </p>
          <form>
            <TextField
              className="Input"
              variant="outlined"
              placeholder="Ingresa Paypal o Monedero BTC"
              InputProps={{
                style: { color: "white" },
                endAdornment: (
                  <InputAdornment position="end">
                    <CiWallet color="white" fontSize={"20px"} />
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
      </section>

      <section className="section__main6">
        <div className="main__carousel container">
          <div className="header__main__btn">
            <a href="" className="btn_header__main">
              Quiero Comprar <RiShareBoxLine className="btn__btn btn__three" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
