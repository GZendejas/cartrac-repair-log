import React from 'react';
import { Link } from 'react-router-dom';




export const DashboardHeader = (props) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Your List of Repairs</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create" >Add Repair</Link>
                </div>
            </div>
        </div>
    );
};


