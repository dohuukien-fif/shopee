import React, { useState } from "react";
import "./Autocomplete.css";
const Autocomplete = ({ lang }) => {
  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);
  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = lang
        .sort()
        .filter((e) => e.name.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearchtext(value);
    setSuggest([]);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }

    return (
      <ul className="list-search">
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li onClick={() => suggestedText(item.name)}>{item.name}</li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="header3_input">
      <input
        className="search-input"
        type="text"
        placeholder="Search.."
        className="search"
        value={searchtext}
        onChange={handleChange}
      />
      {getSuggestions()}
    </div>
  );
};
export default Autocomplete;
