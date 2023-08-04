/**
 * @jest-environment jsdom
 */

import { commentsCounter } from './commentsCounter.js';

describe('Test the pokemon comments counter', () =>{
  document.body.innerHTML = `
    <h2 id='commentsCounter'>Comments (0)</h2>
    <div id="commentsContainer"></div>
  `

  const container = document.querySelector('#commentsContainer')

  test.each(
    [
      {
        comments:()=>{let html = ''
          for (let i = 0; i<5;i+=1){
            html += '<p class="comment"></p>'
          }
          return html
        },
        result : 5
      },
      {
        comments:()=>{let html = ''
          for (let i = 0; i<15;i+=1){
            html += '<p class="comment"></p>'
          }
          return html
        },
        result : 15
      },
      {
        comments:()=>{let html = ''
          for (let i = 0; i<30;i+=1){
            html += '<p class="comment"></p>'
          }
          return html
        },
        result : 30
      }
    ]
  )('Test comment counter',({comments,result})=>{
    container.innerHTML=comments()
    commentsCounter()
    const counter = document.querySelector('#commentsCounter')
    expect(counter.innerHTML).toBe('Comments ('+result+')')
  })
})