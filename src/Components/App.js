import { useState } from 'react';
import Conteiner from './Conteiner';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

export default function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onHandleChange = (key) => {
    switch (key) {
      case 'good':
        setGood(prev => key = prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => key = prev + 1);
        break;
      case 'bad':
        setBad(prev => key = prev + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.floor((good * 100) / (good + neutral + bad));

  return (
    <>
      <Conteiner>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{good, neutral, bad}}
            onLeaveFeedback={onHandleChange}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback({good, neutral, bad})}
              positivePercentage={countPositiveFeedbackPercentage(
                {good, neutral, bad}
              )}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Conteiner>
    </>
  );
}
