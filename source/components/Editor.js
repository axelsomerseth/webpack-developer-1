import React from "react";
import Toolbar from "./Toolbar.js";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleExpandOrCollapse = this.handleExpandOrCollapse.bind(this);
  }
  handleTextChange(event) {
    this.props.handleInputChange(event.target.value);
  }
  handleExpandOrCollapse(event) {
    this.props.expandOrCollapse();
  }
  render() {
    const { isExpanded, markdown } = this.props;
    const maximized = isExpanded ? "expanded" : "collapsed";
    return (
      <section id="editor-wrapper">
        <Toolbar
          name={"Editor"}
          isExpanded={isExpanded}
          onChange={this.handleExpandOrCollapse}
        />
        <textarea
          id="editor"
          onChange={this.handleTextChange}
          className={maximized}
          type="text"
          value={markdown}
        />
      </section>
    );
  }
}

export default Editor;
