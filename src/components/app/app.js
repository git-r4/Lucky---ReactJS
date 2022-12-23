import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import RegistrationNav from "../header/registrationNav";
import SearchNav from "../header/searchNav";
import Navbar from "../header/navbar";

//styles
import '../../styles/style.scss';
import '../../styles/responsive.scss';
import '../../bootstrap_styles/bootstrap.min.css';
import '../../bootstrap_styles/bootstrap-grid.css.map';

const App = () => {
    return(
        <BrowserRouter>
            <div className="app">
                <header>
                    <RegistrationNav />
                    <SearchNav />
                    <Navbar />
                </header>
                <main>

                </main>
                <footer>

                </footer>
            </div>
        </BrowserRouter>
    )
}
export default App;