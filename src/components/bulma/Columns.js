import React from 'react';

export const Columns = props => (
  <div className={`columns ${props.options}`}>{props.children}</div>
);

export const Column = props => (
  <div className={`column ${props.options}`}>{props.children}</div>
);
