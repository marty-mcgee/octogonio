import React, { Component } from 'react'
//import { Router } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
//import routes from 'routes'
import Main from '../containers/Main'
// [MM] -||-
import TrackDragon from '../containers/TrackDragon'
import MenuAppBar from '../components/MenuAppBar'
// import MenuAppDrawer from '../components/MenuAppDrawer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { 
    useNextVariants: true,
  },
})
// [MM] chat
import DevTools from '../containers/DevTools'
import SignIn from '../components/SignIn'
import ChatContainer from '../containers/ChatContainer'
import SignUp from '../components/SignUp'
import Welcome from '../components/WelcomePage'
//import App from '../containers/App'
import {checkAuth} from '../actions/authActions'
const requireAuth = (nextState, replace) => {
  if(!checkAuth()) {
    return replace(null, '/signin')
  }
}
import { CookiesProvider, withCookies } from 'react-cookie'
// [MM] polling
import ioClient from 'socket.io-client'
import Header from './Header'
// [MM] polling
import Audience from './Audience'
import Speaker from './Speaker'
import Board from './Board'
// [MM] rrwa
import { RRWAEngine, actionCreators, webAudioReducer } from 'react-redux-webaudio'
import RRWAExamplesApp from '../components/RRWAExamplesApp'
// [MM] schmix
// import Apple from '../containers/App'
// import Schmix from '../containers/Schmix'
// [MM] audio recorder
//import AudioRecorder from 'react-audio-recorder'
// [MM] audio player
// import { PlayButton, Timer } from 'react-soundplayer/components'
// // it's just an alias for `withSoundCloudAudio` but makes code clearer
// import { withCustomAudio, withSoundCloudAudio } from 'react-soundplayer/addons'
// // audio source
// const streamUrl = 'http://localhost:3003/assets/audio/guitar/sixth-9-chord.mp3'
// // some track meta information
// const trackTitle = 'Great audio by -||- artist'
// const clientId = '1c344815b44361828c71cf2be85e4262';
// const resolveUrl = 'https://soundcloud.com/martymcgee';
// const AWSSoundPlayer = withCustomAudio( props => {
//     const { trackTitle } = props
//     console.log("props:", props)

//     return (
//         <div>
//             <PlayButton {...props} />
//             <h2>{trackTitle}</h2>
//             <Timer {...props} />
//         </div>
//     )
// })
// const Player = withSoundCloudAudio(props => {
//     let { track, currentTime } = props;

//     return (
//       <div className="custom-player">
//         <PlayButton
//           className="custom-player-btn"
//           onPlayClick={() => {
//             console.log('play button clicked!');
//           }}
//           {...props} />
//         <h2 className="custom-player-title">
//           {track ? track.title : 'Loading...'}
//         </h2>
//         <Timer 
//           className="custom-player-timer"
//           duration={track ? track.duration / 1000 : 0} 
//           currentTime={currentTime} 
//           {...props} />
//       </div>
//     );
// });

// [MM] redux-audio
// import { Audio } from 'redux-audio'


class App extends Component {

  constructor(props) {
    super(props)
    // self = this
    
    const { cookies } = props

    this.state = {
      status: 'disconnected',
      title: '',
      shareID: '',
      presetID: 'meshuggah',
      member: {},
      audience: [],
      speaker: {},
      //speaker: '',
      questions: [],
      currentQuestion: false,
      results: {},
      name: cookies.get('name'),
      username: cookies.get('username')
    }

    this.connect = this.connect.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.updateState = this.updateState.bind(this)
    this.emit = this.emit.bind(this)
    this.joined = this.joined.bind(this)
    this.updateAudience = this.updateAudience.bind(this)
    this.start = this.start.bind(this)
    this.ask = this.ask.bind(this)
    this.updateResults = this.updateResults.bind(this)

    console.log("== [MM] App Component constructor loaded: this.state ==")
    console.log(this.state)
    console.log("== [MM] end ==")
  }

  componentDidMount() {

  }

  componentWillMount() {
    this.socket = ioClient('http://localhost:3003')
    console.log(this.socket)
    this.socket.on('connect', this.connect)
    this.socket.on('disconnect', this.disconnect)
    this.socket.on('welcome', this.updateState)
    this.socket.on('joined', this.joined)
    this.socket.on('audience', this.updateAudience)
    this.socket.on('start', this.start)
    this.socket.on('ask', this.ask)
    this.socket.on('results', this.updateResults)
  }
    
  connect() {
    console.log("ioClient connected: " + this.socket.id)

    // check session storage for a previously joined member
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null
    if (member && member.type === 'audience') {
      // (re)join the member
      this.emit('join', member)
    } else if (member && member.type === 'speaker') {
      this.emit('start', { name: member.name, title: sessionStorage.title })
    }
    
    // update state
    this.setState({ status: 'connected' })
  }

  disconnect() {
    console.log("ioClient disconnected: " + this.socket.id)

    this.setState({ 
      status: 'disconnected',
      title: 'Room Disconnected',
      speaker: {}
    })
  }

  joined(member) {

    sessionStorage.member = JSON.stringify(member)

    this.setState({ member: member })
    console.log("== [MM] Member Joined ==")
    console.log(member)
    console.log(this.state)
    console.log("== [MM] end ==")
  }

  updateAudience(newAudience) {
    this.setState({ audience: newAudience })
  }

  start(room) {
    if (this.state.member.type === 'speaker') {
      console.log("does this ever fire?", room)
      sessionStorage.title = room.title
    } else {
      console.log("it doesn't look like it.")
    }
    this.setState(room)
  }

  ask(question) {
    sessionStorage.answer = ''
    this.setState({ 
      currentQuestion: question,
      results: {a: 0, b: 0, c: 0, d: 0}
    })
  }

  updateResults(data){
    this.setState({ results: data })
  }

  //welcome(serverState) {
  updateState(serverState) {
    console.log("ioClient updateState: " + this.socket.id)

    //this.setState({ title: serverState.title })
    this.setState(serverState)
  }

  emit(eventName, payload) {
      this.socket.emit(eventName, payload)
  }

  render = () => (
    <Provider store={this.props.store}>
      <CookiesProvider>
      <RRWAEngine store={this.props.store} />
      <MuiThemeProvider theme={theme}>
      <div style={{height: "100%", backgroundColor: "#333333", color: "#ffffff"}}>
          
        {/* <h1 style={{textAlign: 'center'}}>HEY HEY HEY from React -- Live Polling</h1> */}
        {/* <Header title={this.state.title} status={this.state.status} /> */}
        {/* <Header {...this.state} /> */}
        
        {/* <Router key={Math.random()} history={this.props.history} routes={routes} /> */}
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Main} /> */}
            <Route exact path="/" render={(props) => (
              <div>
                {/* <Audience {...this.state} emit={this.emit} /> */}
                {/* <Apple>
                  <Schmix/>
                </Apple> */}
                {/* <AudioRecorder {...this.state} /> */}
                {/* <AWSSoundPlayer
                  resolveUrl={resolveUrl}
                  clientId={clientId}
                  streamUrl={streamUrl}
                  trackTitle={trackTitle} 
                  preloadType="auto" 
                /> */}
                {/* <Player
                  clientId={clientId}
                  resolveUrl={resolveUrl}
                  onReady={() => console.log('track is loaded!')}   
                /> */}
                {/* <RRWAExamplesApp /> */}
                {/* <Audio src='http://trackdragon.com/wp-content/uploads/2014/04/Salesman.mp3' 
                  autoPlay uniqueId='example' controls loop /> */}
                
                <MenuAppBar {...this.state} />
                <TrackDragon {...this.state} {...props} />
                <Main {...this.state} />
              </div>
            )} />
            <Redirect from='/**/share/:shareID' to='share/:shareID' />
            <Route path="share/:shareID" id="share" />
            <Route path="preset/:presetID" id="preset" />
            <Route path="sequences" id="sequences" />
            <Route path="instruments" id="instruments" />
            {/* <Route status={404} path="*" /> */}

            {/* <Route exact path="/" component={Audience} /> */}
            <Route exact path="/audience" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <Audience {...this.state} emit={this.emit} />
                {/* <Main {...this.state} /> */}
              </div>
            )} />
            {/* <Route name="speaker" path="/speaker" component={Speaker} {...this.state} /> */}
            <Route exact path="/speaker" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <Speaker {...this.state} emit={this.emit} />
                {/* <Main {...this.state} /> */}
              </div>
            )} />
            {/* <Route name="board" path="/board" handler={Board} {...this.state} /> */}
            <Route exact path="/board" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <Board {...this.state} emit={this.emit} />
                {/* <Main {...this.state} /> */}
              </div>
            )} />

            
            {/* <Route path="/welcome" component={WelcomePage} /> */}
            <Route exact path="/welcome" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <Welcome {...this.state} emit={this.emit} />
                {/* <Main {...this.state} /> */}
              </div>
            )} />
            {/* <Route path="/signup" component={SignUp} /> */}
            <Route exact path="/signup" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <SignUp {...this.state} emit={this.emit} />
                {/* <Main {...this.state} /> */}
              </div>
            )} />
            {/* <Route path="/signin" component={SignIn} /> */}
            <Route exact path="/signin" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <SignIn {...this.state} emit={this.emit} />
                {/* <Main {...this.state} /> */}
              </div>
            )} />
            {/* <Route path="/signout" component={SignOut} /> */}
            {/* <Route exact path="/signout" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <MenuAppDrawer {...this.state} />
                <SignOut {...this.state} emit={this.emit} />
                <Main {...this.state} />
              </div>
            )} /> */}
            {/* <Route path="/chat" component={ChatContainer}></Route> */}
            <Route exact path="/chat" render={(props) => (
              <div>
                <MenuAppBar {...this.state} />
                <ChatContainer {...this.state} emit={this.emit} />
                {/* <Main {...this.state} /> */}
              </div>
            )} />

          </Switch>
        </Router>

        {/* {process.env.NODE_ENV !== 'production' && <DevTools />} */}
        <DevTools />

      </div>
      </MuiThemeProvider>
      </CookiesProvider>
    </Provider>
  )
}

/**
 * A container component that will render within the component tree of <App />
 */
// const Container = self.connect(
//     state => state,
//     dispatch => ({ makeNoise: () => dispatch(actionCreators.emit(audioEvent)) })
// )(App)

export default withCookies(App)