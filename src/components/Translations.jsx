const Translations = ({ answer }) => {
    
    console.log('Answer', answer)

    return (
        <div>
            <h2>Definition:</h2>
            <p>Translation here ... { answer}</p>
        </div>
    )
}

export default Translations