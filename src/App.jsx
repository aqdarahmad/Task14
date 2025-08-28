import { ThemeProvider } from './Contexts/ThemeContext';
import { UserProvider } from './Contexts/UserContext';
import Routing from './Routing/Routing';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Routing />
      </UserProvider>
    </ThemeProvider>
  );
}
