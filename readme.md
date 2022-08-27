# TypeScript Sounding Board

## What does this solve?

Often, I just want to try out writing a small script or test a package and this project is something I can do a quick check in the absence of a proper TypeScript REPL. It's also configured with Jest, to allow for a TDD approach as well.

## Usage

Right out the gate, you can start testing a script in the `index.ts` file and run `npm start` to see what the output is. Often, or at least in my case, I might want to test out a very specific JavaScript API in isolation of the project or context I am working in. I may want to try out an array method I don't often use and forgot, maybe a small function to format a Date, probably anything with Math, these are all examples of when I would want to use a project like this to make sure my code passes the type checks and can run.

At the same time, I may not want to show these basic notes to the world, but would like to keep them locally as references for later. For this use case, `scripts` and `__tests__/scripts` have been added to `gitignore`, so I can have scripts and tests that don't get checked in, and I can continue to update this project as needed.
