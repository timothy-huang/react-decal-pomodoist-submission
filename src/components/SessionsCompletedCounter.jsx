import React from 'react';
import '../styles/sessionsCompletedCounter.css';

function SessionsCompletedCounter({ sessionsCompleted }) {
  return (
    <div className="sessions-completed-container">
      {/* using index as a key is an anti-pattern but should not matter for this case
        https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318 */}
      {[...Array(sessionsCompleted)].map((_, index) => <div className="sessions-completed-line" key={index} /> )}
    </div>
  );
}

export default SessionsCompletedCounter;
