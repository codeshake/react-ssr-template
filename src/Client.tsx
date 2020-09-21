import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
} from 'react-router-dom'
import { App } from 'App'

const entryBlock = document.getElementById('root')

if (entryBlock.hasChildNodes() === true) {
    ReactDOM.render(<BrowserRouter>
        <App />
    </BrowserRouter>, entryBlock)
} else {
    ReactDOM.hydrate(<App />, entryBlock)
}