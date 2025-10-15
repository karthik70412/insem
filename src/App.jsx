import React from "react";

import Welcome from "./welcome.jsx"; 
import "./App.css";

function App() {
  return (
    <div className="student-dashboard">
      <h1>Student Dashboard Overview</h1>
      <p>This section displays personalized welcome messages for different users.</p>

      <hr />

      {/* 2. Dynamically Render for Deepak */}
      <section>
        <h2>User 1</h2>
        <Welcome name="Deepak" />
      </section>

      <hr />

      {/* 3. Dynamically Render for a second student (Priya) */}
      <section>
        <h2>User 2</h2>
        <Welcome name="Priya" />
      </section>

      <hr />

      {/* 4. Dynamically Render for a third student (Alex) */}
      <section>
        <h2>User 3</h2>
        <Welcome name="Alex" />
      </section>
      
    </div>
  );
}

export default App;