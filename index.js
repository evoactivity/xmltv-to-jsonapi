'use strict';
const transform = require('camaro');

const JsonApiTemplate = {
  data: [
    '//programme',
    {
      type: '#xmltv-programme',
      id: "translate(string-join(@channel|@start|@stop, '-'), ' ', '-')",
      attributes: {
        start: '@start',
        stop: '@stop',
        title: [
          'title',
          {
            lang: '@lang',
            value: '.'
          }
        ],
        desc: [
          'desc',
          {
            lang: '@lang',
            value: '.'
          }
        ],
        categories: [
          'category',
          {
            lang: '@lang',
            value: '.'
          }
        ],
        date: ['date', '.'],
        episodeNum: [
          'episode-num',
          {
            system: '@system',
            value: '.'
          }
        ],
        previouslyShown: ['previously-shown', {start: '@start'}],
        subtitles: [
          'subtitles',
          {
            type: '@type'
          }
        ],
        icons: ['icon', '@src'],
        rating: [
          'rating',
          {
            system: '@system',
            value: 'value'
          }
        ],
        credits: [
          'credits/*',
          {
            role: 'name(.)',
            value: '.'
          }
        ],
        audio: ['audio/*', '.']
      },
      relationships: {
        channel: {
          data: {
            type: '#xmltv-channel',
            id: '@channel'
          }
        }
      }
    }
  ],
  included: [
    '//channel',
    {
      type: '#xmltv-channel',
      id: '@id',
      attributes: {
        name: [
          'display-name',
          {
            lang: '@lang',
            value: '.'
          }
        ],
        icons: ['icon', '@src'],
        url: ['url', '.']
      }
    }
  ]
};

module.exports = async (xmltvData) => {
  const result = await transform(xmltvData, JsonApiTemplate);
  const jsonApiResult = JSON.stringify(result);

  return jsonApiResult;
};
