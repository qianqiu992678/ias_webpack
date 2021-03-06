/**
 * Created by Administrator on 2017/5/10.
 */


module.exports=function(iasApp){
    console.log('route');
	//angular.module("iasApp")
	iasApp
	    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
	    	$urlRouterProvider.otherwise('ias/pms/PMSControll');
	        $stateProvider
	        	.state('display1',{
	        		url:'/display1',
	                templateUrl:'app/menus/display/display1.html',
	                controller:'display1Ctrl',
	                resolve:{
                    	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
                            return uiLoad.load('app/menus/display/display1Ctrl.js').then(function() {
                                return $ocLazyLoad.load('toaster')});
                        }]
                    }
	        	})
	            .state('test',{
	                url:'/test',
	                template:'<div ui-view>test</div>'
	            })
	            .state('test.test1',{
	                url:'/test1',
	                templateUrl:'app/menus/test/test1.html',
	                //template:'<div>test1</div>',
	                controller:'test1Ctrl',
	                resolve:{
                    	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
                            return uiLoad.load('app/menus/test/test1Ctrl.js').then(function() {
                                return $ocLazyLoad.load('toaster')});
                        }]
                    }
	            })
	            .state('ias',{
	            	//abstract: true,
                    url: '/ias',
                  	templateUrl:'app/menus/ias.html',
//                  template:'<div ui-view></div>',
                    controller:'iasCtrl',
//                  resolve:{
//                  	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
//                          return uiLoad.load('app/menus/iasCtrl.js').then(function() {
//                                return $ocLazyLoad.load('toaster')});
//                      }]
//                  }
	            })
	            //PMS
	            .state('ias.PMS',{
	                url:'/pms',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.PMS.PMSControll',{
	                url:'/PMSControll',
	                templateUrl:'app/menus/PMS/PMSControll.html',
	                controller:'PMSControllCtrl',
//	                resolve:{
//                  	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
//                          return uiLoad.load('app/menus/PMS/PMSControllCtrl.js').then(function() {
//                              return $ocLazyLoad.load('toaster')});
//                      }]
//                  }
	            })
	            .state('ias.PMS.PMSSingleLine',{
	                url:'/PMSSingleLine',
	                templateUrl:'app/menus/PMS/PMSSingleLine.html',
	                controller:'PMSSingleLineCtrl',
	                resolve:{
                    	deps: ['uiLoad', '$ocLazyLoad', function(uiLoad, $ocLazyLoad) {
                            return uiLoad.load('app/menus/PMS/PMSSingleLineCtrl.js').then(function() {
                                return $ocLazyLoad.load('toaster')});
                        }]
                    }
	            })
	            .state('ias.Cargo',{
	                url:'/Cargo',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Cargo.BallastDrillW',{
	                url:'/BallastDrillW',
	                templateUrl:'app/templates/Cargo/Ballast&DrillW.html',
	                controller:'BallastDrillWCtrl',
	                
	            })
	            .state('ias.Cargo.BaseOil',{
	                url:'/BaseOil',
	                templateUrl:'app/templates/Cargo/BaseOil.html',
	                controller:'BaseOilCtrl'
	            })
	            .state('ias.Cargo.BHS',{
	                url:'/BHS',
	                templateUrl:'app/templates/Cargo/BHS.html',
	                controller:'BHSCtrl'
	            })
	            .state('ias.Cargo.FWCargo',{
	                url:'/FWCargo',
	                templateUrl:'app/templates/Cargo/FWCargo.html',
	                controller:'FWCargoCtrl'
	            })
	            .state('ias.Cargo.FOCargo',{
	                url:'/FOCargo',
	                templateUrl:'app/templates/Cargo/FOCargo.html',
	                controller:'FOCargoCtrl'
	            })
	            .state('ias.Cargo.LFL',{
	                url:'/LFL',
	                templateUrl:'app/templates/Cargo/LFL.html',
	                controller:'LFLCtrl'
	            })
	            .state('ias.Cargo.LiquidMudBrine',{
	                url:'LiquidMudBrine',
	                templateUrl:'app/templates/Cargo/LiquidMud&Brine.html',
	                controller:'LiquidMudBrineCtrl'
	            })
	            .state('ias.Cargo.CargoSummary',{
	                url:'/CargoSummary',
	                templateUrl:'app/templates/Cargo/CargoSummary.html',
	                controller:'CargoSummaryCtrl'
	            })
	            .state('ias.Engine',{
	                url:'/Engine',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Engine.ME1',{
	                url:'/ME1',
	                templateUrl:'app/templates/Engines/ME1.html',
	                controller:'ME1Ctrl'
	            })
	            .state('ias.Engine.ME2',{
	                url:'/ME2',
	                templateUrl:'app/templates/Engines/ME2.html',
	                controller:'ME2Ctrl'
	            })
	            .state('ias.Engine.ME3',{
	                url:'/ME3',
	                templateUrl:'app/templates/Engines/ME3.html',
	                controller:'ME3Ctrl'
	            })
	            .state('ias.Engine.ME4',{
	                url:'/ME4',
	                templateUrl:'app/templates/Engines/ME4.html',
	                controller:'ME4Ctrl'
	            })
	            .state('ias.Engine.LO',{
	                url:'/LO',
	                templateUrl:'app/templates/Engines/LO.html',
	                controller:'LOCtrl'
	            })
	            .state('ias.Engine.FO',{
	                url:'/FO',
	                templateUrl:'app/templates/Engines/FO.html',
	                controller:'FOCtrl'
	            })
	            .state('ias.Propulsions',{
	                url:'/Propulsions',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Propulsions.ThrusterOverview',{
	                url:'/ThrusterOverview',
	                templateUrl:'app/templates/Propulsions/ThrusterOverview.html',
	                controller:'ThrusterOverviewCtrl'
	            })
	            .state('ias.Propulsions.BowThruster1',{
	                url:'/BowThruster1',
	                templateUrl:'app/templates/Propulsions/BowThruster1.html',
	                controller:'BowThruster1Ctrl'
	            })
	            .state('ias.Propulsions.BowThruster2',{
	                url:'/BowThruster2',
	                templateUrl:'app/templates/Propulsions/BowThruster2.html',
	                controller:'BowThruster2Ctrl'
	            })
	            .state('ias.Propulsions.MainPropPS',{
	                url:'/MainPropPS',
	                templateUrl:'app/templates/Propulsions/MainPropPS.html',
	                controller:'MainPropPSCtrl'
	            })
	            .state('ias.Propulsions.MainPropSB',{
	                url:'/MainPropSB',
	                templateUrl:'app/templates/Propulsions/MainPropSB.html',
	                controller:'MainPropSBCtrl'
	            })
	            .state('ias.Cooling',{
	                url:'/Cooling',
	                template:'<div ui-view=""></div>'
	            })
	            .state('ias.Cooling.CoolingOverview',{
	                url:'/CoolingOverview',
	                templateUrl:'app/templates/Cooling/CoolingOverview.html',
	                controller:'CoolingOverviewCtrl'
	            })
	            .state('ias.Cooling.SWCooling1',{
	                url:'/SWCooling1',
	                templateUrl:'app/templates/Cooling/SWCooling1.html',
	                controller:'SWCooling1Ctrl'
	            })
	            .state('ias.Cooling.SWCooling2',{
	                url:'/SWCooling2',
	                templateUrl:'app/templates/Cooling/SWCooling2.html',
	                controller:'SWCooling2Ctrl'
	            })
	            .state('ias.Cooling.FWCooling1',{
	                url:'/FWCooling1',
	                templateUrl:'app/templates/Cooling/FWCooling1.html',
	                controller:'FWCooling1Ctrl'
	            })
	            .state('ias.Cooling.FWCooling2',{
	                url:'/FWCooling2',
	                templateUrl:'app/templates/Cooling/FWCooling2.html',
	                controller:'FWCooling2Ctrl'
	            })
	            .state('ias.Cooling.FWCooling3',{
	                url:'/FWCooling3',
	                templateUrl:'app/templates/Cooling/FWCooling3.html',
	                controller:'FWCooling3Ctrl'
	            })
	            .state('ias.Misc',{
	                url:'/Misc',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Misc.ExtendedAlarm',{
	                url:'/ExtendedAlarm',
	                templateUrl:'app/templates/Misc/ExtendedAlarm.html',
	                controller:'ExtendedAlarmCtrl'
	            })
	            .state('ias.Misc.RunningHours',{
	                url:'/RunningHours',
	                templateUrl:'app/templates/Misc/RunningHours.html',
	                controller:'RunningHoursCtrl'
	            })
	            .state('ias.Misc.Miscellaneous',{
	                url:'/Miscellaneous',
	                templateUrl:'app/templates/Misc/Miscellaneous.html',
	                controller:'MiscellaneousCtrl'
	            })
	            .state('ias.Misc.EITrqOverview',{
	                url:'/EITrqOverview',
	                templateUrl:'app/templates/Misc/EITrqOverview.html',
	                controller:'EITrqOverviewCtrl'
	            })
	            .state('ias.Misc.Bilge',{
	                url:'/Bilge',
	                templateUrl:'app/templates/Misc/Bilge.html',
	                controller:'BilgeCtrl'
	            })
	            .state('ias.Misc.FireLine',{
	                url:'/FireLine',
	                templateUrl:'app/templates/Misc/FireLine.html',
	                controller:'FireLineCtrl'
	            })
	            .state('ias.Misc.WasteSludge',{
	                url:'/WasteSludge',
	                templateUrl:'app/templates/Misc/WasteSludge.html',
	                controller:'WasteSludgeCtrl'
	            })
	            .state('ias.Misc.Hydrophore',{
	                url:'/Hydrophore',
	                templateUrl:'app/templates/Misc/Hydrophore.html',
	                controller:'HydrophoreCtrl'
	            })
	            .state('ias.Misc.SewageDischarge',{
	                url:'/SewageDischarge',
	                templateUrl:'app/templates/Misc/SewageDischarge.html',
	                controller:'SewageDischargeCtrl'
	            })
	            .state('ias.Misc.StartingInstrAir',{
	                url:'/StartingInstrAir',
	                templateUrl:'app/templates/Misc/StartingInstrAir.html',
	                controller:'StartingInstrAirCtrl'
	            })
	            .state('ias.Misc.StabtankLevel',{
	                url:'/StabtankLevel',
	                templateUrl:'app/templates/Misc/StabtankLevel.html',
	                controller:'StabtankLevelCtrl'
	            })
	            .state('ias.Trend',{
	                url:'/Trend',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.Trend.Trend',{
	                url:'/Trend',
	                templateUrl:'app/templates/Trend/Trend.html',
	                controller:'Trend.html'
	            })
	            .state('ias.IAS',{
	                url:'/IAS',
	                template:'<div ui-view></div>'
	            })
	            .state('ias.IAS.IASLogin',{
	                url:'/IASLogin',
	                templateUrl:'app/templates/IAS/IASLogin.html',
	                controller:'IASLoginCtrl'
	            })
	            .state('ias.IAS.IOBrowser',{
	                url:'/IOBrowser',
	                templateUrl:'app/templates/IAS/IOBrowser.html',
	                controller:'IOBrowserCtrl'
	            })
	            .state('ias.IAS.ComNetwork',{
	                url:'/ComNetwork',
	                templateUrl:'app/templates/IAS/ComNetwork.html',
	                controller:'ComNetworkCtrl'
	            })
	            .state('ias.IAS.ComDevice',{
	                url:'/ComDevice',
	                templateUrl:'app/templates/IAS/ComDevice.html',
	                controller:'ComDeviceCtrl'
	            })
	            .state('ias.IAS.ECIVRNODX',{
	                url:'/ECIVRNODX',
	                templateUrl:'app/templates/IAS/ECIVRNODX.html',
	                controller:'ECIVRNODXCtrl'
	            })
	            .state('ias.IAS.NMEA',{
	                url:'/NMEA',
	                templateUrl:'app/templates/IAS/NMEA.html',
	                controller:'NMEACtrl'
	            })
	            .state('ias.IAS.CommandOverview',{
	                url:'/CommandOverview',
	                templateUrl:'app/templates/IAS/CommandOverview.html',
	                controller:'CommandOverviewCtrl'
	            })
	            .state('ias.IAS.CommandManagement',{
	                url:'/CommandManagement',
	                templateUrl:'app/templates/IAS/CommandManagement.html',
	                controller:'CommandManagementCtrl'
	            })
	            .state('ias.IAS.IASSetup',{
	                url:'/IASSetup',
	                templateUrl:'app/templates/IAS/IASSetup.html',
	                controller:'IASSetupCtrl'
	            })
	            .state('ias.IAS.WriteDisable',{
	                url:'/WriteDisable',
	                templateUrl:'app/templates/IAS/WriteDisable.html',
	                controller:'WriteDisableCtrl'
	            })
	            .state('ias.IAS.DiagnosticPerformance',{
	                url:'/DiagnosticPerformance',
	                templateUrl:'app/templates/IAS/DiagnosticPerformance.html',
	                controller:'DiagnosticPerformanceCtrl'
	            })
	            .state('ias.IAS.ForceBrowser',{
	                url:'/ForceBrowser',
	                templateUrl:'app/templates/IAS/ForceBrowser.html',
	                controller:'ForceBrowser'
	            })
	            .state('ias.IAS.TaskOverview',{
	                url:'/TaskOverview',
	                templateUrl:'app/templates/IAS/TaskOverview.html',
	                controller:'TaskOverview'
	            })
	    }])
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
		            }
		        });
		    };
		    //获取所有泵浦信息方法
		    $rootScope.getPumpMessage= function () {
		        $.ajax({
		            url:'app/data/getPumpMessage.php',
		            success: function (data) {
		                console.log('接收的泵浦信息数据为33：',data);
		                $rootScope.pumpMessage=[];
		                $(data).each(function (index,value) {
		                    value.isRunning=value.isRunning==1?'#0f0':'#fff';
		                    value.isRemote=value.isRemote==1?'#fff':'#00f';
		                    $rootScope.pumpMessage[value.pumpName]=value;
		
		                });
		                console.log('处理后的泵浦信息数据为：',$rootScope.pumpMessage)
		            },
		            error: function (data) {
		                console.log(data,'接收泵浦信息失败')
		            }
		        });
		    }
		
		    //定义泵启停方法
		    $rootScope.pumpIsRunningControl= function (e,isRunning) {
		
		        console.log('接收的参数为：', e.target,isRunning);
		        var pumpName=$(e.target).parent().attr('pump-name');
		        console.log('发送的参数为：',pumpName,isRunning)
		        $.ajax({
		            url:'app/data/pumpIsRunningControl.php?pumpName='+pumpName+'&isRunning='+isRunning,
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
		    $rootScope.getPumpMessage();
		    $rootScope.getTankMessage();
	    }])
	    .controller('PMSControllCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
	    	console.log('PMSControllCtrl');
	    }])
}







