import React, { Component } from 'react';

// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          {/* <Statistics
          good={1}
          neutral={1}
          bad={1}
          total={1}
          positivePercentage={1}
        /> */}
        </Section>
        {/* <Section title="Statistics"> */}
        {/* <FeedbackOptions options={1} onLeaveFeedback={1}></FeedbackOptions> */}
        {/* </Section> */}
      </div>
    );
  }
}
