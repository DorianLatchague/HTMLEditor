import React from 'react';
import './ruby.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function ruby(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<ruby {...attributes} onClick={selectNode}>{children}</ruby>);
}

export default connect(null, {selectNode})(ruby);