import React from 'react';
import './progress.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function progress(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<progress {...attributes} onClick={selectNode}>{children}</progress>);
}

export default connect(null, {selectNode})(progress);