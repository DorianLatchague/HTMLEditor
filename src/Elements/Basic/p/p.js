import React from 'react';
import './p.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function p(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<p {...attributes} onClick={selectNode}>{children}</p>);
}

export default connect(null, {selectNode})(p);