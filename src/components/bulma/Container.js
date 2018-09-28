import React from 'react';

export const BmContainer = props => (
  <section className="section">
    <div className={`container ${props.options}`}>{props.children}</div>
  </section>
);
