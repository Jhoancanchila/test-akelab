import React, { Fragment } from 'react';

function Overlay({ overlay, onClick }) {
  // renderizado del componente:
  if (overlay) {
    return (
      <Fragment>
        <div className="Overlay__select" onClick={onClick}></div>
      </Fragment>
    );
  }

  return null;
}

export default Overlay;
