import React from "react";
import Prism from "prismjs";
import { marked } from "marked";
import Toolbar from "./Toolbar.js";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpandOrCollapse = this.handleExpandOrCollapse.bind(this);
  }
  handleExpandOrCollapse(event) {
    this.props.expandOrCollapse();
  }
  render() {
    const { markdown, isExpanded } = this.props;
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) =>
      `<a target="_blank" href="${href}">${text}</a>`;
    const markedOptions = {
      renderer: renderer,
      highlight: (code) =>
        Prism.highlight(code, Prism.languages.javascript, "javascript"),
      breaks: true,
    };
    const parsedMarkdown = marked.parse(markdown, markedOptions);
    const createMarkup = (markup) => ({ __html: markup });
    const maximized = isExpanded ? "expanded" : "collapsed";
    return (
      <section id="preview-wrapper">
        <Toolbar
          name={"Previewer"}
          isExpanded={isExpanded}
          onChange={this.handleExpandOrCollapse}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={createMarkup(parsedMarkdown)}
          className={maximized}
        ></div>
      </section>
    );
  }
}

export default Preview;
