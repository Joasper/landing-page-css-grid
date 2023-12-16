import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, CircularProgress } from "@mui/material";
import { GrFormNextLink } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Louding } from "../Components/Louding";

export default function BasicAccordion() {
  // let expanded = true;
  const [expanded, setExpanded] = React.useState({});
  const [abrir, setabrir] = React.useState(false);
  const [Propnt1, setPropnt1] = React.useState(true);
  const [Pronpt2, setPronpt2] = React.useState(false);
  const [Pronpt3, setPronpt3] = React.useState(false);
  const [Pronpt4, setPronpt4] = React.useState(false);
  const [Ia, setIa] = React.useState(false);
  const [Loudingg, setLoudingg] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded({
      ...expanded,
      [panel]: isExpanded ? panel : false,
    });
  };

  const handleNext = (currentPanel) => {
    const currentPanels = Object.keys(expanded);
    const currentIndex = currentPanels.indexOf(currentPanel);
    if (currentIndex !== -1 && expanded[currentPanel]) {
      const nextPanel = currentPanels[currentIndex + 1];
      if (nextPanel) {
        setExpanded({
          ...expanded,
          [currentPanel]: false,
          [nextPanel]: true,
        });
      }
    }
  };

  const atras = () => {
    setabrir(false);
    setPropnt1(true);
  };

  const abrirr = () => {
    setabrir(true);
    setPropnt1(false);
  };

  const abrirpronpt3 = () => {
    setabrir(false);
    setPronpt2(true);
  };

  const abrirpronpt4 = () => {
    setPronpt2(false);
    setPronpt3(true);
  };
  const abrirpronpt5 = () => {
    setPronpt3(false);
    setPronpt4(true);
  };

  const GenerarRespuesta = () => {
    setPronpt4(false);
    setIa(true);
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoudingg(false);
    }, 5000);

    // Limpiamos el timer cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="acordeon-box">
      <Accordion
        expanded={Propnt1}
        //   onChange={handleChange("panel1")}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="detalles"
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#d7fd3c" }}
        >
          <div
            className="flecha"
            style={{ display: Propnt1 ? "block" : "none" }}
          ></div>
          <Typography className="title">Prompt 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="detalles" color="red">
          <Typography color={"white"} style={{ paddingTop: "20px" }}>
            <FormGroup>
              <h4 style={{ marginBottom: "20px" }}>
                ¿Cuáles son tus objetivos con LiveGood?
              </h4>
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Ingresos adicionales"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Crecimiento profesional
                "
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Desarrollo personal"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Expansión de red"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Experiencia y Habilidades"
              />
            </FormGroup>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "30px",
              }}
            >
              {" "}
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  backgroundColor: "#cef238",
                  color: "black",
                }}
                endIcon={
                  <GrFormNextLink
                    style={{
                      border: "1.5px solid black",
                      borderRadius: "50px",
                    }}
                  />
                }
                onClick={abrirr}
              >
                Siguiente
              </Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={abrir}
        // onChange={handleChange("panel2")}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="detalles"
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#d7fd3c" }}
        >
          <div
            className="flecha"
            style={{ display: abrir ? "block" : "none" }}
          ></div>
          <Typography>Prompt 2</Typography>
        </AccordionSummary>
        <AccordionDetails className="detalles" color="red">
          <Typography color={"white"} style={{ paddingTop: "20px" }}>
            <FormGroup>
              <h4 style={{ marginBottom: "20px" }}>
                Marca tu nivel de experiencia y habilidades en marketing
                multinivel:
              </h4>
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Principiante en network marketing"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Experiencia moderada
                "
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Experto en marketing multinivel"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Habilidades de liderazgo"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Habilidades de venta"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Preferencias de Mercado y Demográficas"
              />
            </FormGroup>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "30px",
              }}
            >
              {" "}
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  backgroundColor: "#cef238",
                  color: "black",
                }}
                endIcon={
                  <GrFormNextLink
                    style={{
                      border: "1.5px solid black",
                      borderRadius: "50px",
                    }}
                  />
                }
                onClick={abrirpronpt3}
              >
                Siguiente
              </Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={Pronpt2}
        //onChange={handleChange("panel3")}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="detalles"
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#d7fd3c" }}
        >
          <div
            className="flecha"
            style={{ display: Pronpt2 ? "block" : "none" }}
          ></div>
          <Typography>Prompt 3</Typography>
        </AccordionSummary>
        <AccordionDetails className="detalles" color="red">
          <Typography color={"white"} style={{ paddingTop: "20px" }}>
            <FormGroup>
              <h4 style={{ marginBottom: "20px" }}>
                Selecciona tus mercados y demografías objetivo:
              </h4>
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Jóvenes adultos"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Profesionales
                "
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Amantes del fitness"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Familias"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Adultos mayores"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Estrategias de Comunicación Preferidas"
              />
            </FormGroup>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "30px",
              }}
            >
              {" "}
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  backgroundColor: "#cef238",
                  color: "black",
                }}
                endIcon={
                  <GrFormNextLink
                    style={{
                      border: "1.5px solid black",
                      borderRadius: "50px",
                    }}
                  />
                }
                onClick={abrirpronpt4}
              >
                Siguiente
              </Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={Pronpt3}
        // onChange={handleChange("panel4")}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="detalles"
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#d7fd3c" }}
        >
          <div
            className="flecha"
            style={{ display: Pronpt3 ? "block" : "none" }}
          ></div>
          <Typography> Prompt 4</Typography>
        </AccordionSummary>
        <AccordionDetails className="detalles" color="red">
          <Typography color={"white"} style={{ paddingTop: "20px" }}>
            <FormGroup>
              <h4 style={{ marginBottom: "20px" }}>
                ¿Cuáles son tus métodos preferidos de comunicación y promoción?
              </h4>
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Redes sociales"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Email marketing
                "
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Eventos en persona"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Marketing de contenidos"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Publicidad online"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Análisis de Productos y Preferencias"
              />
            </FormGroup>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "30px",
              }}
            >
              {" "}
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  backgroundColor: "#cef238",
                  color: "black",
                }}
                endIcon={
                  <GrFormNextLink
                    style={{
                      border: "1.5px solid black",
                      borderRadius: "50px",
                    }}
                  />
                }
                onClick={abrirpronpt5}
              >
                Siguiente
              </Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={Pronpt4}
        // onChange={handleChange("panel5")}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="detalles"
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#d7fd3c" }}
        >
          <div
            className="flecha"
            style={{ display: Pronpt4 ? "block" : "none" }}
          ></div>
          <Typography>Prompt 5</Typography>
        </AccordionSummary>
        <AccordionDetails className="detalles" color="red">
          <Typography color={"white"} style={{ paddingTop: "20px" }}>
            <FormGroup>
              <h4 style={{ marginBottom: "20px" }}>
                Elige los productos de LiveGood que te interesan para promover:
              </h4>
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Suplementos nutricionales"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Productos de bienestar
                "
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Cosméticos y cuidado de la piel"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Productos de fitness"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Vitaminas y minerales"
              />
            </FormGroup>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "30px",
              }}
            >
              {" "}
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  backgroundColor: "#cef238",
                  color: "black",
                }}
                onClick={GenerarRespuesta}
              >
                Generar Estrategia
              </Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {Ia ? (
        <Accordion
          expanded={Ia}
          // onChange={handleChange("panel5")}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          className="detalles"
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#d7fd3c" }}
          >
            <div
              className="flecha"
              style={{ display: expanded["panel5"] ? "block" : "none" }}
            ></div>
            <Typography>Estrategia</Typography>
          </AccordionSummary>
          <AccordionDetails className="detalles" color="red">
            <Typography color={"white"} style={{ paddingTop: "20px" }}>
              <Louding />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ) : (
        ""
      )}
    </div>
  );
}
