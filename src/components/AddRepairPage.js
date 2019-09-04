import React from 'react';
import { connect } from 'react-redux';
import RepairForm from './RepairForm';
import { startAddRepair } from '../actions/repairs';





export class AddRepairPage extends React.Component {
    onSubmit = (repair) => {
        this.props.startAddRepair(repair);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                AddRepairPage (placeholder)
                <RepairForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    };
}



const mapDispatchToProps= (dispatch) => ({
    startAddRepair: (repair) => dispatch(startAddRepair(repair))
    
});

export default connect(undefined, mapDispatchToProps)(AddRepairPage);

