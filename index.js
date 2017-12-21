'use strict';

/**
 * Created by Administrator on 2017/5/10.
 */
//require('jquery');
require ('angular');
require('angular-ui-router');
require('ng-file-upload');
require('angular-ui-load');
require('oclazyload');
var iasApp=angular.module('iasApp',['ng','ui.load','ui.router','oc.lazyLoad','ngFileUpload']);
//'ui.load', 'ui.router', 'ngStorage', 'brantwills.paging', 'oc.lazyLoad', 'fullPage.js', 'ngFileUpload'
require('./app/menus/iasCtrl.js');
require ('./app/menus/route.js')(iasApp)
require ('./app/menus/myDirective.js')
require ('./app/css/index.css')
