import React from 'react';

import PropTypes from 'prop-types';

import { data } from "../data";
import { ProfileContext } from "./ProfileContext";

export const ProfileProvider = ({children}) => {
    return (
        <ProfileContext.Provider value={{...data}}>
            {children}
        </ProfileContext.Provider>
    )
}

ProfileProvider.propTypes = {
    children: PropTypes.node.isRequired,
}