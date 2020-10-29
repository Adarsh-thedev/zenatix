import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const initialTextArray = [
    {
      text: "Zenatix gurgaon",
    },
    {
      text: "Zenatix gurgaon address",
    },
    {
      text: "Zenatix Solutions",
    },
    {
      text: "Zenatix, Sikanderpur, Sector 26, Gurugram, Haryana",
    },
    {
      text:
        "Zenatix Solutions Pvt. Ltd., Sikanderpur, Sector 26, Gurugram, Haryana",
    },
    {
      text: "A dummy text",
    },
    {
      text: "Another dummy text",
    },
    {
      text: "Somewhere in the universe",
    },
  ];
  const [textArray, setTextArray] = useState(initialTextArray);

  const [searchField, setSearchField] = useState("");
  const [filteredTextArray, setFilteredTextArray] = useState([]);
  const [textToAdd, setTextToAdd] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleDeleteClick = (index) => {
    const newArray = [...textArray];
    newArray.splice(index, 1);
    setTextArray(newArray);
  };

  const handleAddTextChange = (e) => {
    setTextToAdd(e.target.value);
  };

  const addItem = () => {
    if (textToAdd === "") {
      alert("Can not add empty item");
      return;
    } else {
      const newArray = [...textArray, { text: textToAdd }];
      setTextArray(newArray);
      setTextToAdd("");
    }
  };

  useEffect(() => {
    setFilteredTextArray(
      textArray.filter((item) => {
        return item.text.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, [searchField, textArray]);

  return (
    <div className="app">
      <h2 style={{ color: "#fff" }}>Zenatix Searchbar</h2>
      <input
        type="search"
        placeholder="Search"
        className="mt ba pa2"
        onChange={onSearchChange}
      />
      <div className="list center mt">
        {filteredTextArray.map((item, i) => (
          <div className="list-item pa2" key={i}>
            <span style={{ textAlign: "left" }}>{item.text}</span>
            <span>
              <button
                onClick={() => handleDeleteClick(i)}
                className="deleteButton"
              >
                Delete
              </button>
            </span>
          </div>
        ))}
        <div className="list-item pa2">
          <input
            type="text"
            placeholder="Add New"
            value={textToAdd}
            onChange={handleAddTextChange}
          />
          <button
            style={{ marginLeft: 5 }}
            className="addButton"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
