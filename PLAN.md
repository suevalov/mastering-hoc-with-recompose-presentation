# Mastering HOC with Recompose

https://github.com/jxnblk/rebass-recomposed
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.t7htc0s57
http://jaketrent.com/post/smart-dumb-components-react/
https://www.sitepoint.com/react-higher-order-components/
https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.mg9vt8j7x
http://jamesknelson.com/structuring-react-applications-higher-order-components/
https://www.youtube.com/watch?v=zD_judE-bXk

We will explore a couple of typical situations, 
where using a utility function makes sense by
either removing boilerplate or making the code more
readable.

* What are higher-order components?
* What are some use cases? Trade-offs?

## High Order Components

High order components are functions that expect
a component and return a new component.

`HOC :: Component -> Component`

### mapping props

mapProps expects a mapping function which returns a 
function that itself awaits a component.


