import React from "react";
import HierarchicalMenu from "../components/HierarchicalMenu";
import { Recetas } from "../components/Recetas";
import { Prescripcion } from "../components/Prescripcion";
import ImagenesMedicas from "../components/ImagenesMedicas";
import { Laboratorio } from "./Laboratorio";
import { Consultas } from "./Consultas";
import { FisioyKinesio } from "./FisioyKinesio";
import { Electrocardiograma } from "./Electrocardiograma";
import { Espirometria } from "./Espirometria";
import { Ergometria } from "./Ergometria";
import InterconsultaEspecialista from "./InterconsultaEspecialista";
import Radiografia from "./Radiografia";
import EcografiaArticular from "./EcografiaArticular";
import EcografiaAbdomen from "./EcografiaAbdomen";
import EcografiaRenal from "./EcografiaRenal";
import EcografiaVenosa from "./EcografiaVenosa";
import EcografiaGenitalesObstetricia from "./EcografiaGenitalesObstetricia";
import EcografiaGlandulas from "./EcografiaGlandulas";
import TACAbdomenYPelvis from "./TACAbdomenYPelvis";
import TACTorax from "./TACTorax";
import TACCraneoYColumna from "./TACCraneoYColumna";
import RNMCraneoCervicalLumbar from "./RNMCraneoCervicalLumbar";
import RNMToraxCorazon from "./RNMToraxCorazon";
import RNMAbdomenPelvis from "./RNMAbdomenPelvis";

const heroMenuStructure = [
  {
    key: "recetas",
    label: "Recetas",
    tooltip: "Ver recetas",
    next: <Recetas />,
  },

  {
    key: "prescripcion",
    label: "Prescripcion",
    tooltip: "Ver prescripcion",
    next: [
      {
        key: "Fisioterapia y Kinesioterapia",
        label: "Fisioterapia y Kinesioterapia",
        tooltip: "Ver Fisioterapia y Kinesioterapia",
        next: <FisioyKinesio />
      },
      {
        key: "Electrocardiograma",
        label: "Electrocardiograma",
        tooltip: "Ver Electrocardiograma",
        next: <Electrocardiograma />,
      },
      {
        key: "Espirometria",
        label: "Espirometria",
        tooltip: "Ver Espirometria",
        next: <Espirometria />,
      },
      {
        key: "Ergometria",
        label: "Ergometria",
        tooltip: "Ver Ergometria",
        next: <Ergometria />,
      },
      {
        key: "InterconsultaEspecialista",
        label: "Interconsulta con Especialistas",
        tooltip: "Ver Interconsulta con Especialistas",
        next: <InterconsultaEspecialista />,
      },
    ],
  },
  {
    key: "imagenes",
    label: "Imagenes Medicas",
    tooltip: "Ver imagenes medicas",
    next: [
      {
        key: "radiografias",
        label: "Radiografias",
        tooltip: "Ver radiografias",
        next: <Radiografia />,
      },
      {
        key: "ecografias",
        label: "Ecografias",
        tooltip: "Ver ecografias",
        next: [
              {
                key: "articular",
                label: "Articular",
                tooltip: "Ecografia articular",
                next: <EcografiaArticular />,
              },
              {
                key: "abdomen",
                label: "Abdomen",
                tooltip: "Ecografia abdomen",
                next: <EcografiaAbdomen />,
              },
              {
                key: "genitales",
                label: "Genitales y Obstetricia",
                tooltip: "Ecografia genitales y obstetricia",
                next: <EcografiaGenitalesObstetricia />,
              },
              {
                key: "glandulas",
                label: "Glándulas",
                tooltip: "Ecografia glándulas",
                next: <EcografiaGlandulas />,
              
              },
              {
                key: "renal",
                label: "Renal",
                tooltip: "Ecografia Renal",
                next: <EcografiaRenal />,
              
              },
              {
                key: "venosa",
                label: "Venosa",
                tooltip: "Ecografia venosa",
                next: <EcografiaVenosa />,
              
              },
        ],
      },
      {
        key: "tomografias",
        label: "Tomografia Axial Computada",
        tooltip: "Ver Tomografia Axial Computada",
        next: [
          {
            key: "tacabdomenpelvis",
            label: "TAC Abdomen y Pelvis",
            tooltip: "Ver TAC Abdomen y Pelvis",
            next: <TACAbdomenYPelvis />,
          },
          {
            key: "tactorax",
            label: "TAC Torax",
            tooltip: "Ver TAC Torax",
            next: <TACTorax />,
          },
          {
            key: "taccraneocolumna",
            label: "TAC Craneo y Columna",
            tooltip: "Ver TAC Craneo y Columna",
            next: <TACCraneoYColumna />,
          },
        ]
      },
      {
        key: "resonancias",
        label: "Resonancia Nuclear Magnetica",
        tooltip: "Ver Resonancia Nuclear Magnetica",
        next: [
          { 
            key: "rnmcraneocervicallumbar",
            label: "RNM Craneo, C. Cervical, C. Lumbar",
            tooltip: "Ver RNM Craneo, Columna Cervical y Columna Lumbar",
            next: <RNMCraneoCervicalLumbar />,
          },
          { 
            key: "rnmtoraxcorazon",
            label: "RNM Torax y Corazon",
            tooltip: "Ver RNM Torax y Corazon",
            next: <RNMToraxCorazon />,

          },
          {
            key: "rnmabdomenpelvis",
            label: "RNM Abdomen y Pelvis",
            tooltip: "Ver RNM Abdomen y Pelvis",
            next: <RNMAbdomenPelvis />,
          }
        ]
      },
    ],
  },
  {
    key: "laboratorio",
    label: "Laboratorio",
    tooltip: "Ver laboratorio",
    next: <Laboratorio />,
  },
  {
    key: "consultas",
    label: "Consultas",
    tooltip: "Ver consultas",
    next: <Consultas />,
  },
];

const Hero3 = () => {
  return (
    <div>
      <HierarchicalMenu menuStructure={heroMenuStructure} />
    </div>
  );
};

export default Hero3;
