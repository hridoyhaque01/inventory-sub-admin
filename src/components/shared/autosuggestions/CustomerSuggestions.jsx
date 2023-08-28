import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { useTranslation } from "react-i18next";

const CustomerSuggestions = ({
  suggestions,
  setSelectedCustomer,
  setValue,
  value,
}) => {
  const [suggestionsList, setSuggestionsList] = useState([]);
  const { t } = useTranslation();
  const getSuggestions = (inputValue) => {
    return suggestions.filter((suggestion) =>
      suggestion.customerPhone?.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestionsList(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSelectedCustomer(suggestion);
  };

  const renderSuggestion = (suggestion) => (
    <div className="px-4 py-2 cursor-pointer hover:bg-whiteHigh">
      <div>{suggestion?.customerPhone}</div>
    </div>
  );

  const inputProps = {
    placeholder: t("placeholders.enterCustomerPhone"),
    required: true,
    value,
    onChange: (event, { newValue }) => {
      setValue(newValue);
    },
  };

  return (
    <Autosuggest
      suggestions={suggestionsList}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion.customerPhone}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default CustomerSuggestions;
