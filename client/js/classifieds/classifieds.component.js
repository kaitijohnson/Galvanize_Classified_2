// var app = angular.module('app', []);
(function() {
  'use strict'

  angular.module('app').component('classifieds', {
    controller: controller,
    template: './js/classifieds/classifieds.html'
  })

  controller.$inject = ['classService', '$state']

  function controller(classService, $state) {
    const vm = this

    vm.$onInit = onInit
    vm.getAds = getAds
    vm.togglePostForm = togglePostForm
    vm.getClass = getClass
    vm.postClass = postClass
    vm.updateClass = updateClass
    vm.deleteClass = deleteClass

    function onInit() {
      getAds()
    }

    function getAds() {
      classService.getClass()
      .then(classifieds => {
        vm.classifieds = classifieds
      })
    }

    function togglePostForm() {
      vm.newPost = !vm.newPost
    }

    function addPost() {
      vm.post.publishedAt = Date.now()
      vm.posts.push(vm.post)
      vm.togglePostForm()
      delete vm.post
    }
  }
}());
