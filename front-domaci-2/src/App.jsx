import './App.css';

import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import InterestingTopics from './components/interestingTopics/InterestingTopics';
import Introduction from './components/introduction/Introduction';
import { Navigation } from "./components/navigation/Navigation"
import Products from './components/products/Products';

function App() {

  return (
    <>
      <Navigation />
      <Introduction />
      <Products />
      <ContactUs />
      <InterestingTopics />
      <Footer />
    </>
  )
}

export default App
