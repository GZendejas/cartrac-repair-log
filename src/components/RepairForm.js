import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class RepairForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.repair ? props.repair.description : '',
            repairedOn: props.repair ? moment(props.repair.repairedOn) : moment(),
            mileage: props.repair ? props.repair.mileage.toString() : '',
            details: props.repair ? props.repair.details : '',
            calendarFocused: false,
            error: ''
        };

    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onDateChange = (repairedOn) => {
        if(repairedOn) {
            this.setState(() => ({ repairedOn }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onMileageChange = (e) => {
        const mileage = e.target.value
        if(!mileage || mileage.match(/^\d{1,}$/)) {
            this.setState(() => ({ mileage }))
        }
    }

    onDetailsChange = (e) => {
        const details = e.target.value;
        this.setState(() => ({ details }))
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.mileage) {
            this.setState(() => ({ error: 'Please provide description and mileage' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                repairedOn: this.state.repairedOn.valueOf(),
                mileage: parseFloat(this.state.mileage, 10),
                details: this.state.details
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <SingleDatePicker
                    date={this.state.repairedOn}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Mileage"
                    value={this.state.mileage}
                    onChange={this.onMileageChange}
                />
                <textarea
                    className="textarea"
                    placeholder="Add details about repair/maintenance"
                    value={this.state.details}
                    onChange={this.onDetailsChange}
                />
                <div>
                    <button className="button">Save Repair</button>
                </div>
               
            </form>
        )
    }

    
}

