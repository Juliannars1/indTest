import React from 'react';
import { Navigate } from 'react-router-dom';
import Pokemon from '../../Components/Pokemon/PokemonAPI/Pokemon';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Home =()=>  {

        return !localStorage.getItem('ingresado') ? <Navigate to="/login"/> :(
            <>
            <Header/>
            <Pokemon/>
            <Footer/>
            </>
        );

}

export default Home;