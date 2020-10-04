import React from 'react';
import { connect } from 'react-redux';
import { get4Options, setUserSelectedBreed } from '../actions';

class DisplayOptions extends React.Component {

    componentDidMount() {
        this.props.get4Options(this.props.currentStep);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currentStep !== this.props.currentStep) {
            this.props.get4Options(this.props.currentStep);
        }
    }

    onSelection(userSelection) {
        this.props.setUserSelectedBreed(userSelection);
    }

    renderOptions() {
        if(this.props.fourOptions) {
            return this.props.fourOptions.map(option => {
                return (
                    <div className="field" key={option}>
                        <div className="ui radio checkbox">
                            <input type="radio" id={option} value={option} name="example2" onChange={e=>this.onSelection(e.target.value)}/>
                            <label for={option}>{option}</label>
                        </div>
                    </div>
                );
            })
        }
    }

    render() {
        return (
        <div className="ui form">
            <div className="grouped fields ui left aligned">
                {this.renderOptions()}
            </div>
        </div>   
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fourOptions: state.dogState.fourOptions,
        currentStep: state.quiz.quizStep,
        correctBreed: state.dogState.breed
    }
}

export default connect(mapStateToProps, { get4Options, setUserSelectedBreed })(DisplayOptions);