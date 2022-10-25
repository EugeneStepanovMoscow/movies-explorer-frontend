import React from 'react';

function SectionTitle({
  title,
  })
  {
    return (
      <div className="section-title">
        <h2 className="section-title__text" id={title}>{title}</h2>
      </div>
    )
  }
  export default SectionTitle;
