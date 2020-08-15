import React from 'react';
import './template.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function template(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<template {...attributes} onClick={selectNode}>{children}</template>);
}

export default connect(null, {selectNode})(template);