import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

export default function BasicAccordion() {
  // let expanded = true;
  const [expanded, setExpanded] = React.useState({});
  const [abrir, setabrir] = React.useState(false);

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

  const cerrer = () => {
    setabrir(false);
  };

  const abrirr = () => {
    setabrir(true);
  };

  return (
    <div className="acordeon-box">
      <Accordion
        expanded={expanded["panel1"]}
        onChange={handleChange("panel1")}
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
            style={{ display: expanded["panel1"] ? "block" : "none" }}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded["panel2"]}
        onChange={handleChange("panel2")}
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
            style={{ display: expanded["panel2"] ? "block" : "none" }}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded["panel3"]}
        onChange={handleChange("panel3")}
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
            style={{ display: expanded["panel3"] ? "block" : "none" }}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded["panel4"]}
        onChange={handleChange("panel4")}
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
            style={{ display: expanded["panel4"] ? "block" : "none" }}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded["panel5"]}
        onChange={handleChange("panel5")}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
