import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Nav from '../Nav';
import Header from '../Header';
import Abilities from '../Abilities';
import Backgrounds from '../Backgrounds';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      selected: null,
    };
    this.retrieveChampions = this.retrieveChampions.bind(this);
    this.retrieveStubChampions = this.retrieveStubChampions.bind(this);
    this.handleChampionClick = this.handleChampionClick.bind(this);
    this.selectChampion = this.selectChampion.bind(this);
    this.selectNextChampion = this.selectNextChampion.bind(this);
    this.setSelectNextChampionInterval = this.setSelectNextChampionInterval.bind(this);
    this.clearSelectNextChampionInterval = this.clearSelectNextChampionInterval.bind(this);
    this.resetSelectNextChampionInterval = this.resetSelectNextChampionInterval.bind(this);
  }

  componentDidMount() {
    this.retrieveChampions();
    // this.retrieveStubChampions();
  }

  retrieveStubChampions() {
    this.setState({ 
      champions: this.props.stubs,
      selected: this.props.stubs[0],
    });
    this.setSelectNextChampionInterval();
  }

  retrieveChampions() {
    fetch('/api/champions')
      .then(res => res.json())
      .then(champions => {
        this.setState({ 
          champions,
          selected: champions[0],
        });
        this.setSelectNextChampionInterval();
      });
  }

  handleChampionClick(selected) {
    this.resetSelectNextChampionInterval();
    this.selectChampion(selected);
  }

  selectChampion(selected) {
    this.setState({ selected });
  }

  selectNextChampion() {
    const currentIndex = this.state.champions.indexOf(this.state.selected);
    const nextIndex = (currentIndex + 1) % this.state.champions.length;
    const nextChampion = this.state.champions[nextIndex];
    this.selectChampion(nextChampion);
  }

  setSelectNextChampionInterval() {
    this.selectNextChampionInterval = setInterval(this.selectNextChampion, 5000);
  }

  clearSelectNextChampionInterval() {
    clearInterval(this.selectNextChampionInterval);
  }

  resetSelectNextChampionInterval() {
    this.clearSelectNextChampionInterval();
    this.setSelectNextChampionInterval();
  }

  getContent() {
    if (this.state.selected) {
      return (
        <div>
          <Col lg={1} md={1} sm={1} xs={1} >
            <Nav
              champions={this.state.champions}
              selected={this.state.selected}
              handleChampionClick={this.handleChampionClick}
            />
          </Col>
          <Col lg={5} md={5} sm={5} xs={5} >
            <Row>
              <Header champion={this.state.selected} />
            </Row>
            <Row>
              <Abilities champion={this.state.selected} />
            </Row>
          </Col>
          <Backgrounds
            champions={this.state.champions}
            selected={this.state.selected}
          />
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    const content = this.getContent();
    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
