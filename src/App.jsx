import { UserProvider } from './Contexts/UserContext'
import Routing from './Routing/Routing'

export default function App() {
  return (
    <>
    <UserProvider>
    <Routing/>
    </UserProvider>
    </>
  )
}
