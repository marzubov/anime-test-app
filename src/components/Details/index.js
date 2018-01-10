import React from 'react';
import './index.css';

export default ({ details, goBack }) => (
  <div className="details">
    <a className="details__back-button" onClick={goBack}>Go Back</a>
    <h2 className="mdc-typography--title page-title">{details.title} ({details.release_date})</h2>
    {/* <div className="details-actions"></div> */}
    <div className="details-inner">
      <h4>Director:</h4>
      <p>{details.director}</p>
      <h4>Producer:</h4>
      <p>{details.producer}</p>
      <h4>Description:</h4>
      <p>{details.description}</p>
    </div>
  </div>
);