import { useEffect, useRef, useState } from "react";
import './SearchableDropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const SearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  handleChange
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className="searchableDropdown">
      <div className="control">
        <div className="selected-value">          
          <div class="input-group search_input_con">
          <span class="input-group-text">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
          className="form-control search_input"
            ref={inputRef}
            placeholder="Search"
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            aria-label="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={toggle}
          />
          {/* <span class="shortcut-icon input-group-text">
            <FontAwesomeIcon key="faKeyboard" icon={faKeyboard}  /> K
          </span>        */}
      </div>
        </div>
        {/* <div className={`arrow ${isOpen ? "open" : ""}`}></div> */}
      </div>

      <div className={`options ${isOpen ? "open" : ""}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={`option ${
                option[label] === selectedVal ? "selected" : ""
              }`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchableDropdown;
