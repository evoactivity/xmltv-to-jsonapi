# 🚨🚨 Archived. Please see if [@iptv/xmltv](https://github.com/ektotv/xmltv) can fulfil your needs, you will need to write a serializer to output JSON:API structure.

# XMLTV to JSON:API [![Build Status](https://travis-ci.com/evoactivity/xmltv-to-jsonapi.svg?branch=master)](https://travis-ci.com/evoactivity/xmltv-to-jsonapi) ![Code Climate issues](https://img.shields.io/codeclimate/issues/evoactivity/xmltv-to-jsonapi?label=CodeClimate)

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
