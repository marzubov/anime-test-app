import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getList } from '../../actions';
import List from '../../components/List';

class ListContainer extends Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    return (
      <List list={this.props.list}/>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: () => {
      return dispatch(getList());
    }
  };
};

const mapStateToProps = (state) => ({
  list: state.movie.list
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer));
