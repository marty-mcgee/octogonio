import React from 'react'
//import { Route, IndexRoute, Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Main from './containers/Main'

// [MM] chat
// import SignIn from './components/SignIn'
// //import ChatContainer from './containers/ChatContainer'
// import SignUp from './components/SignUp'
// import WelcomePage from './components/WelcomePage'
// //import App from './containers/App'
// import {checkAuth} from './actions/authActions'
// const requireAuth = (nextState, replace) => {
//     if(!checkAuth()) {
//         return replace(null, '/signin')
//     }
// }
// <Route path="/" component={App}>
//     <IndexRoute component={WelcomePage} />
//     <Route path="/welcome" component={WelcomePage} />
//     <Route path="/signin" component={SignIn} />
//     <Route path="/signup" component={SignUp} />
//     <Route path="/chat" component={ChatContainer}>
//     </Route>
// </Route>

// [MM] polling
import Audience from './components/Audience'
import Speaker from './components/Speaker'
import Board from './components/Board'
// <Route path="/" component={APP}>
//     <DefaultRoute handler={Audience} />
//     <Route name="speaker" path="/speaker" handler={Speaker} />
//     <Route name="board" path="/board" handler={Board} />
// </Route>


export default (
    <Switch>
        <Route exact path="/" component={Main}>
            <Redirect from='/**/share/:shareID' to='share/:shareID' />
            <Route path="share/:shareID" id="share" />
            <Route path="preset/:presetID" id="preset" />
            <Route path="sequences" id="sequences" />
            <Route path="instruments" id="instruments" />
            <Route status={404} path="*" />
        </Route>
    </Switch>
)
