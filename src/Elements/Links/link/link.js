import React from 'react';
import './link.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function link(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<link {...attributes} onClick={selectNode} />);
}

export default connect(null, {selectNode})(link);