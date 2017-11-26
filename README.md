# Envato Front End Coding Test

Make sure you read **all** of this document carefully, and follow the guidelines in it. Pay particular attention to the "What We Care About" section.

## Background

Build a static page (`index.html`) that fetches last week's popular items from the [Envato Marketplaces API](http://marketplace.envato.com/api/documentation) and displays them according to `mockup.png`.

Your data source is `http://marketplace.envato.com/api/edge/popular:themeforest.json`. CORS is enabled on this API.

## Getting started

We have supplied an empty HTML, Sass & CoffeeScript file. Though, how you architect the application is up to you.

Logo image assets that you may wish to use are located in `_assets`.

A simple [Gruntfile](http://gruntjs.com/getting-started) is included to help you compile Sass & CoffeeScript (`npm run grunt`). Feel free to edit it, add to it or use another build tool instead (if you do this, provide instructions for us to build your project on OSX).

We've also included a very basic test runner (see the Testing requirement below). Feel free to use your preferred testing framework.

## Requirements

- List items in order of rating, from highest to lowest.

- Show each item's thumbnail image, name and rating. The name and image should link to the item's url. As indicated in the mockup, 5-star items should have a yellow background.

- The page's layout should be responsive.

- Clicking each item's `remove` link should remove it from the list (purely client side, this doesn't need to be communicated to the server or maintained across page reloads).

- All source code should go in the `app` directory. The grunt task (or your alternative) should build a production-ready version of your app into the `build` directory. Don't commit the built files, just provide instructions for us to build it. 

- Where appropriate, provide unit tests for your JavaScript in the `test` directory. We've provided a very basic test runner, but feel free to use another testing framework. 

## What We Care About

First, application code should use Sass and either CoffeeScript or ES2015, even if you're not strong in them. We don't mind if your code isn't perfect. If you're *really* not comfortable in Sass, CoffeeScript, or ES2015 talk to us and we'll work something out. Plain CSS and JavaScript is allowed for testing code.

Feel free to use any libraries you would use if this were a real production app, but remember we're interested in your code & the way you solve the problem, not how well you can use a particular library.

We're interested in your method and how you approach the problem just as much as we're interested in the end result. We'll go through your code with you afterwards, and you can talk to us about how you tackled it, why you chose the approach you did, etc.

Here's what you should aim for:

- Clean, readable, production quality code; would we want to work with your code as part of a bigger codebase?

- Good use of current HTML, CSS, JS & performance best practices.

- Good cross-browser compatibility in the latest versions of popular browsers (Chrome, Firefox, IE, Safari, Opera, any others that you consider important). We'd also like to see your strategy for dealing with older browsers e.g. IE9+.

- Solid testing approach

- Extensible code; adding features will be another exercise when you come back in person.

- **Use git!** This is already a git repo. Commit small changes to it often so we can see your approach, and progress. Include the .git directory in the packaged .tar.gz file you send to us.

We haven't hidden any nasty tricks in the test. Don't overthink it. Just write nice, solid code.

## Submitting The Test

In your project directory, run:

```
tar -czvf firstname_lastname.tar.gz .
```

Then email the generated tar.gz file back to the person that sent you the test.
