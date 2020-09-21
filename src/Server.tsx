import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { App } from 'App'
import { Html } from './Html/Server'

const port = 3000
const server = express()
const jsFiles: Array<string> = []

fs.readdirSync('./dist/assets').forEach(file => {
    if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
})

server.use('/assets', express.static('./dist/assets'))

server.get('*', async (req, res) => {
    ReactDOMServer.renderToNodeStream(<Html scripts={jsFiles}>
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>
    </Html>).pipe(res)
})

server.listen(port, () => console.log(`Listening on port ${port}`))