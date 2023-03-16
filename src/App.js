import "./scss/App.scss"
import Navbar from "./components/Navbar";
import Route from "./components/Route";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
//  import background from "./images/desk.png"
function App() {
    // const background = "./images/desk.png";
    return (
        <div className="container pm-0 ml-0
             fixed inset-0 overflow-y-scroll 
            bg-gradient-to-r 
            from-slate-900 bg-slate-900 overflow-auto gap-4"
        >
            <Navbar />
            <div className="col-span-1 ">
                <Route path="/">
                    <About />
                    <Work />
                    <Contact />
                </Route>
                <Route path="/work">
                    <Work />
                    <Contact />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </div>
            <Footer />
        </div>
    )
}

export default App;