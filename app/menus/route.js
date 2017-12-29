/**
 * Created by Administrator on 2017/5/10.
 */


module.exports=function(iasApp){
    console.log('route');
	//angular.module("iasApp")
	iasApp
	    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
	    	$urlRouterProvider.otherwise('ias/dictionary');
	        $stateProvider
//	        	.state('display1',{
//	        		url:'/display1',
//	                templateUrl:'app/menus/display/display1.html',
//	                controller:'display1Ctrl',
//	                resolve:{
//                  	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
//                          return uiLoad.load('app/menus/display/display1Ctrl.js').then(function() {
//                              return $ocLazyLoad.load('toaster')});
//                      }]
//                  }
//	        	})
	            
	            
	            .state('ias',{
	            	abstract: true,
                    url: '/ias',
                  	templateUrl:'app/menus/ias.html',
                    controller:'iasCtrl',
//                  resolve:{
//                  	deps: ['uiLoad', function(uiLoad) {
//                          return uiLoad.load('app/menus/iasCtrl.js')
//                      }]
//                  }
	            })
	            .state('ias.dictionary',{
	                url:'/dictionary',
	                templateUrl:'app/menus/test/dictionary.html',
	                controller:'dictionaryCtrl',
//	                resolve:{
//                  	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
//                          return uiLoad.load('app/menus/test/test1Ctrl.js').then(function() {
//                              return $ocLazyLoad.load('toaster')});
//                      }]
//                  }
	            })
	            .state('ias.test1',{
	                url:'/test1',
	                templateUrl:'app/menus/test/test1.html',
	                controller:'test1Ctrl',
//	                resolve:{
//                  	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
//                          return uiLoad.load('app/menus/test/test1Ctrl.js').then(function() {
//                              return $ocLazyLoad.load('toaster')});
//                      }]
//                  }
	            })
	            //PMS
	            .state('ias.PMS',{
	                url:'/PMS',
	                template:'<div ui-view></div>'
	            })
	            //PMS--PMSControll
	            .state('ias.PMS.PMSControll',{
	                url:'/PMSControll',
	                templateUrl:'app/menus/PMS/PMSControll.html',
	                controller:'PMSControllCtrl',
//	                resolve:{
//                  	deps: ['uiLoad', function(uiLoad) {
//                          return uiLoad.load('app/menus/PMS/PMSControllCtrl.js')
//                      }]
//                  }
	            })
	            //PMS--PMSSingleLine
	            .state('ias.PMS.PMSSingleLine',{
	                url:'/PMSSingleLine',
	                templateUrl:'app/menus/PMS/PMSSingleLine.html',
	                controller:'PMSSingleLineCtrl',
//	                resolve:{
//                  	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
//                          return uiLoad.load('app/menus/PMS/PMSSingleLineCtrl.js')
//                      }]
//                  }
	            })
	            .state('ias.Cargo',{
	                url:'/Cargo',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Cargo.BallastDrillW',{
	                url:'/BallastDrillW',
	                templateUrl:'app/menus/Cargo/BallastDrillWater.html',
	                controller:'BallastDrillWCtrl',
	                
	            })
	            .state('ias.Cargo.BaseOil',{
	                url:'/BaseOil',
	                templateUrl:'app/menus/Cargo/BaseOil.html',
	                controller:'BaseOilCtrl'
	            })
	            .state('ias.Cargo.BHS',{
	                url:'/BHS',
	                templateUrl:'app/menus/Cargo/BHS.html',
	                controller:'BHSCtrl'
	            })
	            .state('ias.Cargo.FWCargo',{
	                url:'/FWCargo',
	                templateUrl:'app/menus/Cargo/FWCargo.html',
	                controller:'FWCargoCtrl'
	            })
	            .state('ias.Cargo.FOCargo',{
	                url:'/FOCargo',
	                templateUrl:'app/menus/Cargo/FOCargo.html',
	                controller:'FOCargoCtrl'
	            })
	            .state('ias.Cargo.LFL',{
	                url:'/LFL',
	                templateUrl:'app/menus/Cargo/LFL.html',
	                controller:'LFLCtrl'
	            })
	            .state('ias.Cargo.LiquidMudBrine',{
	                url:'LiquidMudBrine',
	                templateUrl:'app/menus/Cargo/LiquidMud&Brine.html',
	                controller:'LiquidMudBrineCtrl'
	            })
	            .state('ias.Cargo.CargoSummary',{
	                url:'/CargoSummary',
	                templateUrl:'app/menus/Cargo/CargoSummary.html',
	                controller:'CargoSummaryCtrl'
	            })
	            .state('ias.Engine',{
	                url:'/Engine',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Engine.ME1',{
	                url:'/ME1',
	                templateUrl:'app/menus/Engines/ME1.html',
	                controller:'ME1Ctrl'
	            })
	            .state('ias.Engine.ME2',{
	                url:'/ME2',
	                templateUrl:'app/menus/Engines/ME2.html',
	                controller:'ME2Ctrl'
	            })
	            .state('ias.Engine.ME3',{
	                url:'/ME3',
	                templateUrl:'app/menus/Engines/ME3.html',
	                controller:'ME3Ctrl'
	            })
	            .state('ias.Engine.ME4',{
	                url:'/ME4',
	                templateUrl:'app/menus/Engines/ME4.html',
	                controller:'ME4Ctrl'
	            })
	            .state('ias.Engine.LO',{
	                url:'/LO',
	                templateUrl:'app/menus/Engines/LO.html',
	                controller:'LOCtrl'
	            })
	            .state('ias.Engine.FO',{
	                url:'/FO',
	                templateUrl:'app/menus/Engines/FO.html',
	                controller:'FOCtrl'
	            })
	            .state('ias.Propulsions',{
	                url:'/Propulsions',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Propulsions.ThrusterOverview',{
	                url:'/ThrusterOverview',
	                templateUrl:'app/menus/Propulsions/ThrusterOverview.html',
	                controller:'ThrusterOverviewCtrl'
	            })
	            .state('ias.Propulsions.BowThruster1',{
	                url:'/BowThruster1',
	                templateUrl:'app/menus/Propulsions/BowThruster1.html',
	                controller:'BowThruster1Ctrl'
	            })
	            .state('ias.Propulsions.BowThruster2',{
	                url:'/BowThruster2',
	                templateUrl:'app/menus/Propulsions/BowThruster2.html',
	                controller:'BowThruster2Ctrl'
	            })
	            .state('ias.Propulsions.MainPropPS',{
	                url:'/MainPropPS',
	                templateUrl:'app/menus/Propulsions/MainPropPS.html',
	                controller:'MainPropPSCtrl'
	            })
	            .state('ias.Propulsions.MainPropSB',{
	                url:'/MainPropSB',
	                templateUrl:'app/menus/Propulsions/MainPropSB.html',
	                controller:'MainPropSBCtrl'
	            })
	            .state('ias.Cooling',{
	                url:'/Cooling',
	                template:'<div ui-view=""></div>'
	            })
	            .state('ias.Cooling.CoolingOverview',{
	                url:'/CoolingOverview',
	                templateUrl:'app/menus/Cooling/CoolingOverview.html',
	                controller:'CoolingOverviewCtrl'
	            })
	            .state('ias.Cooling.SWCooling1',{
	                url:'/SWCooling1',
	                templateUrl:'app/menus/Cooling/SWCooling1.html',
	                controller:'SWCooling1Ctrl'
	            })
	            .state('ias.Cooling.SWCooling2',{
	                url:'/SWCooling2',
	                templateUrl:'app/menus/Cooling/SWCooling2.html',
	                controller:'SWCooling2Ctrl'
	            })
	            .state('ias.Cooling.FWCooling1',{
	                url:'/FWCooling1',
	                templateUrl:'app/menus/Cooling/FWCooling1.html',
	                controller:'FWCooling1Ctrl'
	            })
	            .state('ias.Cooling.FWCooling2',{
	                url:'/FWCooling2',
	                templateUrl:'app/menus/Cooling/FWCooling2.html',
	                controller:'FWCooling2Ctrl'
	            })
	            .state('ias.Cooling.FWCooling3',{
	                url:'/FWCooling3',
	                templateUrl:'app/menus/Cooling/FWCooling3.html',
	                controller:'FWCooling3Ctrl'
	            })
	            .state('ias.Misc',{
	                url:'/Misc',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Misc.ExtendedAlarm',{
	                url:'/ExtendedAlarm',
	                templateUrl:'app/menus/Misc/ExtendedAlarm.html',
	                controller:'ExtendedAlarmCtrl'
	            })
	            .state('ias.Misc.RunningHours',{
	                url:'/RunningHours',
	                templateUrl:'app/menus/Misc/RunningHours.html',
	                controller:'RunningHoursCtrl'
	            })
	            .state('ias.Misc.Miscellaneous',{
	                url:'/Miscellaneous',
	                templateUrl:'app/menus/Misc/Miscellaneous.html',
	                controller:'MiscellaneousCtrl'
	            })
	            .state('ias.Misc.EITrqOverview',{
	                url:'/EITrqOverview',
	                templateUrl:'app/menus/Misc/EITrqOverview.html',
	                controller:'EITrqOverviewCtrl'
	            })
	            .state('ias.Misc.Bilge',{
	                url:'/Bilge',
	                templateUrl:'app/menus/Misc/Bilge.html',
	                controller:'BilgeCtrl'
	            })
	            .state('ias.Misc.FireLine',{
	                url:'/FireLine',
	                templateUrl:'app/menus/Misc/FireLine.html',
	                controller:'FireLineCtrl'
	            })
	            .state('ias.Misc.WasteSludge',{
	                url:'/WasteSludge',
	                templateUrl:'app/menus/Misc/WasteSludge.html',
	                controller:'WasteSludgeCtrl'
	            })
	            .state('ias.Misc.Hydrophore',{
	                url:'/Hydrophore',
	                templateUrl:'app/menus/Misc/Hydrophore.html',
	                controller:'HydrophoreCtrl'
	            })
	            .state('ias.Misc.SewageDischarge',{
	                url:'/SewageDischarge',
	                templateUrl:'app/menus/Misc/SewageDischarge.html',
	                controller:'SewageDischargeCtrl'
	            })
	            .state('ias.Misc.StartingInstrAir',{
	                url:'/StartingInstrAir',
	                templateUrl:'app/menus/Misc/StartingInstrAir.html',
	                controller:'StartingInstrAirCtrl'
	            })
	            .state('ias.Misc.StabtankLevel',{
	                url:'/StabtankLevel',
	                templateUrl:'app/menus/Misc/StabtankLevel.html',
	                controller:'StabtankLevelCtrl'
	            })
	            .state('ias.Trend',{
	                url:'/Trend',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Trend.Trend',{
	                url:'/Trend',
	                templateUrl:'app/menus/Trend/Trend.html',
	                controller:'TrendCtrl'
	            })
	            .state('ias.IAS',{
	                url:'/IAS',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.IAS.IASLogin',{
	                url:'/IASLogin',
	                templateUrl:'app/menus/IAS/IASLogin.html',
	                controller:'IASLoginCtrl'
	            })
	            .state('ias.IAS.IOBrowser',{
	                url:'/IOBrowser',
	                templateUrl:'app/menus/IAS/IOBrowser.html',
	                controller:'IOBrowserCtrl'
	            })
	            .state('ias.IAS.ComNetwork',{
	                url:'/ComNetwork',
	                templateUrl:'app/menus/IAS/ComNetwork.html',
	                controller:'ComNetworkCtrl'
	            })
	            .state('ias.IAS.ComDevice',{
	                url:'/ComDevice',
	                templateUrl:'app/menus/IAS/ComDevice.html',
	                controller:'ComDeviceCtrl'
	            })
	            .state('ias.IAS.ECIVRNODX',{
	                url:'/ECIVRNODX',
	                templateUrl:'app/menus/IAS/ECIVRNODX.html',
	                controller:'ECIVRNODXCtrl'
	            })
	            .state('ias.IAS.NMEA',{
	                url:'/NMEA',
	                templateUrl:'app/menus/IAS/NMEA.html',
	                controller:'NMEACtrl'
	            })
	            .state('ias.IAS.CommandOverview',{
	                url:'/CommandOverview',
	                templateUrl:'app/menus/IAS/CommandOverview.html',
	                controller:'CommandOverviewCtrl'
	            })
	            .state('ias.IAS.CommandManagement',{
	                url:'/CommandManagement',
	                templateUrl:'app/menus/IAS/CommandManagement.html',
	                controller:'CommandManagementCtrl'
	            })
	            .state('ias.IAS.IASSetup',{
	                url:'/IASSetup',
	                templateUrl:'app/menus/IAS/IASSetup.html',
	                controller:'IASSetupCtrl'
	            })
	            .state('ias.IAS.WriteDisable',{
	                url:'/WriteDisable',
	                templateUrl:'app/menus/IAS/WriteDisable.html',
	                controller:'WriteDisableCtrl'
	            })
	            .state('ias.IAS.DiagnosticPerformance',{
	                url:'/DiagnosticPerformance',
	                templateUrl:'app/menus/IAS/DiagnosticPerformance.html',
	                controller:'DiagnosticPerformanceCtrl'
	            })
	            .state('ias.IAS.ForceBrowser',{
	                url:'/ForceBrowser',
	                templateUrl:'app/menus/IAS/ForceBrowser.html',
	                controller:'ForceBrowserCtrl'
	            })
	            .state('ias.IAS.TaskOverview',{
	                url:'/TaskOverview',
	                templateUrl:'app/menus/IAS/TaskOverview.html',
	                controller:'TaskOverviewCtrl'
	            })
	    }])
	    
	    //iasCtrl
	    .controller('iasCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('iasCtrl');
	    	$('.body').on('click', function (e) {
		        if(!$(e.target).hasClass('category-item-name')){
		            $('.system-items.active').removeClass('active')
		        };
		        if(!$(e.target).hasClass('alarm-select-head')){
		            $('.alarm-items.active').removeClass('active')
		        };
		    });
		    $.ajax({
		        url:'app/data/systemCategory.json',
		        success: function (data) {
		            $scope.systemCategory=data;
		            console.log(data);
		        }
		    });
		    $('.system-category').on('click','.category-item', function (e) {
		        console.log(e.target);
		        $('.category-item').children('.active').removeClass('active');
		        $(e.target).next().toggleClass('active')
		    });
		    $('.alarm-select-head').on('click', function (e) {
		        $(e.target).next().toggleClass('active');
		        console.log(e.target,123)
		    });
		    //系统时间设定
		    $interval(function () {
		        $scope.systemTime=new Date();
		    },1000);
		    //获取所有舱室信息
		    $rootScope.getTankMessage= function () {
		        $.ajax({
		            url:'app/data/getTankMessage.php',
		            success: function (data) {
		                $rootScope.tankMessage=[];
		                $(data).each(function (index,value) {
		                    $rootScope.tankMessage[value.tankName]=value;
		                });
		                console.log('处理后的舱室信息数据为：',$rootScope.tankMessage);
		            },
		            error: function (data) {
		                console.log(data,'接收舱室信息失败')
		            }
		        });
		    };
		    $rootScope.getTankMessage();
		    //获取所有泵浦信息方法
		    $rootScope.getPumpMessage= function () {
		        $.ajax({
		            url:'app/data/getPumpMessage.php',
		            success: function (data) {
		                console.log('接收的泵浦信息数据为：',data);
		                $rootScope.pumpMessage=[];
		                $(data).each(function (index,value) {
		                    //value.isRunning=value.isRunning==1?'#0f0':'#fff';
		                    //value.isRemote=value.isRemote==1?'#fff':'#00f';
		                    $rootScope.pumpMessage[value.pumpName]=value;
		
		                });
		                console.log('处理后的泵浦信息数据为：',$rootScope.pumpMessage)
		            },
		            error: function (data) {
		                console.log(data,'接收泵浦信息失败')
		            }
		        });
		    }
		    $rootScope.getPumpMessage();
		    
		
		    //定义泵启停方法
		    $rootScope.pumpIsRunningControl= function (e,isRunning) {
		
		        console.log('接收的参数为：', e.target,isRunning);
		        var pumpId=$(e.target).parent().attr('pump-id');
		        console.log('发送的参数为：',pumpId,isRunning)
		        $.ajax({
		            url:'app/data/pumpIsRunningControl.php?pumpId='+pumpId+'&isRunning='+isRunning,
		            success: function (data) {
		                console.log(data,1234);
		                $rootScope.getPumpMessage();
		            },
		            error: function (data) {
		                console.log('泵启停失败：',data)
		            }
		        });
		    }
		    //定义调速停方法
		    
	    }])
	    .controller('test1Ctrl',['$scope','$rootScope',function($scope,$rootScope){
	    	console.log('test1Ctrl');
		    //console.log($rootScope.pumpMessage)
		    //console.log('有引号的：',$rootScope.pumpMessage['ballast/drillPum'])
		    console.log('有引号的：',$rootScope.pumpMessage['ballastdrillPump'].ratedPower)
	    	
	    }])
	    .controller('dictionaryCtrl',['$scope','$rootScope',function($scope,$rootScope){
	    	console.log('dictionaryCtrl');
	    	
	    }])
	    //PMSControllCtrl
	    .controller('PMSControllCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('PMSControllCtrl');
	    }])
	    //PMSSingleLineCtrl
	    .controller('PMSSingleLineCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('PMSSingleLineCtrl');
	    }])
	    //BallastDrillWCtrl
	    .controller('BallastDrillWCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('BallWCtrl');
	    }])
	    //BaseOilCtrl
	    .controller('BaseOilCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('BaseOilCtrl');
	    }])
	    //BHSCtrl
	    .controller('BHSCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('BHSCtrl');
	    }])
	    //FWCargoCtrl
	    .controller('FWCargoCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('FWCargoCtrl');
	    }])
	    //FOCargoCtrl
	    .controller('FOCargoCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('FOCargoCtrl');
	    }])
	    //LFLCtrl
	    .controller('LFLCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('LFLCtrl');
	    }])
	    //LiquidMudBrineCtrl
	    .controller('LiquidMudBrineCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('LiquidMudBrineCtrl');
	    }])
	    //CargoSummaryCtrl
	    .controller('CargoSummaryCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('CargoSummaryCtrl');
	    }])
	    //ME1Ctrl
	    .controller('ME1Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ME1Ctrl');
	    }])
	    //ME2Ctrl
	    .controller('ME2Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ME2Ctrl');
	    }])
	    //ME3Ctrl
	    .controller('ME3Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ME3Ctrl');
	    }])
	    //ME4Ctrl
	    .controller('ME4Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ME4Ctrl');
	    }])
	    //LOCtrl
	    .controller('LOCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('LOCtrl');
	    }])
	    //FOCtrl
	    .controller('FOCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('FOCtrl');
	    }])
	    //ThrusterOverviewCtrl
	    .controller('ThrusterOverviewCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ThrusterOverviewCtrl');
	    }])
	    //BowThruster1Ctrl
	    .controller('BowThruster1Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('BowThruster1Ctrl');
	    }])
	    //BowThruster2Ctrl
	    .controller('BowThruster2Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('BowThruster2Ctrl');
	    }])
	    //MainPropPSCtrl
	    .controller('MainPropPSCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('MainPropPSCtrl');
	    }])
	    //MainPropSBCtrl
	    .controller('MainPropSBCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('MainPropSBCtrl');
	    }])
	    //CoolingOverviewCtrl
	    .controller('CoolingOverviewCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('CoolingOverviewCtrl');
	    }])
	    //SWCooling1Ctrl
	    .controller('SWCooling1Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('SWCooling1Ctrl');
	    }])
	    //SWCooling2Ctrl
	    .controller('SWCooling2Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('SWCooling2Ctrl');
	    }])
	    //FWCooling1Ctrl
	    .controller('FWCooling1Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('FWCooling1Ctrl');
	    }])
	    //FWCooling2Ctrl
	    .controller('FWCooling2Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('FWCooling2Ctrl');
	    }])
	    //FWCooling3Ctrl
	    .controller('FWCooling3Ctrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('FWCooling3Ctrl');
	    }])
	    //ExtendedAlarmCtrl
	    .controller('ExtendedAlarmCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ExtendedAlarmCtrl');
	    }])
	    //RunningHoursCtrl
	    .controller('RunningHoursCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('RunningHoursCtrl');
	    }])
	    //MiscellaneousCtrl
	    .controller('MiscellaneousCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('MiscellaneousCtrl');
	    }])
	    //EITrqOverviewCtrl
	    .controller('EITrqOverviewCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('EITrqOverviewCtrl');
	    }])
	    //BilgeCtrl
	    .controller('BilgeCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('BilgeCtrl');
	    }])
	    //FireLineCtrl
	    .controller('FireLineCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('FireLineCtrl');
	    }])
	    //WasteSludgeCtrl
	    .controller('WasteSludgeCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('WasteSludgeCtrl');
	    }])
	    //HydrophoreCtrl
	    .controller('HydrophoreCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('HydrophoreCtrl');
	    }])
	    //SewageDischargeCtrl
	    .controller('SewageDischargeCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('SewageDischargeCtrl');
	    }])
	    //StartingInstrAirCtrl
	    .controller('StartingInstrAirCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('StartingInstrAirCtrl');
	    }])
	    //StabtankLevelCtrl
	    .controller('StabtankLevelCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('StabtankLevelCtrl');
	    }])
	    //TrendCtrl
	    .controller('TrendCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('TrendCtrl');
	    }])
	    //IASLoginCtrl
	    .controller('IASLoginCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('IASLoginCtrl');
	    }])
	    //IOBrowserCtrl
	    .controller('IOBrowserCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('IOBrowserCtrl');
	    }])
	    //ComNetworkCtrl
	    .controller('ComNetworkCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ComNetworkCtrl');
	    }])
	    //ComDeviceCtrl
	    .controller('ComDeviceCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ComDeviceCtrl');
	    }])
	    //ECIVRNODXCtrl
	    .controller('ECIVRNODXCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ECIVRNODXCtrl');
	    }])
	    //NMEACtrl
	    .controller('NMEACtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('NMEACtrl');
	    }])
	    //CommandOverviewCtrl
	    .controller('CommandOverviewCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('CommandOverviewCtrl');
	    }])
	    //CommandManagementCtrl
	    .controller('CommandManagementCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('CommandManagementCtrl');
	    }])
	    //IASSetupCtrl
	    .controller('IASSetupCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('IASSetupCtrl');
	    }])
	    //WriteDisableCtrl
	    .controller('WriteDisableCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('WriteDisableCtrl');
	    }])
	    //DiagnosticPerformanceCtrl
	    .controller('DiagnosticPerformanceCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('DiagnosticPerformanceCtrl');
	    }])
	    //ForceBrowserCtrl
	    .controller('ForceBrowserCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('ForceBrowserCtrl');
	    }])
	    //TaskOverviewCtrl
	    .controller('TaskOverviewCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('TaskOverviewCtrl');
	    }]) 
}







