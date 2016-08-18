# JavaScript module system

Specify how our code depends on external code

Specify how to prevent scope

## AMD (asynchronous module definition)

## CommonJS

Used by NodeJs `require('foo')` to load modules and `module.exports` to expose functionality

## RequireJS

Designed to pick up the limitations between the CommonJS and NodeJS module definition and make a module framework that is usable inside a browser.

`require` takes an array of dependencies and a callback

`define` takes an array of dependencies and exposes an API

## Harmony

