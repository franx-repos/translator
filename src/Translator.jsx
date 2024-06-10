import { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [definition, setDefinition] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDefinition = async (word) => {
    const apiKey =
      "dict.1.1.20240610T090637Z.f6d6efe832849511.e996d69148c86f9d5c0b20bb029c2989646ee383";
    try {
      const response = await axios.get(
        `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=en-en&text=${word}`
      );

      if (response.status === 200) {
        const data = response.data;
        // const definition = data.def[0]?.tr[0]?.text || 'No definition found.';
        const definition = data.def[0] || "No definition found.";
        setDefinition(definition);
        console.log(definition);
      } else {
        setDefinition("No definition found.");
      }
    } catch (error) {
      console.error("Error fetching definition:", error);
      setDefinition("No definition found.");
    }
  };

  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      await fetchDefinition(searchTerm);
    } catch (error) {
      console.error("Error fetching definition:", error);
      setDefinition("No definition found.");
    }
  };

  return (
    <div>
      <div className="flex flex-row">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        {definition.tr ? (
          <>
            <p>word type: {definition.pos}</p>
            <p>phonetic spelling: {definition.ts}</p>
            <ul>
              <p>synonyms:</p>
              {definition.tr?.map((entry) => {
                return <li>{`${entry.text} > ${entry.ts}`}</li>;
              })}
            </ul>
          </>
        ) : (
          <p>nothing found</p>
        )}
      </div>
    </div>
  );
};

export default Translator;
