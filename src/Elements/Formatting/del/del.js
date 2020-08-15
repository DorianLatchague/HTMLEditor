import React from 'react';
import './del.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function del(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<del {...attributes} onClick={selectNode}>{children}</del>);
}

export default connect(null, {selectNode})(del);