import { Route, Routes } from 'react-router-dom'

import { MainPage } from './pages/mainPage/mainPage.tsx'
import { PokePage } from './pages/pokePage/pokePage.tsx'
import { Header } from './components/header/header.tsx'
import { Footer } from './components/footer/footer.tsx'


export const App = () => {

    return <>
        <Header/>
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/'} element={<PokePage/>}/>
        </Routes>
        <Footer/>
    </>
}