// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 add `screen` to the import here:
import {render , screen} from '@testing-library/react'
import Counter from '../../components/counter'
import userEvent from '@testing-library/user-event'

test('counter increments and decrements when the buttons are clicked', async () => {
  const {container} = render(<Counter />)
  // 🐨 replace these with screen queries
  // 💰 you can use `getByText` for each of these (`getByRole` can work for the button too)
  // const [decrement, increment] = container.querySelectorAll('button')
  // const message = container.firstChild.querySelector('div')

  // expect(message).toHaveTextContent('Current count: 0')
  // fireEvent.click(increment)
  // expect(message).toHaveTextContent('Current count: 1')
  // fireEvent.click(decrement)
  // expect(message).toHaveTextContent('Current count: 0')

  const message = screen.getByText('Current count: 0')
  expect(message).toBeVisible()

  const decrement = screen.getByText('Decrement')
  await userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: -1')

  const increment = screen.getByText('Increment')
  await userEvent.click(increment)
  await userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
})
