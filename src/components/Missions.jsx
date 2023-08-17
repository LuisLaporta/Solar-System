import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../css/missions.css';

class Missions extends React.Component {
  render() {
    const card = missions.map((m) => (
      <MissionCard
        key={ m.name }
        name={ m.name }
        year={ m.year }
        country={ m.country }
        destination={ m.destination }
      />
    ));
    return (
      <div data-testid="missions" className="container">
        <div className="mission-title">
          <Title headline="Missões" />
        </div>
        <div className="missions-container">
          {card}
        </div>
      </div>
    );
  }
}

export default Missions;
