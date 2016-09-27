# Mastering HOC with Recompose

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.t7htc0s57
https://www.sitepoint.com/react-higher-order-components/
https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.mg9vt8j7x
http://jamesknelson.com/structuring-react-applications-higher-order-components/
https://www.youtube.com/watch?v=zD_judE-bXk
https://github.com/jxnblk/rebass-recomposed
https://www.youtube.com/watch?v=MyX4Et5fqlY

## Slide 1. Intro

Hi everybody! My name is Alex Suevalov and i'm a front-end
guy at DataArt. Just recently relocated to Wrocław from 
rainy and windy Saint-Petersburg. Really glad to be here!

## Slide 2. Plan.

On this talk, I'm gonna do a deep dive on Higher Order Components.
You might be familiar with it already, almost certainly used it
continuously or not.

The first think I'm gonna talk about is what higher-order components 
are and how they work. Then I'm gonna illustrate some use cases 
and trade off they bring. And finally, I'll share my experience 
of using `recompose` library - a utility belt for function 
components and higher-order components. We will explore a couple 
of typical situations, where using a utility function 
makes sense by either removing boilerplate, making the code 
more readable or easier to refactor later.

## Slide 3-5. What are HOC?

As I've already mentioned you might be familiar with HOC, but
anyway let's do a recap to be sure that we're on the same page.

Higher-Order Component is a really fancy name for a really
simple concept. It's a function that accepts the component and 
returns a new component which behavior is enhanced.

That's really it.

They might also accept some additional parameters.
Or they might use currying. Actually there's a really good reason
for that. We'll take a look on that later.

Regardless of concrete signature, if you have a function that accept
one component and returns another component - it's HOC.

## Slide 6. `connect` example

Let's take a look on concrete examples.
Probably the most familiar is `connect` from `react-redux` library.

## Slide 7. `radium` example

Following is a short technical explanation of Radium's inner workings:

* Wrap the render function
* Recurse into the result of the original render
* For each element:
  * Add handlers to props if interactive styles are specified, e.g. onMouseEnter for :hover, wrapping existing handlers if necessary
  * If any of the handlers are triggered, e.g. by hovering, Radium calls setState to update a Radium-specific field on the components state object
  * On re-render, resolve any interactive styles that apply, e.g. :hover, by looking up the element's key or ref in the Radium-specific state

## Slide 8. `relay` example

TBD

## Slide 9. How do HOCs work?
