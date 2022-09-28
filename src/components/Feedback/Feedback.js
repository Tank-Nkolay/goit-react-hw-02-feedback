import React from 'react';
// import PropTypes from 'prop-types';
import {
  Markup,
  Title,
  BoxButton,
  Button,
  TitleStatistics,
  BoxInfo,
  Info,
} from './Feedback.styled.jsx';

class Feedback extends React.Component {
  // ДЕФОЛТНОЕ значение ПРОПС
  //   static defaultProps = {
  //     initialValue: 5,
  //   };
  static propTypes = {
    //
  };

  // Передаем стартовое значение
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

  render() {
    return (
      <Markup>
        <Title>Please leave feedback</Title>
        <BoxButton>
          <Button onClick={this.handleIncrimenteGood}>good</Button>
          <Button onClick={this.handleIncrimenteNeutral}>neutral</Button>
          <Button onClick={this.handleIncrimenteBad}>bad</Button>
        </BoxButton>
        <TitleStatistics>Statistics</TitleStatistics>
        <BoxInfo>
          <Info>Good: {this.state.good}</Info>
          <Info>Neutral: {this.state.neutral}</Info>
          <Info>Bad: {this.state.bad}</Info>
          <Info>Total: {this.countTotalFeedback()}</Info>
          <Info>
            Positive feedback:
            {this.countPositiveFeedbackPercentage() > '0'
              ? this.countPositiveFeedbackPercentage()
              : '0'}
            %
          </Info>
        </BoxInfo>
      </Markup>
    );
  }
}

export default Feedback;

// Вынеси отображение статистики в отдельный компонент
/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}> */

// ===================================
// countPositiveReviewsPercentage() {
//   return parseInt((this.state.good / this.countTotalReviews()) * 100);
// }
// ===================================
