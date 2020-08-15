import React from 'react';
import './picture.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function picture(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<picture {...attributes} onClick={selectNode}>{children}</picture>);
}

export default connect(null, {selectNode})(picture);