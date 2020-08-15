import React from 'react';
import './map.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function map(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<map {...attributes} onClick={selectNode}>{children}</map>);
}

export default connect(null, {selectNode})(map);