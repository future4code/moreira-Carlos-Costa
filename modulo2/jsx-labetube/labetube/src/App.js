import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import './App.css';

function App() {

  const imgs = [

   'https://picsum.photos/400/400?a=1',
   'https://picsum.photos/400/400?a=2',
   'https://picsum.photos/400/400?a=3',
   'https://picsum.photos/400/400?a=4',
   'https://picsum.photos/400/400?a=5',
   'https://picsum.photos/400/400?a=6',
   'https://picsum.photos/400/400?a=7',
   'https://picsum.photos/400/400?a=8',

  ];

  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido")
  }

  const nomeTitulo = "Título do vídeo";


  return (
    <div className="App">
      <header>
        < Header />
      </header>
      
      <main>
        <Sidebar />
        <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                <img src={imgs[0]} alt="media1"/>
                <h4>{nomeTitulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                <img src={imgs[1]} alt="media2"/>
                <h4>{nomeTitulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                <img src={imgs[2]} alt="media3"/>
                <h4>{nomeTitulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                <img src={imgs[3]} alt="media4"/>
                <h4>{nomeTitulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                <img src={imgs[4]} alt="media5"/>
                <h4>{nomeTitulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                <img src={imgs[5]} alt="media6"/>
                <h4>{nomeTitulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                <img src={imgs[6]} alt="media7"/>
                <h4>{nomeTitulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                <img src={imgs[7]} alt="media8"/>
                <h4>{nomeTitulo}</h4>
            </div>
        </section>
      </main>
      <footer>
       <Footer />
      </footer>
     
    </div>
  );
}

export default App;
