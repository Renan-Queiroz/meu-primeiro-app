import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContactPage } from "./pages/Contact"
import { HomePage } from "./pages/Home"
import { FeaturesPage } from "./pages/Features"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contato" element={<ContactPage />} />
                    <Route path="/funcionalidades" element={<FeaturesPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App