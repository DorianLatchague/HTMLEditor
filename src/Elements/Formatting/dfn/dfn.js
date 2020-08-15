import React from 'react';
import './dfn.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function dfn(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<dfn {...attributes} onClick={selectNode}>{children}</dfn>);
}

export default connect(null, {selectNode})(dfn);