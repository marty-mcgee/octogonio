import { IO, Maybe } from 'ramda-fantasy'

import {
    compose,
    curry,
    map,
} from 'ramda'

// [MM] chat
//if (typeof(window) !== 'undefined') {
        
    //    getLocalStorageIO :: key -> IO String
    const getLocalStorageIO = key =>
        IO(() => {
            if (typeof(window) !== 'undefined') {
                window.localStorage.getItem(key)
            } else {
                null
            }
        })

    //    setLocalStorageIO :: key -> value -> IO String
    const setLocalStorageIO = curry((key, value) =>
        IO(() => {
            if (typeof(window) !== 'undefined') {
                window.localStorage.setItem(key, value)
            }
            return value
        }))

    //    safeGetLocalStorageIO :: key -> Maybe IO String
    const safeGetLocalStorageIO = compose(map(Maybe), getLocalStorageIO)

    export {
        getLocalStorageIO,
        setLocalStorageIO,
        safeGetLocalStorageIO,
    }

// [MM] chat
//}