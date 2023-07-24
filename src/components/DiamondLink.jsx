import React from 'react';
import './DiamondLink.css';

function DiamondLink({ to, active }) {
  return (
    <div className={`diamond-link ${active ? 'active' : ''}`}>
      <a href={to}></a>
    </div>
  );
}

export default DiamondLink;


