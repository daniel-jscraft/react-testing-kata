import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from '../../examples/pokemon-info-app'

const errorMessageUnknownPokemon = "error message unknown pokemon"

const server = setupServer(
    rest.post('https://graphql-pokemon2.vercel.app/', (req, res, ctx) => {
        if(req.body.variables.name === 'mew') {
            return {"data":{"pokemon":{"id":"UG9rZW1vbjoxNTE=","number":"151","name":"Mew","image":"https://img.pokemondb.net/artwork/mew.jpg","attacks":{"special":[{"name":"Dragon Pulse","type":"Dragon","damage":65},{"name":"Earthquake","type":"Ground","damage":100},{"name":"Fire Blast","type":"Fire","damage":100},{"name":"Hurricane","type":"Flying","damage":80},{"name":"Hyper Beam","type":"Normal","damage":120},{"name":"Moonblast","type":"Fairy","damage":85},{"name":"Psychic","type":"Psychic","damage":55},{"name":"Solar Beam","type":"Grass","damage":120},{"name":"Thunder","type":"Electric","damage":100}]}}}}
        } 
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

test(`it should not call the server if pokemon name is empty`, async () => {
    const serverCallback = jest.fn()

    server.use(
        rest.post(
            'https://graphql-pokemon2.vercel.app/',
            serverCallback
        ),
    )

    render(<App />)
    await userEvent.click(screen.getByRole('button', {name: /submit/i}))
    expect(serverCallback).toBeCalledTimes(0)
})


test(`it should set the loading idicator when a new valid call is made`, async () => {
    render(<App />)
    await userEvent.type(screen.getByLabelText(/name/i), 'someRandomNameHere')
    await userEvent.click(screen.getByRole('button', {name: /submit/i}))

    expect(screen.getByText(/loading/i)).toBeVisible()
})


test(`it should return an error if unknown pokemon name`, async () => {
    render(<App />)
    await userEvent.type(screen.getByLabelText(/name/i), 'someRandomNameHere')
    await userEvent.click(screen.getByRole('button', {name: /submit/i}))

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

    expect(screen.getByRole('alert')).toBeVisible()
})

test(`it should show the pokemon info if all is ok`, async () => {
    render(<App />)
    await userEvent.type(screen.getByLabelText(/name/i), 'mew')
    await userEvent.click(screen.getByRole('button', {name: /submit/i}))

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

    expect(screen.getByText('Hyper Beam')).toBeVisible()
})