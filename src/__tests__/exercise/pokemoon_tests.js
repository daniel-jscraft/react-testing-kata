import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from '../../examples/pokemon-info-app'

const errorMessageUnknownPokemon = "error message unknown pokemon"

const server = setupServer(
    rest.post('https://graphql-pokemon2.vercel.app/', (req, res, ctx) => {
        //return res(ctx.json({}))
        return res(ctx.status(400), ctx.json({message: errorMessageUnknownPokemon}))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test(`it should ask the user to search for a pokemoon `, () => {
    render(<App />)
    expect(screen.getByText('Submit a pokemon')).toBeVisible()
})

// test(`it should not call the server if pokemon name is empty`, async () => {
//     const serverCallback = jest.fn()

//     server.use(
//         rest.post(
//             'https://graphql-pokemon2.vercel.app/',
//             serverCallback
//         ),
//     )

//     render(<App />)
//     await userEvent.click(screen.getByRole('button', {name: /submit/i}))
//     await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))
//     expect(serverCallback).toBeCalledTimes(0)
// })


test(`it should return an error if unknown pokemon name`, async () => {

    render(<App />)
    await userEvent.type(screen.getByLabelText(/name/i), 'someRandomNameHere')
    await userEvent.click(screen.getByRole('button', {name: /submit/i}))

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

    expect(screen.getByRole('alert')).toBeVisible()
})