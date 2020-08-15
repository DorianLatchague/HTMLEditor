import React from 'react';
import './dt.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function dt(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<dt {...attributes} onClick={selectNode}>{children}</dt>);
}

export default connect(null, {selectNode})(dt);