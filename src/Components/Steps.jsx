import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { ChatGPT } from "./ChatGPT";

const steps = [
  {
    title: "Prompt 1 ",
    content: (
      <div style={{ padding: "10px 10px 30px 20px" }}>
        <FormGroup>
          <h1
            style={{
              marginTop: "30px",
              fontSize: "35px",
              marginBottom: "39px",
            }}
          >
            ¿Cuáles son tus objetivos con LiveGood?
          </h1>
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
      </div>
    ),
  },
  {
    title: "Prompt 2",
    content: (
      <div style={{ padding: "10px 10px 30px 20px" }}>
        <FormGroup>
          <h1
            style={{
              marginTop: "30px",
              fontSize: "35px",
              marginBottom: "39px",
            }}
          >
            Marca tu nivel de experiencia y habilidades en marketing multinivel:
          </h1>
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
      </div>
    ),
  },
  {
    title: "Prompt 3",
    content: (
      <div style={{ padding: "10px 10px 30px 20px" }}>
        <FormGroup>
          <h1
            style={{
              marginTop: "30px",
              fontSize: "35px",
              marginBottom: "39px",
            }}
          >
            Selecciona tus mercados y demografías objetivo
          </h1>
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
      </div>
    ),
  },
  {
    title: "Prompt 4",
    content: (
      <div style={{ padding: "10px 10px 30px 20px" }}>
        <FormGroup>
          <h1
            style={{
              marginTop: "30px",
              fontSize: "35px",
              marginBottom: "39px",
            }}
          >
            ¿Cuáles son tus métodos preferidos de comunicación y promoción?
          </h1>
          <FormControlLabel
            control={<Checkbox style={{ color: "white", fontSize: "10px" }} />}
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
      </div>
    ),
  },
  {
    title: "Prompt 5 ",
    content: (
      <div style={{ padding: "10px 10px 30px 20px" }}>
        <FormGroup>
          <h1
            style={{
              marginTop: "30px",
              fontSize: "35px",
              marginBottom: "39px",
            }}
          >
            Elige los productos de LiveGood que te interesan para promover
          </h1>
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
      </div>
    ),
  },

  {
    title: "Respuesta",
    content: (
      <div
        style={{ padding: "50px", paddingBottom: "150px", paddingTop: "100px" }}
      >
        <FormGroup>
          <CircularProgress
            thickness={5}
            style={{
              color: "#64a72d",
            }}
            className="circularsptps"
          />

          <h2>Generando estrategia...</h2>
        </FormGroup>
      </div>
    ),
  },
];

const StepsApp = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "0px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    color: "white",
  };
  return (
    <div className="stpes">
      <Steps
        current={current}
        items={items}
        direction="horizontal"
        size="large"
      />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            className="btn-next-stes"
            style={{
              fontSize: "small",
            }}
          >
            Siguiente
          </Button>
        )}
        {current === steps.length - 0 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
            className="btn-next-stes"
            style={{
              fontSize: "small",
            }}
          >
            Completar
          </Button>
        )}
      </div>
    </div>
  );
};
export default StepsApp;
