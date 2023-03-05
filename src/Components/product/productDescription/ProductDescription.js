import React from "react";
import {
  ParagraphsContainer,
  ProductDescriptionContainer,
} from "./styledProductDescription";

export default function ProductDescription() {
  return (
    <ProductDescriptionContainer>
      <h3>Alójate en el corazón de Buenos Aires</h3>
      <ParagraphsContainer>
        <p>
          Está situado a solo unas calles de la avenida Alvear, de la avenida
          Quintana, del parque San Martín y del distrito de Recoleta. En las
          inmediaciones también hay varios lugares de interés, como la calle
          Florida, el centro comercial Galerías Pacífico. la zona de
          PuertoMadero, la plaza de Mayo y el palacio Municipal.
        </p>
        <p>
          Nuestros clientes dicen que esta parte de Buenos Aires es su favorita,
          según los comentarios independientes.
        </p>
        <p>
          El Hotel es un hotel sofisticado de 4 estrellas que goza de una
          ubicación tranquila, a poca distancia de prestigiosas galerías de
          arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita.
          El establecimiento sirve un desayuno variado de 07:00 a 10:30.
        </p>
      </ParagraphsContainer>
    </ProductDescriptionContainer>
  );
}
