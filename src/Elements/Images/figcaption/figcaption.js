import React from 'react';
import './figcaption.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function figcaption(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<figcaption {...attributes} onClick={selectNode}>{children}</figcaption>);
}

export default connect(null, {selectNode})(figcaption);