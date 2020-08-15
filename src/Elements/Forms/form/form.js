import React from 'react';
import './form.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function form(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<form {...attributes} onClick={selectNode}>{children}</form>);
}

export default connect(null, {selectNode})(form);