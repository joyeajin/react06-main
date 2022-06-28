import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';
import Notice from './components/Notice';
import Event from './components/Event';
import EventToggle from './components/EventToggle';
import Form from './components/Form';
import {Manual ,Rule, Policy, EtcInfo}  from './pages/FooterMenu'
import Daum from './components/Daum';
import {useEffect, useState} from 'react';

function App() {
  const title = 'site'; 
  // const [data, setData] = useState({});

  // useEffect(()=>{
  //   fetch()
  // })

  return (
    <div className='App'>
      <BrowserRouter>
        <Header title={title} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cardList' element={<CardList />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/manual' element={<Manual />} />
            <Route path='/rule' element={<Rule />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/etcInfo' element={<EtcInfo />} />
            <Route path='/event' element={<Event />} />
            <Route path='/eventToggle' element={<EventToggle />} />
            <Route path='/form' element={<Form />} />
            <Route path='/daum' element={<Daum />} />

          </Routes>
        <Footer title={title} />
      </BrowserRouter>
    </div>
  );
}

export default App;
/* npm i react-router-dom  */