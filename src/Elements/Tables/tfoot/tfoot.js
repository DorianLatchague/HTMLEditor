import React from 'react';
import './tfoot.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function tfoot(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<tfoot {...attributes} onClick={selectNode}>{children}</tfoot>);
}

export default connect(null, {selectNode})(tfoot);