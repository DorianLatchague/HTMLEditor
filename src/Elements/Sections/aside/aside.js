import React from 'react';
import './aside.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function aside(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<aside {...attributes} onClick={selectNode}>{children}</aside>);
}

export default connect(null, {selectNode})(aside);