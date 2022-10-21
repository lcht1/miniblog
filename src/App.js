import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
