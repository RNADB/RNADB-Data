#!/usr/bin/env node
/*!
 * -----------
 * RNADB®-Data
 * -----------
 * Data of RNADB — A manually curated dedicated RNA genes database.
 * _____________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * _____________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * _____________________________________________________________________________
 *
 * @date      : 16-Dec-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-cli
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * _____________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "RNADB®-Data".
 * _____________________________________________________________________________
 */


// global __dirname: true
// global require: true

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

// Invoking strict mode.
"use strict";

// To load required Node module.
// -----------------------------
var os         = require('os');
var fs         = require('fs');

// To load required NPM modules.
// -----------------------------
var chalk      = require('chalk');
var glob       = require('glob');
