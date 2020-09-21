import React from 'react'
import {
    Link,
    Switch,
    Route,
} from 'react-router-dom'
import { Pages } from 'Pages/Routes'

export function App() {
    require('./index.styl')

    return <React.Fragment>
        <div className="menu">
            {Pages.map((page, index) => <Link to={page.link} key={index}>{page.title}</Link>)}
        </div>

        <Switch>
            {Pages.map((page, index) => <Route exact path={page.link} component={page.component} key={index} />)}
        </Switch>
    </React.Fragment>
}