// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function Wrapper({children}) {
  return <ThemeProvider>{children}</ThemeProvider>
}

function contexRender(ui, options) {
  return render(ui, {wrapper: Wrapper, ...options})
}

test('renders with the light styles for the light theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  // render(<EasyButton>Easy</EasyButton>)
  // const button = screen.getByRole('button', {name: /easy/i})
  // expect(button).toHaveStyle(`
  //   background-color: white;
  //   color: black;
  // `)
  //
  // 🐨 update the `render` call above to use the wrapper option using the
  // ThemeProvider

  contexRender(<EasyButton>Easy</EasyButton>)
  //screen.debug()
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

/* eslint no-unused-vars:0 */
