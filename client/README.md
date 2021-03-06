# Reddit Clone

Create an Angular application that's a Reddit clone.

## Setup

Run `yarn` and `npm start` to see the app locally.

Run `npm test` to run the tests.

> Check the "test/screenshots" folder for examples of what each test is looking for.

## Stock images

https://www.pexels.com/search/hipster/

## HTML Snippets

If you are using Bootstrap, your HTML snippets might look like this:

```html
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand">Reddit Clone</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    </div>
  </div>
</nav>

<main class="container">

  <div class="pull-right">
    <p><a class="btn btn-info">New Post</a></p>
  </div>

  <ul class="nav nav-pills">
    <li role="presentation" class="active">
      <input type="search" class="form-control input-sm search-form" placeholder="Filter">
    </li>
    <div class="form-inline">
      <label for="sort">  Sort by </label>
      <select class="form-control" id="sort">
        <option>Some text</option>
        <option>Some text</option>
      </select>
    </div>
  </ul>

  <div class="row">
    <div class="col-md-8">

      <form>
        <div>
          <label for="title">Title</label>
          <input id="title" class="form-control">
        </div>
        <div>
          <label for="body">Body</label>
          <textarea id="body" class="form-control"></textarea>
        </div>
        <div>
          <label for="author">Author</label>
          <input id="author" class="form-control">
        </div>
        <div>
          <label for="image-url">Image URL</label>
          <input id="image-url" class="form-control">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            Create Post
          </button>
        </div>
      </form>

    </div>
  </div>

  <div class="row">
    <div class="col-md-12">

      <div class="well">
        <div class="media-left">
          <img class="media-object">
        </div>
        <div class="media-body">
          <h4 class="media-heading">
            Some Text
            |
            <a><i class="glyphicon glyphicon-arrow-up"></i></a>
            <a><i class="glyphicon glyphicon-arrow-down"></i></a>
            10
          </h4>
          <div class="text-right">
            Some Author
          </div>
          <p>
            Some text
          </p>
          <div>
            Some time ago
            |
            <i class="glyphicon glyphicon-comment"></i>
            <a>
              Some comments
            </a>
          </div>
          <div class="row">
            <div class="col-md-offset-1">
              <hr>
              <p>
                Comment text
              </p>
              <form class="form-inline">
                <div class="form-group">
                  <input class="form-control">
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-primary">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</main>
```
