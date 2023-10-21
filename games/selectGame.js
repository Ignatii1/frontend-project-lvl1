#!/usr/bin/env node

import readlineSync from 'readline-sync';
import cliGame from '../src/cliGame.js';

import calc from './calc.js';
import even from './even.js';
import progression from './progression.js';
import prime from './prime.js';
import gcd from './gcd.js';

const gameSet = [even, calc, gcd, progression, prime];
const gameSetShow = ['even', 'calc', 'gcd', 'balance', 'progression', 'prime'];
const cancel = -1;

const selectGame = () => {
  console.log('Welcome to Brain Games!');

  while (true) { // Keep running the game selection loop
    const questionSelect = readlineSync.keyInSelect(gameSetShow, 'What game would you like to play?\n');

    if (questionSelect === cancel) {
      console.log('Good bye!');
      return; // Exit the loop and the function
    }

    cliGame(gameSet[questionSelect]); // Run the selected game

    const questionPlayOrExit = readlineSync.question(`\nWould you like to play another game?\n
Press ENTER to return to the menu,
Otherwise answer "no" to exit. `);

    if (questionPlayOrExit === 'no') {
      console.log('Good bye!');
      return; // Exit the loop and the function
    }
  }
};

export default selectGame;
