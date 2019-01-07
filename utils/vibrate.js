import {Vibration} from 'react-native'
// Android: wait 1s -> vibrate 2s -> wait 3s
// iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate
export default () => Vibration.vibrate([1000, 2000, 3000])
//export default () => console.log("Telefono bababa");