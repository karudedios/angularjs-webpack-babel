// require('babel-polyfill/browser.js');

require('bootstrap/dist/css/bootstrap.min.css');
require("bootstrap-daterangepicker/daterangepicker.css");

// This is already being imported per a different gulp process, we should consider consolidating these
// require('@fortawesome/fontawesome-free/css/font-awesome.min.css');

// require('./app/css/basscss-custom.css');
// require('./app/css/certified-payroll.css');
// require('./app/css/compliance.css');
// require('./app/css/dispatch.css');
// require('./app/css/job-truck-table.css');
// require('./app/css/responsive.css');
// require('./app/css/style.css');
// require('./app/css/styles.css');

// require("animate.css/animate.min.css");
// require("basscss/css/basscss.min.css")

globalThis.jQuery = globalThis.$ = require("jquery");
globalThis._ = require("lodash");
globalThis.moment = require("moment");
globalThis.Pusher = require("pusher-js");
globalThis.Slick = require("slick-carousel");
globalThis.toastr = require("toastr");

// require("launchdarkly-js-sdk-common");
globalThis.LDClient = require("launchdarkly-js-client-sdk");

require("angular");
require("angular-animate");
require("angular-bootstrap-checkbox");
require("angular-chart.js");
require("angular-cookies");
require("angular-daterangepicker");
require("angular-digest-hud");
require("angular-file-saver");
require("angular-filter");
require("angular-mocks");
require("angular-multi-step-form");
require("angular-resource");
require("angular-sanitize");
require("angular-slick-carousel");
require("angular-touch");
require("angular-ui-bootstrap");
require("angular-ui-bootstrap-datetimepicker");
require("angular-ui-router");
require("angular-vs-repeat");
require("angular-zendesk-widget");
require("pusher-angular");

require("blob-polyfill");
require("multiple-date-picker");
require("bootstrap");
require("bootstrap-daterangepicker");
require("bootstrap-switch");
require("file-saver");
require("gm.datepicker-multi-select");
require("jquery-ui");
require("jquery-validation");
require("markerclustererplus/dist/markerclusterer.min.js");
require("moment-timezone");

require("chart.js");
require("chartjs-plugin-labels");

// require('angular-animate');
// require('angular-cookies');
// require('angular-touch');
// require('angular-sanitize');
// require('angular-resource');
// require('angular-filter');
// require('angular-ui-router');
// require('angular-bootstrap');
// require('angular-bootstrap-checkbox');
// require('angular-multiple-date-picker');
// require('gm.datepickerMultiSelect');
// require('angular-ui-bootstrap-datetimepicker');
// require('angular-multi-step-form');
// require('pusher-angular');
// require('angular-ui-scroll');
// require('angular-chart.js');
// require('angular-zendesk-widget');
// require('angular-file-saver');
// require('angular-digest-hud/digest-hud.js');
