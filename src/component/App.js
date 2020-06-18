import React from 'react';
import './styles/app.scss';
import Header from './organisms/Header/Header';
//import HeroCarousel from './organisms/HeroCarousel/HeroCarousel';
import FevariteMenuBar from './organisms/FevariteMenuBar/FevariteMenuBar';
class App extends React.Component{
    render(){
        return(
            <div className="dtc-wapper">
                <div className="dtc-wapper-inner">
                     <Header/>
                     <FevariteMenuBar/>
                    </div>
            </div>
        )
    }
}
export default App;