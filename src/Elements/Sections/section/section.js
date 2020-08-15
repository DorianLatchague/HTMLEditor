import React from 'react';
import './section.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function section(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<section {...attributes} onClick={selectNode}>{children}</section>);
}

export default connect(null, {selectNode})(section);