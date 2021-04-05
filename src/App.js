import React, { Component } from 'react';
import Container from './components/Container';
import Sections from './components/Sections';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleButton = buttonName => {
    this.setState(prevState => {
      return { [buttonName]: prevState[buttonName] + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const buttonNames = Object.keys(this.state);
    const stateList = Object.entries(this.state);

    const statisticsList = Object.entries({
      ...this.state,
      total: this.countTotalFeedback(stateList),
      'positive feedback': this.countPositiveFeedbackPercentage() || 0,
    });

    return (
      <Container>
        <Sections title="Please leave feedback:">
          <FeedbackOptions
            options={buttonNames}
            onClickButton={this.handleButton}
          />
        </Sections>
        <Sections title="Statistics:">
          {this.countTotalFeedback() ? (
            <Statistics itemList={statisticsList} />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Sections>
      </Container>
    );
  }
}

export default App;
