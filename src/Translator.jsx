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
    <div className=" bg-gray-100 flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Translation App
          </h1>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a word..."
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md "
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleSearch}
              className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Search
            </button>
          </div>
          <div className="bg-white shadow overflow-hidden">
            <div className="px-4 py-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Definition
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Word details and translations.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {definition.tr ? (
                  <>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Word Type
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {definition.pos}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Phonetic Spelling
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {definition.ts}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Synonyms
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul className="list-disc pl-5 space-y-1">
                          {definition.tr?.map((entry, index) => (
                            <li key={index}>{`${entry.text} > ${entry.ts}`}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </>
                ) : (
                  <div className="bg-gray-50 px-4 py-5 sm:px-6">
                    <p className="text-sm text-gray-500">Nothing found.</p>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;
