import React from "react";

class QuoteOfTheDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Quote: "Quote will come here soon",
      // Author: "Author",
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://type.fit/api/quotes");
    const quote = await data.json();
    this.setState({
      Quote: quote[Math.floor(Math.random() * 100) + 1].text,
      // Author: quote[10].author,
    });

    this.timer = setInterval(() => console.log("Interval Line - 23"), 1000);

    console.log("componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div className=" flex justify-center items-center h-[70vh]">
        <span className="text-4xl font-bold">
          " {this.state.Quote} {this.state.Author} "
        </span>
      </div>
    );
  }
}

export default QuoteOfTheDay;
