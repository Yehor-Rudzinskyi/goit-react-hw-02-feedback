import { useState } from 'react';

import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

const BUTTON_OPTIONS = ['Good', 'Neutral', 'Bad'];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  const handleLeaveFeedback = name => {
    switch (name) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={BUTTON_OPTIONS}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good > 0 || bad > 0 || neutral > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
