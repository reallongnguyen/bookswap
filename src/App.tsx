import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TabBar from './component/TabBar';
import AddBook from './page/AddBook/AddBook';
import Library from './page/BookLibrary/BookLibrary';
import Profile from './page/Profile';
import Signin from './page/Signin/Signin';
import Signup from './page/Signup/Signup';
import Tinder from './page/tinder';

function App() {
  return (
    <div className='h-screen w-screen bg-gray-50'>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='*'>
            <div
              className='h-full grid'
              style={{ gridTemplateRows: '1fr auto' }}
            >
              <div className='overflow-hidden'>
                <Switch>
                  <Route path='/' exact component={Tinder} />
                  <Route path='/messenger'>messenger</Route>
                  <Route path='/library' component={Library} />
                  <Route path='/add' component={AddBook} />
                  <Route path='/profile'>
                    <Profile />
                  </Route>
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
