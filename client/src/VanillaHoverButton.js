import React, { Component } from "react";
import "./VanillaHoverButton.css";
class VanillaHoverButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="vanilla_hover_button">{this.props.link}</button>
      </div>
    );
  }
}

export default VanillaHoverButton;
