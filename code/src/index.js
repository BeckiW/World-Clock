import React from "react"
import ReactDOM from "react-dom"
import Moment from "moment-timezone"
import "./index.css"


class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>World Time Clock</h1>
        </header>
      </div>
    )
  }
}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Stockholm",
      timezone: "Europe/Stockholm",
      moment: new Moment()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
     clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      moment: new Moment()
    });
  }

  pauseClock = () => {
    clearInterval(this.timerID)
  }

  startClock = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  changeZoneClick = (sender) => {
    let buttonText = sender.target.innerText;

    if ( buttonText == "STOCKHOLM" ) {
      this.setState({
        title: "Stockholm",
        timezone: "Europe/Stockholm"
      });

    } else if ( buttonText == "BRAZIL" ) {
      this.setState({
        title: "Brazil (Sao Paulo)",
        timezone: "America/Sao_Paulo"
      });

    } else if ( buttonText == "SINGAPORE" ) {
      this.setState({
        title: "Singapore",
        timezone: "Asia/Singapore"

      });

    } else if ( buttonText == "RUSSIA" ) {
      this.setState({
        title: "Russia (Moscow)",
        timezone: "Russia/Moscow"
      });
    }
  }

  render() {
    return (
      <div className="clock">
        <h2>{this.state.title}</h2>
        <h3 className="time">{this.state.moment.tz(this.state.timezone).format('HH:mm:ss')}</h3>
        <div className="buttonGrid">
          <button onClick={this.changeZoneClick}>STOCKHOLM</button>
          <button onClick={this.changeZoneClick}>BRAZIL</button>
          <button onClick={this.changeZoneClick}>SINGAPORE</button>
          <button onClick={this.changeZoneClick}>RUSSIA</button>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <Header />
    <div className="clock-grid">
      <Clock />
      <Clock />
    </div>
  </div>
  ,
  document.getElementById('root')
);
