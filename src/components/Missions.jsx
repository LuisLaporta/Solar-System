import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

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
      <div data-testid="missions">
        <Title headline="Missões" />
        {card}
      </div>
    );
  }
}

export default Missions;
