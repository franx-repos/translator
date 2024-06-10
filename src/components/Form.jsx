const Form = ({searchTerm, setSearchTerm, handleSearch }) => {

    const handleInput = (e) => {
        setSearchTerm((prev) => ({
            ...prev,
            searchStr: e.target.value
        }))
    }

    return (
        <form action="">
            <input
                type="text"
                value={searchTerm.searchStr}
                onChange={handleInput}
                placeholder="Search for a word..."
            />
            <button onClick={handleSearch}>Search</button>
        </form>
    )
}

export default Form