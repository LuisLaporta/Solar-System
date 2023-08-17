import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../css/solarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const card = planets.map((p) => (
      <PlanetCard key={ p.name } planetName={ p.name } planetImage={ p.image } />
    ));
    return (
      <div data-testid="solar-system" className="solar-system">
        <div className="form">
          <Title headline="Planetas" />
        </div>
        <div className="form spacing">
          { card }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
