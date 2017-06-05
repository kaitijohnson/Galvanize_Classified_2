// var app = angular.module('app', []);
(function() {
  'use strict'

  angular.module('app').component('feed', {
    controller: controller,
    template: './js/classifieds/classifieds.html'
  })

  controller.$inject = ['classService', '$state']

  function controller(classService, $state) {
    const vm = this

    vm.$onInit = onInit
    vm.getIt = getIt
    vm.togglePostForm = togglePostForm
    vm.addPost = addPost

    function onInit() {
      getIt()
    }

    function getIt() {
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
