import { useState } from "react";
import Datepicker from "./datePicker/DatePicker";
import {
  BtnSearch,
  FormSearch,
  SearchBarContainer,
  SearchBarTitle,
  SearchDateInput,
  IconCalendar,
} from "./styledSearchBar";
import SelectCityContainer from "./selectCity/SelectCityContainer";

export default function SearchBar({
  citySelected,
  setCitySelected,
  startDate,
  endDate,
  onChangeDate,
  handleSearchProducts,
}) {
  const [showCitys, setShowCitys] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCity = () => {
    showCalendar && setShowCalendar(false);
    setShowCitys(!showCitys);
  };

  const handleShowCalendar = () => {
    showCitys && setShowCitys(false);
    setShowCalendar(!showCalendar);
  };

  const dayFormater = (date) => {
    const options = { day: "numeric", month: "short" };
    const formattedDate = date.toLocaleDateString("es-ES", options);
    return formattedDate.replace(/ /, " de ");
  };

  return (
    <SearchBarContainer>
      <SearchBarTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBarTitle>
      <FormSearch onSubmit={handleSearchProducts}>
      
        <SelectCityContainer
          setCitySelected={setCitySelected}
          handleShowCity={handleShowCity}
          citySelected={citySelected}
          showCitys={showCitys}
        />

        <SearchDateInput onClick={handleShowCalendar} $empty={startDate}>
          <IconCalendar />
          {startDate ? dayFormater(startDate) : "Check in"}
          {" - "}
          {endDate ? dayFormater(endDate) : "Check out"}
          <Datepicker
            showCalendar={showCalendar}
            startDate={startDate}
            endDate={endDate}
            onChangeDate={onChangeDate}
            handleShowCalendar={handleShowCalendar}
          />
        </SearchDateInput>

        <BtnSearch>Buscar</BtnSearch>
      </FormSearch>
    </SearchBarContainer>
  );
}
