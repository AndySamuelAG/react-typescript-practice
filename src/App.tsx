import { CounterPadre } from './modules/CounterPadre';
import CounterState from './modules/CounterState';
import UserState from './modules/UserState';

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