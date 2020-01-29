# Dropshift

Inspired by Downshift, this library intends to provide solutions for people wanting to add accessible navigation dropdowns to their apps.

## Why not Downshift?
Downshift works primarily as a combobox, that is to say, a text input and a select input combined. As such it, at the very least, expects a list of items, from which one can 'select' an item. These behaviours collide with user expectations when dealing with a navigation dropdown. Link items should focus when tabbing through the page, unlike Downshift, which uses arrow-keys for item to item navigation. This library is meant for non-selectable items (actionable items) and does not intend to support complexities like nested dropdown lists.


[![NPM](https://img.shields.io/npm/v/dropshift.svg)](https://www.npmjs.com/package/dropshift) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dropshift
```

## Usage

```jsx
import React, { Component, Fragment } from 'react'

import Dropshift from 'dropshift'

class Example extends Component {
  render () {
    return (
      <Dropshift>
        {
          ({getToggleButtonProps, getMenuProps, isOpen}) => (
            <Fragment>
              <button {...getToggleButtonProps()}>
                Menu
              </button>
              <nav {...getMenuProps()}>
              //...links here
              </nav>
            </Fragment>
          )
        }
      </Dropshift>
    )
  }
}
```

## License

MIT © [vidjuheffex](https://github.com/vidjuheffex)
