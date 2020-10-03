import React from 'react';
import { connect } from 'react-redux';
import { get4Options } from '../actions';

class DisplayOptions extends React.Component {

    componentDidMount() {
        this.props.get4Options(this.props.currentStep);
        console.log(this.props);
    }

    renderOptions() {
        if(this.props.fourOptions) {
            return this.props.fourOptions.map(option => {
                return (
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="example2"/>
                            <label>{option}</label>
                        </div>
                    </div>
                );
            })
        }
    }

    render() {
        return (
        <div className="ui form">
            <div className="grouped fields">
                {this.renderOptions()}
            </div>
        </div>   
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fourOptions: state.dogState.fourOptions,
        currentStep: state.quizStep
    }
}

export default connect(mapStateToProps, { get4Options })(DisplayOptions);