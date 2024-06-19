# Modson

Modson is a lightweight npm package that simplifies the creation of modals in web applications. It allows you to dynamically create modals with customizable titles, themes (light and dark), and button sections. This package aims to streamline the process of creating modals without the need to write repetitive code.

## Installation

You can install Modson via npm:

```bash
npm install modson


## To use Modson in your project, follow these steps:

Import Modson in your JavaScript file:

import Modson from 'modson';
Create an instance of Modson with configuration options:

const modal = new Modson({
  title: 'Custom Modal Title',
  theme: 'dark-theme',
  buttons: [
    { label: 'Close', onClick: () => modal.hideModal() },
    { label: 'Save', onClick: () => console.log('Save button clicked') }
  ]
});

Acknowledgements
Modson is inspired by the need to simplify modal creation in web applications.

