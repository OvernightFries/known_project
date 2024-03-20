import Image from "next/image";
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'
import {Title} from './Title.jsx'
import {Section1} from './Section1.jsx'
import {WorkWithUs} from './WorkWithUs.jsx'
import {ResearchSection} from './ResearchSection.jsx'
import {TeamSection} from './TeamSection.jsx'
import {SearchBar} from './SearchBar.jsx'


export default function Home() {
  return (
  <>
  <Header/>
   <SearchBar/>

  <Section1/>
  <TeamSection/>
  <WorkWithUs/>
      {/* ...rest of your main content */}

    <Footer/>
        </>

  );
}
