'use strict';

angular.module('xlbApp').controller(
  'ProfileCtrl',
  function () {
    this.editProfileSwitch = function () {
      this.editingProfile = !this.editingProfile;
    };

    this.addSkillSwitch = function () {
      this.addingSkill = !this.addingSkill;
    };
  }
);
