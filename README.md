# HumanizeDuration.ts [![Build Status](https://travis-ci.org/Nightapes/HumanizeDuration.ts.svg?branch=master)](https://travis-ci.org/Nightapes/HumanizeDuration.ts)
361000 becomes "6 minutes, 1 second"

I have the time in milliseconds and I want it to become "30 minutes" or "3 days, 1 hour". Enter Humanize Duration!

## Origin


This is the typescript version of the javascript libary "HumanizeDuration.js"
The thank goes to: Evan Hahn  ([Github](https://github.com/EvanHahn/HumanizeDuration.js))


## Installation

```
npm install humanize-duration-ts --save
```

## Basic usage

Setup instance:

```js
  import { HumanizeDurationLanguage, HumanizeDuration } from 'humanize-duration-ts';
```

Usage: 

```js
  langService: HumanizeDurationLanguage = new HumanizeDurationLanguage();
  humanizer: HumanizeDuration = new HumanizeDuration(this.langService);
  this.humanizer.humanize(12345678);
```


## Supported languages

```js
  const service = new HumanizeDuration(new HumanizeDurationLanguage());
  console.log(service.getSupportedLanguages());

  // LOG: ['ar', 'bg', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fa', 'fi',
  //       'fo', 'fr', 'hr', 'hu', 'id', 'is', 'it', 'ja', 'ko', 'lo', 'lt', 'lv', 
  //       'ms', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'uk', 'ur', 'sk', 'sv', 'tr', 
  //       'th', 'vi', 'zh_CN', 'zh_TW']
```
