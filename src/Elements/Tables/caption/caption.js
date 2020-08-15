import React from 'react';
import './caption.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function caption(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<caption {...attributes} onClick={selectNode}>{children}</caption>);
}

export default connect(null, {selectNode})(caption);