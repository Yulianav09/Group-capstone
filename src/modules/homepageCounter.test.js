/**
 * @jest-environment jsdom
 */

import homepageCounter from './homepageCounter';

describe('Test the pokemon cards counter', () => {
  document.body.innerHTML = `
    <header>
      <ul id="navigationLinks">
        <li id="pokemonCounter">Pokemons(0)</li>
      </ul>
    </header>
    <main>
      <div id="container"></div>
    </main>`;

  const container = document.querySelector('#container');

  test.each(
    [
      {
        cards: () => {
          let html = '';
          for (let i = 0; i < 5; i += 1) {
            html += '<div class= "pokemonItem"></div>';
          }
          return html;
        },
        result: 5,
      },
      {
        cards: () => {
          let html = '';
          for (let i = 0; i < 15; i += 1) {
            html += '<div class= "pokemonItem"></div>';
          }
          return html;
        },
        result: 15,
      },
      {
        cards: () => {
          let html = '';
          for (let i = 0; i < 30; i += 1) {
            html += '<div class= "pokemonItem"></div>';
          }
          return html;
        },
        result: 30,
      },
    ],
  )('Test cards counter', ({ cards, result }) => {
    container.innerHTML = cards();
    homepageCounter();
    const counter = document.querySelector('#pokemonCounter');
    expect(counter.innerHTML).toBe(`Pokemons(${result})`);
  });
});