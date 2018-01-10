import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default ({ list = [] }) => (
  <div className="list">
    <h2 className="mdc-typography--title page-title">Anime Movies List</h2>
    <div className="table-actions"></div>
    <div className="table">
      <ul className="mdc-list mdc-list--two-line">
        {
          list.map(el => <Link key={el.id} to={`/${el.id}`} className="mdc-list-item">
            <span className="mdc-list-item__text">
              {el.title} ({el.release_date})
              <span className="mdc-list-item__secondary-text">Rating - {el.rt_score}%</span>
            </span>
          </Link>)
        }
      </ul>
    </div>
  </div>
);