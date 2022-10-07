# TypeScript Sounding Board

## What does this solve?

Often, I just want to try out writing a small script or test a package and this project is something I can do a quick check in the absence of a proper TypeScript REPL. It's also configured with Jest, to allow for a TDD approach as well. Often, or at least in my case, I might want to test out a very specific JavaScript API in isolation of the project or context I am working in. I may want to try out an array method I don't often use and forgot, maybe a small function to format a Date, probably anything with Math, these are all examples of when I would want to use a project like this to make sure my code passes the type checks and can run.

## Concept

Right out the gate, you can start using `index.ts` file as scratch paper, try out your scripts and run `npm start` to run them. In the `__tests__` folder, you will find a corresponding `index.test.ts` file that has a test case for the entry file. Feel free to adjust this as you need and run `npm test index.test.ts` when ready to run the file. If using Visual Studio Code as your text editor, I recommend the [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) as it allows you to run the test or debug directly from the file.

At the same time, I may not want to show these basic notes to the world, but would like to keep them locally as references for later. Additionally, anyone using this will have their own scripts and may want to pull down updates without having their scripts and notes overwritten. For this use case, `scripts` and `__tests__/scripts` have been added to `gitignore`, so I can have scripts and tests that don't get checked in, and I can continue to update this project as needed. This is the approach I would recommend.

## Project Setup

1. Clone the project

```sh
git clone git@github.com:tiberius-s/typescript-sounding-board.git
```

2. Install it

```sh
cd typescript-sounding-board
npm i
```

3. Create scripts folders

```sh
mkdir scripts __tests__/scripts
```

## Example Usage

Let's say I want to write a script that returns the even numbers out of an array.

1. Create the following files
    - `scripts/get-even-numbers.ts`
    - `__tests__/scripts/get-even-numbers.test.ts`
2. Add the following code to `get-even-numbers.ts`

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function getEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => !(num % 2));
}

const evens = getEvenNumbers(numbers);

console.log(evens);
```

3. `get-even-numbers.ts` can be run using and you'll see the even numbers logged out

```sh
npm run script --file=get-even-numbers

# should print [2, 4, 6, 8, 10]
```

4. Add the following code to `get-even-numbers.test.ts`

```js
import '@jest/globals';
import { getEvenNumbers } from '@scripts/get-even-numbers';

describe('scripts/get-even-numbers.ts', () => {
  test('should return 3 even numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = getEvenNumbers(numbers);

    expect(result).toEqual([2, 4, 6]);
  });

  test('should return an empty array', () => {
    const numbers = [1, 3, 5];
    const result = getEvenNumbers(numbers);

    expect(result).toEqual([]);
  });
});
```

5. test file can be run using Jest Runner int the file or the following command

```sh
npm test get-even-numbers
```
