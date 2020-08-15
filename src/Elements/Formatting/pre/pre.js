import React from 'react';
import './pre.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function pre(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<pre {...attributes} onClick={selectNode}>{children}</pre>);
}

export default connect(null, {selectNode})(pre);