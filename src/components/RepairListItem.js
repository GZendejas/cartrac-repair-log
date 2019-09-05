import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



const RepairListItem = ({ id, description, repairedOn, mileage}) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(repairedOn).format('MMMM, Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(mileage).format('0,0')} miles</h3>
    </Link>
);

export default RepairListItem;