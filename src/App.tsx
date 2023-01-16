import { CounterPadre } from './components/CounterPadre';
import CounterState from './components/CounterState';
import UserState from './components/UserState';

export const App = () => {
  return (
    <>
        <h1>React + TypeScript</h1>
        <hr/>
        <CounterState />
        <UserState />
        <CounterPadre />
    </>
  )
}

export default App;