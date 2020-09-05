# merge-pdf-buffers

This package merges an array of PDF buffers into one single PDF buffer

## Installation
```
npm i merge-pdf-buffers
```

## Example

ES5:
```
const { merge } = require('merge-pdf-buffers');

const merged = await merge([buff1, buff2, ...]);
```

ES6:
```
import { merge } = require('merge-pdf-buffers');

const merged = await merge([buff1, buff2, ...]);
```