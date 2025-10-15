// src/components/Welcome.jsx

import React from 'react';
import './Welcome.css'; // Import the CSS file

/**
 * Functional component to display a personalized welcome message.
 * @param {object} props - The component props.
 * @param {string} props.name - The name of the student to greet.
 * @returns {JSX.Element} The welcome message component.
 */
function Welcome(props) {
  // Destructuring the name prop for cleaner code
  const { name } = props;

  return (
    <div className="welcome-container">
      {/* Display the personalized greeting */}
      <h2 className="welcome-message">
        Welcome, {name}!
      </h2>
      <p className="dashboard-info">
        Ready to check your student dashboard.
      </p>
    </div>
  );
}

export default Welcome;