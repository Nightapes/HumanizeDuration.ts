# HumanizeDuration.ts [![Build Status](https://travis-ci.org/Nightapes/HumanizeDuration.ts.svg?branch=master)](https://travis-ci.org/Nightapes/HumanizeDuration.ts)
361000 becomes "6 minutes, 1 second"

I have the time in milliseconds and I want it to become "30 minutes" or "3 days, 1 hour". Enter Humanize Duration!

## Origin


This is the typescript version of the javascript libary "HumanizeDuration.js"
The thank goes to: Evan Hahn  ([Github](https://github.com/EvanHahn/HumanizeDuration.js))


## Installation

Via npm install (coming soon)

```
npm install humanize-duration-ts
```

## Basic usage

Setup instance:

```
  langService: HumanizeDurationLanguage = new HumanizeDurationLanguage();
  humanizer: HumanizeDuration = new HumanizeDuration(this.langService);
```

Usage: 

```
this.humanizer.humanize(12345678);
```



