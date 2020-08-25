import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './TitleBar.scss';

const TitleBar = ({ backHome, children, className }) => (
  <div className={className}>
    <div className="container-fluid container af-title-bar__wrapper">
      {backHome && (
        <Link title="Retour à l'accueil" className="btn af-btn--circle" to="/">
          <i className="glyphicon glyphicon-home" />
        </Link>
      )}
      <h1 className="af-title-bar__title">{children}</h1>
    </div>
  </div>
);

TitleBar.defaultProps = {
  backHome: false,
  children: null,
  className: 'af-title-bar',
};

TitleBar.propTypes = {
  backHome: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TitleBar;
