import React from 'react';
import { connect } from 'react-redux';
import { fetchAllBreeds, getBreedImages } from '../actions';
import DisplayImage from './DisplayImage';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchAllBreeds();
    }

    renderImages(images) {
        return (
            <img src={images[0]}></img>
        )
    }
    
    renderImage() {
        if(this.props.tenBreeds) {
            console.log(this.props.tenBreeds);
            const breedKeys = Object.keys(this.props.tenBreeds);
            const breedObj = this.props.tenBreeds[breedKeys[0]];
            let breedStr = breedKeys[0];
            if(this.props.tenBreeds[breedKeys[0]].length>0){
                breedStr += '/' + this.props.tenBreeds[breedKeys[0]][0];
            }
            return (
                <DisplayImage breedUrl={breedStr}/>
            );
        }
        return 'blah';
    }

    render() {
        return (
            <div className="ui people shape">
                <div className="sides">
                    <div className="side active">
                        <div className="ui card">
                            <div className="image">
                                {this.renderImage()}
                            </div>
                            <div className="content">
                                <div className="header">Steve Jobes</div>
                                <div className="meta">
                                    <a>Acquaintances</a>
                                </div>
                                <div className="description">
                                    Steve Jobes is a fictional character designed to resemble someone familiar to readers.
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    Joined in 2014
                                </span>
                                <span>
                                    <i className="user icon"></i>
                                    151 Friends
                                </span>
                            </div>
                        </div>
                        </div>
                        <div className="side">
                        <div className="ui card">
                            <div className="image">
                                <img src="/images/avatar/large/stevie.jpg" />
                            </div>
                            <div className="content">
                                <a className="header">Stevie Feliciano</a>
                                <div className="meta">
                                    <span className="date">Joined in 2014</span>
                                </div>
                                <div className="description">
                                    Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.
                                </div>
                            </div>
                            <div className="extra content">
                                <a>
                                    <i className="user icon"></i>
                                    22 Friends
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        tenBreeds: state.dogState.tenBreeds,
        breedImages: []
        // images: this.state.
    }
}

export default connect(mapStateToProps, { fetchAllBreeds, getBreedImages })(App);