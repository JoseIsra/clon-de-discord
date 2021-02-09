import React, {useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import './App.css';
import { Sidebar , Chat } from './components';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { Login } from './pages';
import { login , logout } from './features/userSlice';

function App() {

  const user  = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    console.log("existe", authUser);
    if(authUser){
      //existe usuario
      dispatch(login({
        uid:authUser.uid,
        photo:authUser.photoURL,
        email:authUser.email,
        displayName:authUser.displayName
      }))
    }else{
      //no hay usuario
      dispatch(logout());
    }
  })
  },[dispatch]);

  return (
    <div className="app">
      { user? (
        <>
        <Sidebar />
        <Chat />
        </>
      ): (
        <Login />
      )}
    </div>
  );
}

export default App;
