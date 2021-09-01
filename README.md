# react-sse
[![npm version](https://img.shields.io/npm/v/@sse-lib/react-sse?style=for-the-badge)](https://www.npmjs.com/package/@sse-lib/react-sse)

`react-sse` is a library for interacting with
[Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)
from your [react](https://reactjs.org/) application.

Learn more about SSE on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)

## Installation

Use `npm`

```bash
npm i @sse-lib/react-sse
```

or `yarn`

```bash
yarn add @sse-lib/react-sse
```
## Usage
Wrap your application in a provider
```javascript
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { EventsProvider } from "@sse-lib/react-sse"

ReactDOM.render(
  <EventsProvider url="https://example.com/sse">
    <App />
  </EventsProvider>,
  document.getElementById("root")
)
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
