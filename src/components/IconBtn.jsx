import React from 'react';
import PropTypes from 'prop-types';

import './IconBtn.scss';

export const IconBtn = ({ className, icon, onClick }) => {
    return (
        <button
            className={`iconBtn ${className ? className : ''}`}
            style={{ backgroundImage: `url(${icon})` }}
            onClick={onClick}
        ></button>
    );
};

IconBtn.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
