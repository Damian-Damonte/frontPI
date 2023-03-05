import React from "react";
import DatepickerBooking from "./datePicker/DatePickerBooking";
import { BookingSection, BtnBookingContainer } from "./styledProductBooking";

export default function ProductBooking() {
  return (
    <div>
      <h3>Fechas disponibles</h3>
      <BookingSection>
        <DatepickerBooking />

        <BtnBookingContainer>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button>Iniciar reserva</button>
        </BtnBookingContainer>
      </BookingSection>
    </div>
  );
}
