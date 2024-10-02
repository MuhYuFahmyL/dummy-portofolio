import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faStar, faLightbulb, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>My Portfolio</h2>
            <nav>
                <NavLink to="/" exact>
                    <FontAwesomeIcon icon={faHome} /> Home
                </NavLink>
                <NavLink to="/about">
                    <FontAwesomeIcon icon={faUser} /> About
                </NavLink>
                <NavLink to="/experience">
                    <FontAwesomeIcon icon={faBriefcase} /> Experience
                </NavLink>
                <NavLink to="/skills">
                    <FontAwesomeIcon icon={faStar} /> Skills
                </NavLink>
                <NavLink to="/interests">
                    <FontAwesomeIcon icon={faLightbulb} /> Interests
                </NavLink>
                <NavLink to="/awards">
                    <FontAwesomeIcon icon={faTrophy} /> Awards
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
