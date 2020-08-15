import React from 'react';
import './main.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function main(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<main {...attributes} onClick={selectNode}>{children}</main>);
}

export default connect(null, {selectNode})(main);