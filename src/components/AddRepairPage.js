import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">ADD REPAIR</h1>
                    </div>
                </div>
                <div className="content-container">
                    <RepairForm
                        onSubmit={this.onSubmit}
                    />
                    <Link className="link-to-dashboard" to='/dashboard'><p>Back to dashboard</p></Link>
                </div>
            </div>
            
        );
    };
}



const mapDispatchToProps= (dispatch) => ({
    startAddRepair: (repair) => dispatch(startAddRepair(repair))
    
});

export default connect(undefined, mapDispatchToProps)(AddRepairPage);

