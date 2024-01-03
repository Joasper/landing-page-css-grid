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
import { useDispatch } from "react-redux";
import { ObtenerPreguntas } from "../App/Store/Prompts/PromptsSlice";

export default function BasicAccordion() {
  // let expanded = true;
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState({});
  const [abrir, setabrir] = React.useState(false);
  const [Propnt1, setPropnt1] = React.useState(true);
  const [Pronpt2, setPronpt2] = React.useState(false);
  const [Pronpt3, setPronpt3] = React.useState(false);
  const [Pronpt4, setPronpt4] = React.useState(false);
  const [Ia, setIa] = React.useState(false);
  const [Loudingg, setLoudingg] = React.useState(true);

  const [objetivos, setObjetivos] = React.useState({
    ingresosAdicionales: false,
    crecimientoProfesional: false,
    desarrolloPersonal: false,
    expansionRed: false,
    experienciaHabilidades: false,
  });

  const [experienciaSeleccionada, setExperienciaSeleccionada] = React.useState({
    principiante: false,
    experienciaModerada: false,
    experto: false,
    liderazgo: false,
    venta: false,
    preferenciasMercado: false,
  });
  const [mercadosSeleccionados, setMercadosSeleccionados] = React.useState({
    jovenesAdultos: false,
    profesionales: false,
    fitness: false,
    familias: false,
    adultosMayores: false,
    estrategiasComunicacion: false,
  });

  const [metodosSeleccionados, setMetodosSeleccionados] = React.useState({
    redesSociales: false,
    emailMarketing: false,
    eventos: false,
    marketingContenidos: false,
    publicidadOnline: false,
    analisisProductos: false,
  });

  const [productosSeleccionados, setProductosSeleccionados] = React.useState({
    suplementos: false,
    bienestar: false,
    cosmeticos: false,
    fitness: false,
    vitaminas: false,
  });
  const handleChange = (event) => {
    setObjetivos({ ...objetivos, [event.target.name]: event.target.checked });
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
    console.log(objetivos);
    const pregunta = "¿Cuáles son tus objetivos con LiveGood?";
    let objetivosSeleccionados = Object.keys(objetivos).filter(
      (key) => objetivos[key] === true
    );

    console.log(objetivosSeleccionados);

    // Agrega la pregunta a todas las respuestas seleccionadas
    const respuestasConPregunta = {
      Pregunta: pregunta,
      Respuestas: objetivosSeleccionados,
    };

    dispatch(ObtenerPreguntas(respuestasConPregunta));

    console.log(respuestasConPregunta);
    setPropnt1(false);
  };

  const abrirpronpt3 = () => {
    setabrir(false);
    const experienciaKeys = Object.keys(experienciaSeleccionada).filter(
      (key) => experienciaSeleccionada[key] === true
    );

    const preguntaExperiencia =
      "Marca tu nivel de experiencia y habilidades en marketing multinivel:";

    const experienciaConPregunta = {
      Pregunta: preguntaExperiencia,
      Respuestas: experienciaKeys,
    };
    dispatch(ObtenerPreguntas(experienciaConPregunta));
    console.log(experienciaConPregunta);
    setPronpt2(true);
  };

  const abrirpronpt4 = () => {
    setPronpt2(false);
    const mercadosKeys = Object.keys(mercadosSeleccionados).filter(
      (key) => mercadosSeleccionados[key] === true
    );

    const preguntaMercados = "Selecciona tus mercados y demografías objetivo:";

    const mercadosConPregunta = {
      Pregunta: preguntaMercados,
      Respuestas: mercadosKeys,
    };
    dispatch(ObtenerPreguntas(mercadosConPregunta));

    console.log(mercadosConPregunta);
    setPronpt3(true);
  };
  const abrirpronpt5 = () => {
    setPronpt3(false);
    const metodosKeys = Object.keys(metodosSeleccionados).filter(
      (key) => metodosSeleccionados[key] === true
    );

    const preguntaMetodos =
      "¿Cuáles son tus métodos preferidos de comunicación y promoción?";

    const metodosConPregunta = {
      Pregunta: preguntaMetodos,
      Respuestas: metodosKeys,
    };

    dispatch(ObtenerPreguntas(metodosConPregunta));

    console.log(metodosConPregunta);
    setPronpt4(true);
  };

  const GenerarRespuesta = () => {
    setPronpt4(false);
    const productosKeys = Object.keys(productosSeleccionados).filter(
      (key) => productosSeleccionados[key] === true
    );

    const preguntaProductos =
      "Elige los productos de LiveGood que te interesan para promover:";

    const productosConPregunta = {
      Pregunta: preguntaProductos,
      Respuestas: productosKeys,
    };

    dispatch(ObtenerPreguntas(productosConPregunta));

    console.log(productosConPregunta);
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
                name="ingresosAdicionales"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Crecimiento profesional
                "
                name="crecimientoProfesional"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Desarrollo personal"
                name="desarrolloPersonal"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Expansión de red"
                name="expansionRed"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Experiencia y Habilidades"
                name="experienciaHabilidades"
                onChange={handleChange}
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
                name="principiante"
                onChange={(e) =>
                  setExperienciaSeleccionada({
                    ...experienciaSeleccionada,
                    principiante: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Experiencia moderada
                "
                name="experienciaModerada"
                onChange={(e) =>
                  setExperienciaSeleccionada({
                    ...experienciaSeleccionada,
                    experienciaModerada: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Experto en marketing multinivel"
                name="experto"
                onChange={(e) =>
                  setExperienciaSeleccionada({
                    ...experienciaSeleccionada,
                    experto: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Habilidades de liderazgo"
                name="liderazgo"
                onChange={(e) =>
                  setExperienciaSeleccionada({
                    ...experienciaSeleccionada,
                    liderazgo: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Habilidades de venta"
                name="venta"
                onChange={(e) =>
                  setExperienciaSeleccionada({
                    ...experienciaSeleccionada,
                    venta: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Preferencias de Mercado y Demográficas"
                name="preferenciasMercado"
                onChange={(e) =>
                  setExperienciaSeleccionada({
                    ...experienciaSeleccionada,
                    preferenciasMercado: e.target.checked,
                  })
                }
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
                name="jovenesAdultos"
                onChange={(e) =>
                  setMercadosSeleccionados({
                    ...mercadosSeleccionados,
                    jovenesAdultos: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Profesionales
                "
                name="profesionales"
                onChange={(e) =>
                  setMercadosSeleccionados({
                    ...mercadosSeleccionados,
                    profesionales: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Amantes del fitness"
                name="fitness"
                onChange={(e) =>
                  setMercadosSeleccionados({
                    ...mercadosSeleccionados,
                    fitness: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Familias"
                name="familias"
                onChange={(e) =>
                  setMercadosSeleccionados({
                    ...mercadosSeleccionados,
                    familias: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Adultos mayores"
                name="adultosMayores"
                onChange={(e) =>
                  setMercadosSeleccionados({
                    ...mercadosSeleccionados,
                    adultosMayores: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Estrategias de Comunicación Preferidas"
                name="estrategiasComunicacion"
                onChange={(e) =>
                  setMercadosSeleccionados({
                    ...mercadosSeleccionados,
                    estrategiasComunicacion: e.target.checked,
                  })
                }
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
                name="redesSociales"
                onChange={(e) =>
                  setMetodosSeleccionados({
                    ...metodosSeleccionados,
                    redesSociales: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Email marketing
                "
                name="emailMarketing"
                onChange={(e) =>
                  setMetodosSeleccionados({
                    ...metodosSeleccionados,
                    emailMarketing: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Eventos en persona"
                name="eventos"
                onChange={(e) =>
                  setMetodosSeleccionados({
                    ...metodosSeleccionados,
                    eventos: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Marketing de contenidos"
                name="marketingContenidos"
                onChange={(e) =>
                  setMetodosSeleccionados({
                    ...metodosSeleccionados,
                    marketingContenidos: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Publicidad online"
                name="publicidadOnline"
                onChange={(e) =>
                  setMetodosSeleccionados({
                    ...metodosSeleccionados,
                    publicidadOnline: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Análisis de Productos y Preferencias"
                name="analisisProductos"
                onChange={(e) =>
                  setMetodosSeleccionados({
                    ...metodosSeleccionados,
                    analisisProductos: e.target.checked,
                  })
                }
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
                name="suplementos"
                onChange={(e) =>
                  setProductosSeleccionados({
                    ...productosSeleccionados,
                    suplementos: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Productos de bienestar
                "
                name="bienestar"
                onChange={(e) =>
                  setProductosSeleccionados({
                    ...productosSeleccionados,
                    bienestar: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Cosméticos y cuidado de la piel"
                name="cosmeticos"
                onChange={(e) =>
                  setProductosSeleccionados({
                    ...productosSeleccionados,
                    cosmeticos: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Productos de fitness"
                name="fitness"
                onChange={(e) =>
                  setProductosSeleccionados({
                    ...productosSeleccionados,
                    fitness: e.target.checked,
                  })
                }
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label="Vitaminas y minerales"
                name="vitaminas"
                onChange={(e) =>
                  setProductosSeleccionados({
                    ...productosSeleccionados,
                    vitaminas: e.target.checked,
                  })
                }
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
