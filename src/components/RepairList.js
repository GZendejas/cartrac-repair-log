import React from 'react';
import { connect } from 'react-redux';
import RepairListItem from './RepairListItem';






export const RepairList = (props) => (
    <div>
        RepairList (placeholder)
        <RepairListItem />
        <RepairListItem />
    </div>
);

const mapStateToProps = (state) => {
    return {
        repairs: state.repairs
    }
}

export default connect(mapStateToProps)(RepairList);