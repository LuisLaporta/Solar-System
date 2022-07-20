import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const card = planets.map((p) => (
      <PlanetCard key={ p.name } planetName={ p.name } planetImage={ p.image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { card }
      </div>
    );
  }
}

export default SolarSystem;
