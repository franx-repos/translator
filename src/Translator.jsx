import { useState } from 'react';
import axios from 'axios';

const Translator = () => {

  const [definition, setDefinition] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchDefinition = async (word) => {
    const apiKey = 'dict.1.1.20240610T090637Z.f6d6efe832849511.e996d69148c86f9d5c0b20bb029c2989646ee383';
    try {
      const response = await axios.get(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=en-en&text=${word}`);
  
      if (response.status === 200) {
        const data = response.data;
        const definition = data.def[0]?.tr[0]?.text || 'No definition found.';
        setDefinition(definition);
      } else {
        setDefinition('No definition found.');
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition('No definition found.');
    }
  };

  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      await fetchDefinition(searchTerm);
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition('No definition found.');
    }
  };

  return (
    <div>
      <h1>Translation App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Definition:</h2>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default Translator;
