import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"

function App() {
  

  return (
    <>
    <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16
    md:px-10 md:py-7 md:justify-between lg:px-16 lg:py10">
      {/* to make responsive design for ipad air (md is used) - changes are done in other files using md */}
      {/* lg - for large screen view (make changes in styling with this) */}
      <Header />
      <Body />
      <Footer />
    </div>
    </>
  )
}

export default App
