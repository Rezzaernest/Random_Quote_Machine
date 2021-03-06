function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);


    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

             setQuotes(data);
             let randIndex = Math.floor(Math.random() * data.length);
             setRandomQuote (data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
             setRandomQuote(quotes[randIndex])
        }
    




         return (
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header">Inspirational Quotes</div>
                <div className="card-body">
                    {randomQuote ? (
                        <>
                        <h5 className="card-title">- {randomQuote.author || "No author"}</h5>
                        <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>
                        ) : (
                           <h2>Loading</h2>
                    )}

                    <div className="row">
                        <button onClick={getNewQuote} className="btn btn-primary">New Quote</button>

                        <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + 
                        encodeURIComponent (
                            '"' + randomQuote.text + '" ' + randomQuote.author
                        )
                        }
                          target="_blank"  className="btn btn-warning">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href={
                            "https://www.tumblr.com/widgets/share/tool?posttype+quote&tags=quotes,freecodecamp&caption" +
                            encodeURIComponent (randomQuote.author) +
                            "&content=" + 
                            encodeURIComponent (randomQuote.text) +
                            "&canonicaUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" 
                        }
                       target="_blank" className="btn btn-danger">
                            <i className="fa fa-tumblr"></i>
                            </a>
                            </div>
                </div>
                </div>
            </div>
           hello
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('app'))