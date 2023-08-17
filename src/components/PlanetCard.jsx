import React from 'react';
import PropTypes from 'prop-types';
import '../css/planetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-form">
        <div className="form-imgPlanet">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ planetName }
          />
        </div>
        <div className="form-namePlanet">
          <p data-testid="planet-name">{ planetName }</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
