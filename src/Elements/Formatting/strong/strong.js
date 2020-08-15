import React from 'react';
import './strong.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function strong(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<strong {...attributes} onClick={selectNode}>{children}</strong>);
}

export default connect(null, {selectNode})(strong);