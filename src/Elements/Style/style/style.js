import React from 'react';
import './style.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function style(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<style {...attributes} onClick={selectNode}>{children}</style>);
}

export default connect(null, {selectNode})(style);