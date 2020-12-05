import React from 'react';
import { connect } from 'react-redux';
import { fetchAllBreeds, getBreedImages, increaseQuizStep, increaseQuizScore, resetQuiz } from '../actions';
import DisplayImage from './DisplayImage';
import DisplayOptions from './DisplayOptions';
import Background from '../images/black-leaves.jpg';

class App extends React.Component {

    componentDidMount() {
        this.fetchAllBreeds();
    }

    fetchAllBreeds() {
        this.props.fetchAllBreeds();
    }
    
    renderImage() {
        if(Object.keys(this.props.tenBreeds).length>0) {
            const breedKeys = Object.keys(this.props.tenBreeds);
            let breedStr = breedKeys[this.props.quizStep];
            if(this.props.tenBreeds[breedStr].length>0){
                breedStr += '/' + this.props.tenBreeds[breedStr][0];
            }
            return (
                <DisplayImage breedUrl={breedStr}/>
            );
        }
        return 'blah';
    }

    displayOptions() {
        if(this.props.tenBreeds) {
            return (
                <DisplayOptions />
            );
        }
        return 'blah';
    }

    displayQuiz() {
        if(this.props.tenBreeds && (this.props.quizStep !== Object.keys(this.props.tenBreeds).length)) {
        // if(this.props.tenBreeds && (this.props.quizStep !== 3)) {
        // if(false) {
            return (
                <div className="column">
                    <h3 className="ui header green">{this.props.quizStep} / { Object.keys(this.props.tenBreeds).length }</h3>
                    <div className="ui people shape">
                        <div className="sides">
                            <div className="side active">
                                <div className="ui card">
                                    <div className="image">
                                        {this.renderImage()}
                                    </div>
                                    <div className="content">
                                        <div className="description">
                                            {this.displayOptions()}                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="ui button blue massive" onClick={e => this.onNextButtonClick()} style={{marginTop: 20 + 'px'}}>Next</button>
                    </div>
                </div>
            );
        } else if(this.props.quizScore) { 
            return (
                <div className="column">
                    <div className="ui huge header green">
                        Your score is: {this.props.quizScore} / { Object.keys(this.props.tenBreeds).length }
                    </div>
                    <button className="massive ui button blue" onClick={e=>this.onStartOverButtonClick()}>Start Over</button>
                </div>
            );
        }
    }

    onNextButtonClick() {
        if(this.props.userSelectedBreed === this.props.correctBreed) {
            this.props.increaseQuizScore();
        }
        this.props.increaseQuizStep();
    }

    onStartOverButtonClick() {
        this.props.resetQuiz();
        this.fetchAllBreeds();
    }

    render() {
        return (
            <div style={{ height: 100 + 'vh', backgroundImage: `url(${Background})`}}>
                <h2 className="ui header center aligned green" style={{paddingTop: 20 + 'px'}}>Dog Breed Quiz</h2>
                <div className="ui middle aligned center aligned grid" style={{ height: 90 + 'vh'}}>
                    { this.displayQuiz() }
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        tenBreeds: state.dogState.tenBreeds,
        breedImages: [],
        quizStep: state.quiz.quizStep,
        quizScore: state.quiz.score,
        correctBreed: state.dogState.breed,
        userSelectedBreed: state.dogState.userSelectedBreed
        // images: this.state.
    }
}

export default connect(mapStateToProps, { fetchAllBreeds, getBreedImages, increaseQuizStep, increaseQuizScore, resetQuiz })(App);