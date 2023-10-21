#!/usr/bin/env node

/* eslint-disable eol-last */
/* trunk-ignore(eslint/import/no-named-as-default) */
/* trunk-ignore(eslint/import/no-named-as-default-member) */
import gameEven from '../games/even.js';
import cliGame from '../src/cliGame.js';

cliGame(gameEven);