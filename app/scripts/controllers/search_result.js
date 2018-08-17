'use strict';

/**
 * @ngdoc function
 * @name xlbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xlbApp
 */
angular.module('xlbApp')
  .controller('ResultSearchCtrl',function ($scope) {
    var list = [
        {
            image:"images/yucheng.jpeg",
            name:"Yuchen Zhang",
            description:"House Clean<br/>Fix Water Pipe<br/>Repair Toilet"
        },
        {
            image:"images/jianxun.png",
            name:"Jianxun Ma",
            description:"Paint Wall<br/>Repair Toilet<br/>Sewer Clean"
        },
        {
            image:"images/zhuowen.png",
            name:"Zhuowen Fan",
            description:"Check & Repair Circuit<br/>Mowing the Lawn<br/>Paint the Wall"
        },
        {
            image:"images/yingying.png",
            name:"Yingying Chen",
            description:"Repair Computer<br/>Gardening<br/>Mowing the Lawn"
        },
        {
            image:"images/wenting.png",
            name:"Wenting Yan",
            description:"Change bulb<br/>Repair the Roof<br/>Paint Wall"
        },
        {
            image:"images/changhui.jpg",
            name:"Hui Change",
            description:"Fix Water Faucet<br/>Clean Sewer<br/>House Clean"
        },
        {
            image:"images/haipeng.jpeg",
            name:"Haipeng Liu",
            description:"Repair Computer<br/>Check & Repair Circuit<br/>House Clean"
        },
        {
            image:"images/chenyu.jpeg",
            name:"Yu Chen",
            description:"Change Bulb<br/>Gardening<br/>Paint Wall"
        }
    ] 

    this.resultList = list;

    this.search = function(){
        var filter = this.filterString || "";
        $scope.data.pplist = $scope.data.pplist.concat(list);
        console.log($scope.data);
        
        this.resultList = _.filter(list, function(p) { return p.description.indexOf(filter) >=0; });
    }

  });