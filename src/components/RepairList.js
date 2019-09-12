import React from 'react';
import { connect } from 'react-redux';
import RepairListItem from './RepairListItem';
import selectRepairs from '../selectors/repairs';






export const RepairList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Repairs</div>
            <div className="show-for-desktop">Repair</div>
            <div className="show-for-desktop">Mileage</div>
        </div>
        <div className="list-body">
            {
                props.repairs.length === 0 ? (
                    <div className="list-item list-item-message">
                        <span>No repairs to show</span>
                    </div>
                ) : (
                    props.repairs.map((repair) => (
                        <RepairListItem key={repair.id} {...repair} />
                    ))
                )
            }
        </div>
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        repairs: selectRepairs(state.repairs, state.filters)
    }
}

export default connect(mapStateToProps)(RepairList);