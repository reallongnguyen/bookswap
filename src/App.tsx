import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TabBar from './component/TabBar';
import Tinder from './page/tinder';

function App() {
  return (
    <div className='h-screen w-screen bg-gray-50'>
      <BrowserRouter>
        <Switch>
          <Route path='/login'>login</Route>
          <Route path='*'>
            <div
              className='h-full grid'
              style={{ gridTemplateRows: '1fr auto' }}
            >
              <div className='overflow-hidden'>
                <Switch>
                  <Route path='/' exact component={Tinder} />
                  <Route path='/messenger'>messenger</Route>
                  <Route path='/library'>library</Route>
                  <Route path='/profile'>profile</Route>
                </Switch>
              </div>
              <div className='h-20 border-t border-gray-200'>
                <TabBar />
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
