import React, { Fragment, Component } from "react";

import Dropshift from "dropshift";

export default class App extends Component {
  render() {
    return (
      <div>
        <Dropshift>
          {({ getToggleButtonProps, getMenuProps, isOpen }) => (
            <Fragment>
              <button {...getToggleButtonProps()}>Menu</button>
              {isOpen && (
                <div
                  {...getMenuProps()}
                  style={{ background: "red", padding: "4%" }}
                >
                  <a href="https://www.google.com">some text</a>
                  <a href="https://www.google.com">some text</a>
                </div>
              )}
            </Fragment>
          )}
        </Dropshift>
        <a href="">dsfsdfsD</a>
      </div>
    );
  }
}
