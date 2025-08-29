# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer: Finds the HTML element whose id attribute is specified, and finds HTML elements that have the same class. Finds the first matching element with a CSS selector.Finds all matching elements with a CSS selector.

# How do you create and insert a new element into the DOM?

answer:Creating and inserting a new element into the Document Object Model (DOM) in JavaScript involves two main steps: creating the element and then attaching it to an existing part of the DOM tree.

# What is Event Bubbling and how does it work?

answer:Event bubbling is a browser mechanism where a DOM event, like a click, originates at a target element and then propagates upwards through its parent elements and ancestors until it reaches the document's root.

# What is Event Delegation in JavaScript? Why is it useful?

answer:Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each child. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to its parent elements in the DOM tree.

# What is the difference between preventDefault() and stopPropagation() methods?

answer:The preventDefault() and stopPropagation() methods in JavaScript, while both dealing with event handling, serve distinct purposes.
preventDefault():
This method prevents the browser's default action associated with a specific event. For instance, clicking a link typically navigates to the URL specified in its href attribute.
stopPropagation():
This method halts the propagation (or bubbling/capturing) of an event through the Document Object Model (DOM) tree. When an event occurs on an element, it typically propagates up (bubbling phase) or down (capturing phase) the DOM hierarchy, triggering event listeners on parent or child elements.
