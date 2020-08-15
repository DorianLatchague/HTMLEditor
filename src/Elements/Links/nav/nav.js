import React from 'react';
import './nav.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function nav(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<nav {...attributes} onClick={selectNode}>{children}</nav>);
}

export default connect(null, {selectNode})(nav);