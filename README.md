# XMLTV to JSON:API [![Build Status](https://travis-ci.com/evoactivity/xmltv-to-jsonapi.svg?branch=master)](https://travis-ci.com/evoactivity/xmltv-to-jsonapi)

> Make use of JSON:API's relationship model to work with XMLTV data

## Install

```
$ yarn add xmltv-to-jsonapi
```

## Usage

```js
const fs = require('fs');
const xmltvToJsonapi = require('xmltv-to-jsonapi');

const xmltvData = fs.readFileSync('examples/epg.xml', 'utf-8');

(async () => {
  const result = await xmltvToJsonapi(xmltvData);

  // do something with your json
})();
```

## API

### xmltvToJsonapi(input)

#### input

Type: `string | buffer`

Takes in the XMLTV data as a string or file buffer
