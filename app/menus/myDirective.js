/**
 * Created by Administrator on 2017/5/15.
 */
module.exports=function(iasApp){
	//系统单页顶部标题
	iasApp
	.controller('pumpBodyCtrl',['$scope', function ($scope) {
	    console.log('pumpBodyCtrl');
	    $('.pump-body').click(function (e) {
	        $(e.target).parents('.pump-component').children('.pump-control-pannel').addClass('active')
	    })
	}])
	.controller('pumpComponentCtrl',['$scope', function ($scope) {
	    console.log('pumpComponentCtrl');
	
	}])
	.controller('pumpControlPannelCtrl',['$scope','$rootScope', function ($scope,$rootScope) {
	    console.log('pumpControlPannelCtrl');
	    $('.close').click(function (e) {
	        $(e.target).parents('.pump-control-pannel').removeClass('active');
	    });
	    $('.pump-start-btn').click(function (e) {
	        console.log('start pump');
	        $rootScope.pumpIsRunningControl(e,1);
	
	    });
	    $('.pump-stop-btn').click(function (e) {
	        console.log('stop pump');
	        $rootScope.pumpIsRunningControl(e,false);
	    });
	}])
	.directive('iasTpl', function () {
	    return {
	        restrict:'EA',
	        scope:{
	            sysName:'@'
	        },
	        template:'<div><div class="back-ahead"><a href class="back">《</a><a href class="ahead">》</a></div><div class="title-tag">{{sysName}}</div></div> ',
	        replace:true
	    }
	})
	//舱室信息
	.directive('iasTankMessage', function () {
	    return{
	        restrict:'EAC',
	        scope:{
	            tankName:'@',
	            persent:'@',
	            volume:'@',
	            quality:'@'
	        },
	        templateUrl:'app/menus/directiveTpl/tankMessageTpl.html',
	        replace:true
	    }
	})
	//色块指令
	.directive('iasColorBlock', function () {
	    return{
	        restrict:'EAC',
	        scope:{
	            wi:'@',
	            he:'@',
	            color:'@'
	        },
	        templateUrl:'app/menus/directiveTpl/colorBlock.html',
	        replace:true
	    }
	})
	//泵浦指令
	.directive('iasPumpBody', function () {
	    return{
	        restrict:'EAC',
	        scope:{
	            size:'@',
	            localRemote:'@',
	            isRunning:'@'
	        },
	        templateUrl:'app/menus/directiveTpl/pumpBody.html',
	        replace:true,
	        controller: 'pumpBodyCtrl'
	    }
	})
	//泵浦弹出控制窗口
	.directive('iasPumpControlPannel', function () {
	    return{
	        restrict:'EAC',
	        scope:{
	            speed:'@',
	            pumpName:'@'
	        },
	        templateUrl:'app/menus/directiveTpl/pumpControlPannel.html',
	        replace:true,
	        controller:'pumpControlPannelCtrl'
	    }
	})
	//完整泵浦
	.directive('iasPumpComponent', function () {
	    return{
	        restrict:'EAC',
	        scope:{
	            si:'@',
	            lR:'@',
	            isR:'@',
	            sp:'@',
	            pumpName:'@'
	        },
	        templateUrl:'app/menus/directiveTpl/iasPumpComponent.html',
	        replace:true,
	        controller:'pumpComponentCtrl'
	    }
	});
}



