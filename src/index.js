import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

export default class Dropshift extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  state = {
    isOpen: false
  };

  handleDocumentClick = e => {
    if (e.target !== this.menuRef) {
      this.toggleMenu();
    }
  };

  handleFocus = e => {
    if (e.target instanceof Element && !this.menuRef.contains(e.target)) {
      this.toggleMenu();
    }
  };

  handleBlur = () => {
    setTimeout(() => {
      if (document.activeElement === document.body) {
        this.toggleMenu();
      }
    }, 0);
  };

  toggleMenu = () => {
    this.setState(
      state => ({ isOpen: !state.isOpen }),
      () => {
        if (this.state.isOpen) {
          document.addEventListener("click", this.handleDocumentClick);
          window.addEventListener("focus", this.handleFocus, true);
          window.addEventListener("blur", this.handleBlur, false);
        } else {
          document.removeEventListener("click", this.handleDocumentClick);
          window.removeEventListener("focus", this.handleFocus, true);
          window.removeEventListener("blur", this.handleBlur, false);
        }
      }
    );
  };

  getToggleButtonProps = () => ({
    onClick: () => {
      this.toggleMenu();
    }
  });

  getMenuProps = () => ({
    ref: elem => (this.menuRef = elem),
    ["aria-expanded"]: this.state.isOpen,
    ["role"]: "navigation"
  });

  render() {
    const { children } = this.props;
    const { getToggleButtonProps, getMenuProps } = this;

    return (
      <Fragment>
        {children({
          ...this.state,
          getToggleButtonProps,
          getMenuProps
        })}
      </Fragment>
    );
  }
}
