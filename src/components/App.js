import React from 'react';
import { connect } from 'react-redux';
import { fetchAllBreeds, getBreedImages } from '../actions';
import DisplayImage from './DisplayImage';
import DisplayOptions from './DisplayOptions';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchAllBreeds();
    }
    
    renderImage() {
        if(this.props.tenBreeds) {
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

    render() {
        return (
            <div>
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
                    <button class="ui button">Follow</button>
                    <button class="ui button">Follow</button>
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
        quizStep: state.quizStep
        // images: this.state.
    }
}

export default connect(mapStateToProps, { fetchAllBreeds, getBreedImages })(App);