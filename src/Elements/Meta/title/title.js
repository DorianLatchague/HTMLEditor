import React from 'react';
import './title.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function title(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<title {...attributes} onClick={selectNode}>{children}</title>);
}

export default connect(null, {selectNode})(title);