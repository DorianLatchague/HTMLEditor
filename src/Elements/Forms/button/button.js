import React from 'react';
import './button.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function button(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<button {...attributes} onClick={selectNode}>{children}</button>);
}

export default connect(null, {selectNode})(button);