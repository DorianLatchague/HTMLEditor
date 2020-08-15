import React from 'react';
import './option.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function option(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<option {...attributes} onClick={selectNode}>{children}</option>);
}

export default connect(null, {selectNode})(option);