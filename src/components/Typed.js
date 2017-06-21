import React, { Component } from "react";
import { init } from "ityped";

class Typed extends Component {
  componentDidMount() {
    const data = init(this.text, {
      strings: ["animators", "storytellers", "motion designers"],
      typeSpeed: 120,
      backSpeed: 90,
      startDelay: 400,
      backDelay: 8000,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

  render() {
    return (
      <span ref={t => this.text = t} />
    );
  }
}

export default Typed;
