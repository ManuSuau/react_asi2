import React, { useState, useEffect } from 'react';
import RobotList from './RobotList';

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    // Utilisez le fetch API pour obtenir les données des robots depuis l'API REST
    fetch('https://www.robots.loiclegoff.com/robots')
      .then((response) => response.json())
      .then((data) => {
        setRobots(data)
        console.log(robots)
      });
  }, []);

  return (
    <div className="App">
      <h1>Robot List App</h1>
      <RobotList robots={robots} />
    </div>
  );
}

export default App;