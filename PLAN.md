# Mastering HOC with Recompose

https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.mg9vt8j7x
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
anyway let's do a recap to be sure that we're all on the same page.

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

Radium is a library that enhances the capability of inline styles by 
enabling CSS pseudo selectors inside inline-styles.

Following is a short technical explanation of Radium's inner workings:

* Wrap the render function
* Recurse into the result of the original render
* For each element:
  * Add handlers to props if interactive styles are specified, e.g. onMouseEnter for :hover, wrapping existing handlers if necessary
  * If any of the handlers are triggered, e.g. by hovering, Radium calls setState to update a Radium-specific field on the components state object
  * On re-render, resolve any interactive styles that apply, e.g. :hover, by looking up the element's key or ref in the Radium-specific state

## Slide 8. `relay` example

Slightly different signature, but anyway it's a HOC. Relay takes a component,
passes down some props, in this case the date that is being fetched from 
GraphQL Endpoint. Actually, it's not only passes down props, but delay
rendering until data dependency is resolved.

So, these three examples `connect`, `radium` and `relay` have different
signatures, some different use cases, but each time you enhance the 
behaviour of component by wrapping it by HOC.

## Slide 9. What can I do with HOCs?

At high level HOC enables you to:

* Code reuse, logic abstraction
* Render Highjacking
* State abstraction and manipulation
* Props manipulation

We will see this items in more detail soon but first, we are going 
to study the ways of implementing HOCs because the implementation 
allows and restricts what you can actually do with an HOC.

## Slide 10. How do HOCs work?

How is it possible to change behavior of component from the outside?
There're two ways to do that.

1. Props Proxy / Parametrized Container Components
2. Inheritance Inversion

## Slide 11. Props Proxy

What can be done with Props Proxy?

* Manipulating props
* Wrapping the WrappedComponent with other elements
* Abstracting State

### Manipulating Props

You can read, add, edit and remove the props that are being passed 
to the WrappedComponent.

**Describe the code**

The important part here is that the render method of the HOC returns 
a React Element of the type of the WrappedComponent.

### Wrapping the WrappedComponent with other elements

### Abstracting state

You can abstract state by providing props and callbacks to the WrappedComponent, 
very similar to how container components will deal with presentational components.
Let's review this pattern first.

## Slide 12. Container vs Presentational Components

There's pattern in React that separating components according to certain
types of responsibilities they have.

## Slide 13. Presentational Components. Post component example

Some components are designed to be purely presentational. They simply
accept props and return React elements.

## Slide 14. Container Components. PostContainer example.

Another components perform more complex tasks, like managing 
subscriptions, fetching stuff, other business logic. These components
are called Containers. They do all the heavy job before passing
down props to 'light' presentational component, which is easy
testable and reusable. Some people call these Smart vs. Dumb components.

inheritance inversion
naming using display name
using as decorator

recompose
how it started

-----------------------------------------------------------------------

How do Higher-Order Components help me Structure My Application?

Where patterns involve writing out code with a single purpose multiple 
times across many components, HOCs allow you to confine code with 
a single aim to a single place. Or in fancy talk, HOCs can help 
your application achieve separation of concerns.


The core rule is that quality HOCs do one thing, and do it well. 
A HOC should perform a task which is clearly defined, 
and unrelated to other tasks.

- Will component code be clearer when using the HOC? 
- Well-designed HOCs indicate what they actually do; patterns spend a long time explaining how they do it.

- Will the application be easier to maintain with the HOC?
- Confining code with a single purpose to a single location 
  means updates to the code only need to happen in one place – 
  not across the entire codebase.
  
- Can the HOC be re-used in other applications?
- Reusable components indicate good separation from the application’s internals.


