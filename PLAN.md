# Mastering HOC with Recompose

## Slide 1. Intro

Introduce.

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
passes down some props, in this case the data that is being fetched from 
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

## Slide 14-16. Container Components. PostContainer example.

Another components perform more complex tasks, like managing 
subscriptions, fetching stuff, other business logic. These components
are called Containers. They do all the heavy job before passing
down props to 'light' presentational component, which is easy
testable and reusable. Some people call these Smart vs. Dumb components.

## Slide 17. Proxy Pass & Inheritance Inversion
## Slide 18. Trivial Inheritance Inversion example

As you can see, the returned HOC class (Enhancer) extends the WrappedComponent. 
It is called Inheritance Inversion because instead of the WrappedComponent 
extending some Enhancer class, it is passively extended by the Enhancer. 
In this way the relationship between them seems inverse.

Inheritance Inversion allows the HOC to have access to the WrappedComponent 
instance via this, which means it has access to the state, props, component 
lifecycle hooks and the render method.

React Elements describe what is going to be rendered when React runs it’s reconciliation process.

Inheritance Inversion High Order Components don’t have a guaranty of having the full children tree resolved.

## Slide 19. Extended examples of Inheritance Inversion

What can you do with Inheritance Inversion?

* Render Highjacking
* Manipulating state

### Render Highjacking

It is called Render Highjacking because the HOC takes control of the render output of the 
WrappedComponent and can do all sorts of stuff with it.

In Render Highjacking you can:
* Read, add, edit, remove props in any of the React Elements outputted by render
* Read, and modify the React Elements tree outputted by render
* Conditionally display the elements tree
* Wrapping the element’s tree for styling purposes (as shown in Props Proxy)

You cannot edit or create props of the WrappedComponent instance, 
because a React Component cannot edit the props it receives, 
but you can change the props of the elements that are outputted from the render method.

You can do all sorts of stuff in here, you can traverse the entire elements tree and 
change props of any element in the tree. This is exactly how Radium does its business.

### Manipulating state

The HOC can read, edit and delete state of the WrappedComponent instance, 
and you can also add more state if you need to. Remember that you are messing 
with the state of the WrappedComponent which can lead to you breaking things.


## Slide 20. Composing HOCs


## Slide 21. Recompose

Ok, looks like we solid with what HOCs are and how we can use then in our applications.
It's time to talk about library that significally has changed the way I write my React
applications in a really short time.

It's Recompose. Open-sourced by Andrew Clark, co-creator of Redux, in 2015.
It's React utility belt for function components and higher-order components. Like Lodash, but for React.

I always start with presentational components, as I think, as a lot people do nowdays.
It's just nothing expect accepting props and returning React elements.
It's a good approach cause it forces you to think about the contract between different
parts of your application.

And only after the presentational component is done, then I add a container component which
do more complicated things.

But at some point you realized that you need to add, let's say, some lifecycle hook, add a state, or
class property for event handling. You have to create another container component
or convert you perfectly polished functional component to class. Pain.

Recompose helps you to ease the pain and enhance your presentational component by gradually using composition.

## Slide 22. What can you do with Recompose

Using Recompose you can do a lot of things.

For example - lift state into functional wrappers.


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

-----
IT NonStop – это серия международных IT конференций, которые организованы DataArt
 
IT NonStop is a series of conferences organized by DataArt, a global technology consulting firm. 
IT NonStop conferences are held in 10 cities across Poland, Ukraine, and Russia. 
Each of the conferences is focused on a particular aspect of IT development but all of them are dedicated to specific projects and practical solutions.
 
В этом году конференция во Вроцлаве будет 10 декабря 2016 года. Вход для участников бесплатный по предварительной регистрации. Формуляр для регистрации на сайте. Конференция посвящена фронт-енд разработке.
 
Вот описание:
Nowadays front-end development consists of elegant code 
and masterful solutions which can be achieved by JavaScript, 
AngularJS and other frameworks, layouts, rich media, design and many other tools. 
We will talk about standards, elegant solutions and the latest trends of front-end development. 
Сomplex things in simple terms, that is the beauty of front-end.
 
Заявки от спикеров принимаем до 15 октября. Язык конференции английский.
Спикерам компенсируем проживание, проезд, обед.
Будет онлайн трансляция и все записи будут доступны на канале ютуб после конференции в открытом доступе.
Сайт конференции it-nonstop.net
Через сайт можно подать тему, а также зарегестрироваться на конференцию.
 