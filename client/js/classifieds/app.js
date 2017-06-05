// var app = angular.module('app', []);

(function() {
  'use strict'

  angular.module('app')
    .component('feed', {
      controller: controller,
      template: './js/classifieds/classifieds.html'
    })

  controller.$inject = ['classService', '$state']

  function controller() {
    const vm = this

    vm.$onInit = onInit
    vm.togglePostForm = togglePostForm
    vm.addPost = addPost
    vm.addComment = addComment
    vm.upVote = upVote
    vm.downVote = downVote

    function onInit() {
      vm.posts = [{
          title: "The Real Slim Shady",
          body: "Please stand up.",
          author: "Eminem",
          image: "https://images.pexels.com/photos/70402/pexels-photo-70402.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
          publishedAt: 1396621153000,
          votes: 13,
          comments: []
        },
        {
          title: "Oops",
          body: "I did it again.",
          author: "Britney Spears",
          image: "https://images.pexels.com/photos/6342/woman-notebook-working-girl.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
          publishedAt: 1355314332000,
          votes: 2,
          comments: []
        },
        {
          title: "Push it",
          body: "Push it real good.",
          author: "Salt-N-Pepa",
          image: "https://images.pexels.com/photos/30868/pexels-photo-30868.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
          publishedAt: Date.now(),
          votes: 5,
          comments: []
        }
      ]
    }

    function togglePostForm() {
      vm.newPost = !vm.newPost
    }

    function addPost() {
      vm.post.votes = 0
      vm.post.publishedAt = Date.now()
      vm.post.comments = []
      vm.posts.push(vm.post)
      vm.togglePostForm()
      delete vm.post
    }

    function addComment(post) {
      // console.log('add comment clicked')
      post.comments.push(post.newComment)
      delete post.newComment
    }

    function upVote(post) {
      post.votes++
    }

    function downVote(post) {
      if (post.votes === 0) return
      post.votes--
    }
  }
}());
