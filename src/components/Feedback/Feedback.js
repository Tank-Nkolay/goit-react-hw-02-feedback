import React from 'react';
// import PropTypes from 'prop-types';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import { Markup, Title, TitleStatistics } from './Feedback.styled.jsx';

class Feedback extends React.Component {
  // Передаем стартовое значение ===
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrimenteGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrimenteNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrimenteBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  // {this.state.visible ? 'Скрыть' : 'Показать'}
  render() {
    return (
      <Markup>
        <Title>Please leave feedback</Title>
        <Section title="">
          <FeedbackOptions
            clickGood={this.handleIncrimenteGood}
            clickNeutral={this.handleIncrimenteNeutral}
            clickBad={this.handleIncrimenteBad}
          />
        </Section>

        <TitleStatistics>Statistics</TitleStatistics>
        <Section title="">
          {this.countTotalFeedback() > '0' ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Markup>
    );
  }
}

export default Feedback;

// ===================================
// countPositiveFeedbackPercentage() {
//   return parseInt((this.state.good / this.countTotalFeedback()) * 100);
// }
// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================
