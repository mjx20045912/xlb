'use strict';

/**
 * @ngdoc function
 * @name xlbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xlbApp
 */
angular.module('xlbApp')
  .controller('ResultSearchCtrl',function () {
    var list = [
        {
            image:"images/people1.jpeg",
            name:"Yuchen Zhang",
            description:"William Shakespeare was an English poet, playwright and actor, widely regarded as both the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the \"Bard of Avon\"."
        },
        {
            image:"images/people2.jpg",
            name:"jianxun ma",
            description:"William Shakespeare was an English poet, playwright and actor, widely regarded as both the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the \"Bard of Avon\"."
        },
        {
            image:"images/people1.jpeg",
            name:"Yuchen Zhang",
            description:"William Shakespeare was an English poet, playwright and actor, widely regarded as both the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the \"Bard of Avon\"."
        },
        {
            image:"images/people2.jpg",
            name:"jianxun ma",
            description:"William Shakespeare was an English poet, playwright and actor, widely regarded as both the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the \"Bard of Avon\"."
        }
    ] 

    this.resultList = list;

    this.search = function(){
        var filter = this.filterString;
        this.resultList = _.filter(list, function(p) { return p.name.indexOf(filter) >=0; });
    }

  });