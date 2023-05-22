import React from 'react';
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return (
        <section>
        <h2>{title}</h2> 
        {children}
      </section>
    )  
  }

  Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default Section;