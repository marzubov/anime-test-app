import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDetails } from '../../actions';
import Details from '../../components/Details';

class DetailsContainer extends Component {
  componentWillMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  goBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      <Details details={this.props.details} goBack={(e) => this.goBack(e)}/>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetails: id => {
      return dispatch(getDetails(id));
    }
  };
};

const mapStateToProps = (state) => ({
  details: state.movie.details
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsContainer));
