import {
  faFacebookF,
  faTelegramPlane,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import PageRouter from './screens/PageRouter'

function App() {
  return <PageRouter />
}
library.add(faEnvelope, faFacebookF, faWhatsapp, faTelegramPlane, faPhone)
export default App
