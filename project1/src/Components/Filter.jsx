import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initSearchParams = searchParams.getAll("genre");
  const [category, setCategory] = useState(initSearchParams || []);

  const handleChange = (e) => {
    const option = e.target.value;

    const newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({genre: category});
    }
  }, [category, setSearchParams]);

  return (
    <>
      <div style={{height: "160px", width: "150px", border: "1px solid gray"}}>
        <h3>Filter</h3>
        <div>
          <input
            type="checkBox"
            value="Analog"
            defaultChecked={category.includes("Analogs")}
            onChange={handleChange}
          />
          <label htmlFor="">Analog</label>
        </div>
        <div>
          <input
            value="Chronograph"
            defaultChecked={category.includes("Chronograph")}
            type="checkBox"
            onChange={handleChange}
          />
          <label htmlFor="">Chronograph</label>
        </div>
        <div>
          <input
            type="checkBox"
            value="Digital"
            defaultChecked={category.includes("Digital")}
            onChange={handleChange}
          />
          <label htmlFor="">Digital</label>
        </div>
      </div>
    </>
  );
};
