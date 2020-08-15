import React from 'react';
import './fieldset.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function fieldset(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<fieldset {...attributes} onClick={selectNode}>{children}</fieldset>);
}

export default connect(null, {selectNode})(fieldset);