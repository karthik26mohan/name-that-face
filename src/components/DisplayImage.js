import React from 'react';
import { connect } from 'react-redux';
import { fetchAllBreeds, getBreedImages } from '../actions';

class DisplayImage extends React.Component {

    componentDidMount() {
        this.props.getBreedImages(this.props.breedUrl);
    }

    render() {
        if(this.props.breedImages) {
            return (<img src={this.props.breedImages[0]}></img>);
        }else {
            return (<div>DisplayImage</div>);
        }        
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        breedUrl: ownProps.breedUrl,
        breedImages: state.dogState.breedImages
    }
}

export default connect(mapStateToProps, { getBreedImages })(DisplayImage);