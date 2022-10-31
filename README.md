### Hexlet tests and linter status:
[![Actions Status](https://github.com/golodnoy/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/golodnoy/frontend-project-44/actions)

<a href="https://codeclimate.com/github/golodnoy/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/ff0571975304c2478de7/maintainability" /></a>

<h2>About project</h2>
<p>
Educational project for studying front-end development - the game 'Brain Games'

* Requirements

The project contains 5 games, the general process of the games is as follows:

1. Getting to know the user
2. Demonstration of the rules of the game
3. The game starts, the first question about the game is displayed for the player to answer.
4. If the answer is correct, the player moves on to the second round. total number of rounds : 3
5. In case of an incorrect answer, the game ends. A message is displayed with information on the player's answer and the correct answer to the question.
6. Upon completion of three rounds in a row with success, the game ends, the player is shown a message with congratulations.

See the file <a href="src/index.js">index.js</a>)

The logic of forming questions and checking the answers of each game is provided individually, see files in  <a href="src/games">games</a> and show demo game
</p>

* Install
```js
make install
```

* Run games 
<p>Games are launched through the terminal. (see commands in <a href="Makefile">Makefile</a>)</p>

```js
brain-even // start game Brain-even
brain-calc // start game Brain-calc
brain-gcd // start game Brain-gcd
brain-progression // start game Brain-progression
brain-prime // start game Brain-prime
```

<h2>Demo games</h2>

<p>Game demos are recorded using ASCIINEMA, if they are not available for viewing at the moment - sorry and write to me.</p>

<h3>Brain-even (Parity check)</h3>

<p>
A random number is shown. It is necessary to answer "yes" if the number is even, or "no" if it is odd. </p>

<a href="https://asciinema.org/a/sKijh3Gt6FUmHMP8rTAiMWKhh" target="_blank"><img src="https://asciinema.org/a/sKijh3Gt6FUmHMP8rTAiMWKhh.svg" /></a>


<h3>Brain-calc (Calculator)</h3>

<p> 
A random mathematical expression is output, for example 55 - 17, which must be calculated and the correct answer recorded.
</p>

<a href="https://asciinema.org/a/p3h33obCMTAG8qNS3s8hbiT7y" target="_blank"><img src="https://asciinema.org/a/p3h33obCMTAG8qNS3s8hbiT7y.svg" /></a>

<h3>Brain-gcd (greatest common divisor - GCD)</h3>

<p> 
Two random numbers are shown, for example, 25 50. It is necessary to calculate and enter the largest common divisor of these numbers.
</p>

<a href="https://asciinema.org/a/jcrF5kgPjFCzNVCnNE34BAMss" target="_blank"><img src="https://asciinema.org/a/jcrF5kgPjFCzNVCnNE34BAMss.svg" /></a>

<h3>Brain-progression (Arithmetic progression)</h3>

<p> 
A series of numbers forming an arithmetic progression is shown, one of the numbers is hidden by two dots. We need to determine this number.</p>

<a href="https://asciinema.org/a/KpdRf7bO2p57SVqOxFvkW0xEr" target="_blank"><img src="https://asciinema.org/a/KpdRf7bO2p57SVqOxFvkW0xEr.svg" /></a>

<h3>Brain-prime(Is it a prime number)</h3>

<p>
A random number is shown. It is necessary to answer "yes" if the number is prime, or "no" if it is not prime.
 </p>

<a href="https://asciinema.org/a/6ZIN4KVcjgwDosFe2qkomh5Ah" target="_blank"><img src="https://asciinema.org/a/6ZIN4KVcjgwDosFe2qkomh5Ah.svg" /></a>

