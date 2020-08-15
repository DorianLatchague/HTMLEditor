import React from 'react';
import './legend.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function legend(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<legend {...attributes} onClick={selectNode}>{children}</legend>);
}

export default connect(null, {selectNode})(legend);