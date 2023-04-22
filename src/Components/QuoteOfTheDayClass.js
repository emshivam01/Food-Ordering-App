import React from "react";

class QuoteOfTheDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Quote: "Quote will come here soon",
      Author: "Author",
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://type.fit/api/quotes");
    const quote = await data.json();
    console.log(quote[101].text);
    this.setState({
      Quote: quote[10].text,
      Author: quote[10].author,
    });

    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div className="quoteBox">
        <span>
          " {this.state.Quote} - {this.state.Author} "
        </span>
      </div>
    );
  }
}

export default QuoteOfTheDay;
