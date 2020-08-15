import React from 'react';
import './tbody.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function tbody(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<tbody {...attributes} onClick={selectNode}>{children}</tbody>);
}

export default connect(null, {selectNode})(tbody);