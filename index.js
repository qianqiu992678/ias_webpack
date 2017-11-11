'use strict';

/**
 * Created by Administrator on 2017/5/10.
 */

require ('angular');
require('angular-ui-router');
require('angular-ui-load');
require('oclazyload');
var iasApp=angular.module('iasApp',['ng','ui.load','ui.router','oc.lazyLoad']);
require ('./app/menus/route.js')(iasApp)
//require ('./app/menus/myDirective.js')
require ('./app/css/index.css')
