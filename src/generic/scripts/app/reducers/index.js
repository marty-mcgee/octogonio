import { combineReducers } from 'redux'
import config from './config'
import sequences from './sequences'
import instruments from './instruments'
import modal from './modal'
import presets from './presets'
import sound from './sound'

// [MM] chat
import messages from './messages'
import channels from './channels'
import activeChannel from './activeChannel'
import auth from './auth'
import typers from './typers'
import welcomePage from './welcomePage'
import userValidation from './userValidation'
import environment from './environment'
// import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

// [MM] rrwa
import { RRWAEngine, actionCreators, webAudioReducer } from 'react-redux-webaudio'
import rrwa from './rrwa'

// [MM] schmix
// import { combineReducers } from 'redux'
// import { delayReducer as delay } from '../components/effects/Delay/Delay.reducers'
//import tracks from '../containers/Schmix/reducers.js'

// [MM] redux-audio
//import { audioReducer as audio } from 'redux-audio'

const rootReducer = combineReducers({
    config,
    sequences,
    instruments,
    modal,
    presets,
    sound,
    // [MM] chat
    messages,
    channels,
    activeChannel,
    auth,
    typers,
    welcomePage,
    userValidation,
    environment,
    formReducer,
    // [MM] rrwa
    webAudioReducer,
    rrwa,
    // [MM] schmix
    // delay,
    //tracks,
    // [MM] redux-audio
    //audio,
})

export default rootReducer