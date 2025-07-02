import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Products } from './components/Products';
import { Proyects } from "./components/Proyects";
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ButtonWa } from './components/ButtonWa';

export default function App() {
  return (
    <div className="mx-h-screen bg-white text-gray-800">
      <Header></Header>
      <Presentation></Presentation>
      <Products></Products>
      <Proyects></Proyects>
      <AboutUs></AboutUs>
      <Contact></Contact>
      <Footer></Footer>
      <ButtonWa></ButtonWa>
    </div >
  );
}

