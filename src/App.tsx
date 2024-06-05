import Section1 from "./components/sections/section-1/section-1"
import Section2 from "./components/sections/section-2/section-2"
import Section3 from "./components/sections/section-3/section-3"
import Section4 from "./components/sections/section-4/section-4"
import Section5 from "./components/sections/section-5/section-5"
import Section6 from "./components/sections/section-6/section-6"
import Footer from "./components/ui/footer"
import Header from "./components/ui/header/header"

function App() {

  return (
    <main className="bg-[#060606] font-outif text-white relative">
      <Header />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Footer />
    </main>
  )
}


export default App
