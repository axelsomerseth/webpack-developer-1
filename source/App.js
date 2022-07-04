import React from "react";
import MarkdownPlaceholder from "./data/Placeholder.js";
import Editor from "./components/Editor.js";
import Preview from "./components/Preview.js";
import "./assets/styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: MarkdownPlaceholder,
      isEditorExpanded: false,
      isPreviewExpanded: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.expandOrCollapseEditor = this.expandOrCollapseEditor.bind(this);
    this.expandOrCollapsePreview = this.expandOrCollapsePreview.bind(this);
  }
  handleInputChange(textValue) {
    this.setState(() => ({
      markdown: textValue,
    }));
  }
  expandOrCollapseEditor() {
    this.setState((state) => ({
      isEditorExpanded: !state.isEditorExpanded,
    }));
  }
  expandOrCollapsePreview() {
    this.setState((state) => ({
      isPreviewExpanded: !state.isPreviewExpanded,
    }));
  }
  render() {
    return (
      <main id="app">
        {!this.state.isPreviewExpanded && (
          <Editor
            markdown={this.state.markdown}
            handleInputChange={this.handleInputChange}
            isExpanded={this.state.isEditorExpanded}
            expandOrCollapse={this.expandOrCollapseEditor}
          />
        )}
        {!this.state.isEditorExpanded && (
          <Preview
            markdown={this.state.markdown}
            isExpanded={this.state.isPreviewExpanded}
            expandOrCollapse={this.expandOrCollapsePreview}
          />
        )}
      </main>
    );
  }
}

export default App;
