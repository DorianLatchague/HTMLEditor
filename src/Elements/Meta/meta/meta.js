import React from 'react';
import './meta.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function meta(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<meta {...attributes} onClick={selectNode}>{children}</meta>);
}

export default connect(null, {selectNode})(meta);