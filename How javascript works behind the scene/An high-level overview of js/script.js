'Use strict';
// Javascript is a high-level object-oriented,multi-paradigm programming language

// Javascript is a high-level, prototype-based object-oriented,
// multi-paradigm, interpreted or just-in-time compiled,
// dynamic, single-threaded, garbage-collected programming language with first-class
// functions and a non-blocking event loop concurrency model

// Paradigm: An approach and mindset of structuring code, which will 
// direct your coding style and technique

// 1. Procedural programming
// 2. Object-oriented programming
// 3. Functional programming

// First-class functions: passing a function into another function as an argument

/*
concurrency model: how the javascript engine handles multiple tasks
happening at the same time

we need that because

javascript runs in one single thread, so it can only do one thing at a time

and what about a long running task

sounds like it would block the single thread. however, we want non-blocking behaviour!

we achieve that

by using an event loop: takes long running tasks, executes them in the
'background', and puts them back in the main thread once they are finished
*/