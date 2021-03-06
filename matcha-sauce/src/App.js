import React, {useState} from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from 'components/Router'
import './app.css';
import 'swiper/swiper-bundle.min.css';
import Header from "./components/Header/header";
import './assets/css/bootstrap.min.css';
import Footer from "./components/Footer/footer";
import ModalContactsSection from "./components/modalContactForm/ModalContactsSection";
import ModalContext from "./context.js";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
    const [modalContext, setModalContext] = useState(false);
    const value = { modalContext, setModalContext };

  return (
    <Root>
        <div className={'container-fluid px-0'}>
            <ModalContext.Provider value={value}>
                <ModalContactsSection/>
                <div className={'container'}>
                    <Header/>
                    <div className="content">
                        <React.Suspense fallback={<em>Loading...</em>}>
                            <Router>
                                <Routes path="*" />
                            </Router>
                        </React.Suspense>
                    </div>
                </div>
                <Footer/>
            </ModalContext.Provider>
        </div>
    </Root>
  )
}

export default App
