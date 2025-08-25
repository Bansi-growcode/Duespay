import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/about'
import AppPreview from './components/appPreview'
import CoreFeatures from './components/coreFeatures'
import CoreFeaturesCard from './components/coreFeaturescard'
import FaqCard from './components/faqCard'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import PaymentFeatures from './components/paymentFeatures'
import Testimonials from './components/testimonials'

function MainPage() {
  return (
    <>
      <Home />
      <div id="payment">
        <PaymentFeatures />
      </div>
      <CoreFeatures />
      <div id="features">
        <CoreFeaturesCard />
      </div>
      <div id="preview">
        <AppPreview />
      </div>
      <div id="user">
        <Testimonials />
      </div>
      <FaqCard />
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

