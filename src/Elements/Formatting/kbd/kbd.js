import React from 'react';
import './kbd.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function kbd(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<kbd {...attributes} onClick={selectNode}>{children}</kbd>);
}

export default connect(null, {selectNode})(kbd);