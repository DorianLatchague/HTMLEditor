import React from 'react';
import './script.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function script(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<script {...attributes} onClick={selectNode}>{children}</script>);
}

export default connect(null, {selectNode})(script);