import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";

const ResearchForm: React.FC = () => {
  const [country, setCountry] = useState(null);
  const [agenda, setAgenda] = useState("");

  const options = countryList().getData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the research logic here
    console.log("Country:", country);
    console.log("Agenda:", agenda);
  };

  return (
    <form
      className="w-full max-w-md p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">M.U.N Research</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="country">
          Country
        </label>
        <Select
          id="country"
          options={options}
          value={country}
          onChange={setCountry as any}
          className="w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="agenda">
          Agenda
        </label>
        <input
          id="agenda"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={agenda}
          onChange={(e) => setAgenda(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#091619] text-white p-2 rounded hover:bg-[#15292c] transition-all"
      >
        Research
      </button>
    </form>
  );
};

export default ResearchForm;
