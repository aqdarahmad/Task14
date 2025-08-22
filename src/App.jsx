import AppRouting from "./Routing/AppRouting";
import { ThemeProvider } from "./ThemeContext/ThemeProvider";
export default function App() {
  return (
    <div>
      <ThemeProvider>
        <AppRouting />
      </ThemeProvider>
    </div>
  )
}
