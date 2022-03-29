import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownLeftAndUpRightToCenter,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, isExpanded, onChange } = this.props;
    const iconClasses = isExpanded
      ? faDownLeftAndUpRightToCenter
      : faUpRightAndDownLeftFromCenter;
    return (
      <header className="toolbar">
        <FontAwesomeIcon icon={faFreeCodeCamp} />
        <h3>{name}</h3>
        <button className="btn-expand" onClick={onChange}>
          <FontAwesomeIcon icon={iconClasses} />
        </button>
      </header>
    );
  }
}

export default Toolbar;
