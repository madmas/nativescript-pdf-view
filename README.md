[![Build Status](https://travis-ci.org/madmas/nativescript-pdf-view.svg?branch=master)](https://travis-ci.org/madmas/nativescript-pdf-view)

[![npm version](https://badge.fury.io/js/nativescript-pdf-view.svg)](https://badge.fury.io/js/nativescript-pdf-view)

# NativeScript PDFView

> _Remark_ [This repository](https://github.com/madmas/nativescript-pdf-view) is a fork of [the original by Merott](https://github.com/Merott/nativescript-pdf-view) that will be used with his consent to provide further maintenance of this NativeScript plugin.

A minimal PDF view implementation that does only one thing, and that is to display PDF files in the simplest way possible. It conveniently uses the iOS `WKWebView`, and for Android it uses [`AndroidPdfViewer`](https://github.com/barteksc/AndroidPdfViewer).

This plugin does the bare minimum required to render the PDF, no configuration options, and no error handling have been built yet. I welcome all Pull Requests!

My aim is to keep the features consistent across iOS and Android.

## Installation

```
ns plugin add nativescript-pdf-view
```

## Usage

### Vanilla NativeScript

```xml
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:pdf="nativescript-pdf-view"
  loaded="pageLoaded">
  <pdf:PDFView src="{{ pdfUrl }}" load="{{ onLoad }}" />
</Page>
```

### Angular NativeScript

Import in module

```ts
import { PDFViewModule } from 'nativescript-pdf-view/angular';
```

```html
<PDFView [src]="src" (load)="onLoad()"></PDFView>
```

## Demo

Check out the [demo](./demo) folder for a demo application using this plugin. You can run the demo by executing `npm run demo.ios` and `npm run demo.android` from the root directory of the project.

## Samples

There are sample applications avalable:

- _Plain TypeScript_: see [demo/](https://github.com/madmas/nativescript-pdf-view/tree/master/demo) folder in this repository
- _NativeScript+Angular_: [nativescript-pdf-view-angular-sample](https://github.com/madmas/nativescript-pdf-view-angular-sample) repository
- _NativeScript+VueJs_: [nativescript-pdf-view-vue-sample](https://github.com/madmas/nativescript-pdf-view-vue-sample) repository


## Development

This repo has been migrated to an ``nx workspace`` that profits from the `@nativescript/plugin-tools` schematics plugin.

NX has an interactive menue you can start with `npm run start` (after `npm install` ).
