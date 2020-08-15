import React from 'react';
import './br.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function br(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<br {...attributes} onClick={selectNode} />);
}

export default connect(null, {selectNode})(br);