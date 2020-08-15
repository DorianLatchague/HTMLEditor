import React from 'react';
import './article.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function article(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<article {...attributes} onClick={selectNode}>{children}</article>);
}

export default connect(null, {selectNode})(article);