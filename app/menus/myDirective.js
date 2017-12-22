/**
 * Created by Administrator on 2017/5/15.
 */
module.exports=function(iasApp){
	//系统单页顶部标题
	iasApp.directive('iasTpl', function () {
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



