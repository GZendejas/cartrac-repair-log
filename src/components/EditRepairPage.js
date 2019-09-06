import React from 'react';
import { connect } from 'react-redux';
import RepairForm from  './RepairForm';
import { startEditRepair, startRemoveRepair } from '../actions/repairs';


export class EditRepairPage extends React.Component {
    onSubmit = (repair) => {
        this.props.startEditRepair(this.props.repair.id, repair);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemoveRepair({ id: this.props.repair.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                EditRepairPage (placeholder);
                <RepairForm
                    repair={this.props.repair}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove Repair</button>
            </div>
        );
       
    }
}

const mapStateToProps = (state, props) => ({
    repair: state.repairs.find((repair) => repair.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditRepair: (id, repair) => dispatch(startEditRepair(id, repair)),
    startRemoveRepair: (data) => dispatch(startRemoveRepair(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditRepairPage);