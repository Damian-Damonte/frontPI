import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { DatePickerSearchBarContainer } from "./styledDatePickerSearchBar";

registerLocale("es", es);

export default function Datepicker({ showCalendar, startDate, endDate, onChangeDate, handleShowCalendar }) {
  return (
    <DatePickerSearchBarContainer $showCalendar={showCalendar} onClick={e => e.stopPropagation()} >
      <ReactDatePicker
        wrapperClassName="customDate"
        onChange={onChangeDate}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={window.innerWidth > 768 ? 2 : 1}
        locale="es"
        minDate={new Date()}
      >
        <button className="btnAplicar" type="button" onClick={handleShowCalendar}>
          Aplicar
        </button>
        <div className="linea-divisoria"></div>
      </ReactDatePicker>
    </DatePickerSearchBarContainer>
  );
}
