import { useState } from 'react'
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import ResourceLinks from './components/ResourceLinks';
import MainHeader from './components/MainHeader';
import Chat from './components/Chat';
import Footer from './components/Footer';
import './styles.scss'

function App() {

  const [showSplash, setShowSplash] = useState(true);
  const [firstMessageSent, setFirstMessageSent] = useState(false);


  return (
    <>
      {
        showSplash ? (
          <SplashScreen
            onComplete={() => setShowSplash(false)}
          />
        ) : (
          <div className="grid-wrapper">
            <Navigation />
            <ResourceLinks phone={"+988"} link={"https://988lifeline.org/"} />
            <main className='main-container'>
             {!firstMessageSent && <MainHeader />}  
                <Chat onMessageSent={() => {setFirstMessageSent(true)}}/>
            </main>
            <Footer link={"https://www.alejandro-viejo.com/"} />
          </div>
        )}
    </>
  )
}

export default App;
