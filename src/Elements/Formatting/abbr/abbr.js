import React from 'react';
import './abbr.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function abbr(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<abbr {...attributes} onClick={selectNode}>{children}</abbr>);
}

export default connect(null, {selectNode})(abbr);