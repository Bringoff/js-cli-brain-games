#!/usr/bin/env node

import { gameDescription, generateQuestionItem } from '../src/games/gcd-game.js';
import startGame from '../src/index.js';

startGame(gameDescription, generateQuestionItem);