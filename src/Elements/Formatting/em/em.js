import React from 'react';
import './em.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function em(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<em {...attributes} onClick={selectNode}>{children}</em>);
}

export default connect(null, {selectNode})(em);