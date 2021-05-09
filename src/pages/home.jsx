import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Modal } from 'react-bootstrap';

import axios from 'axios'

import logo from '../assets/shopify_icon.png';
import SearchBar from '../components/searchbar';
import SearchResults from '../components/searchresults';
import Nominations from '../components/nominations';
import Button from '../components/button';

const LineBreak = styled.hr`
    color: grey;
    backgroundColor: grey,
    height: 3;
`;

const Logo = styled.img`
    height: 2.7rem;
    width: 2.7rem;
    margin: 8px;
    vertical-align: middle;
`;

const Poster = styled.img`
    width:50%;
    display: block;
    margin: auto;
`;

const ContentDiv = styled.div`
    padding: 1.5rem;
    max-width: 1080px;
    min-height:100vh;
    @media (min-width: 800px) {
    width: 100%;
    margin: auto;
    }
    @media (max-width: 799px) {
    width: 100%;
    }
`;
const SearchDiv = styled.div`
    padding: 2rem;
    margin: 1rem;
    background-color:white;
    border: 1px solid #D8D5D5;
    border-radius: 10px;
`;
const ResultDiv = styled.div`
    padding:2rem;
    margin: 1rem;
    margin-top: 0;
    background-color:white;
    border: 1px solid #D8D5D5;
    border-radius: 10px;
`;
    

const Home = (props) => {
    const [input, setInput] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [resultList, setResultList] = useState([]);
    const [nominationsList, setNominationsList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieOpen, setMovieOpen] = useState(null);

    useEffect(() => { // load saved nominations in storage
        const nominations = localStorage.getItem('nominations');
        if(nominations){
            setNominationsList(JSON.parse(nominations));
        }
    }, []);
    
    useEffect(() => { // save nominations in storage
        localStorage.setItem('nominations', JSON.stringify(nominationsList));
    }, [nominationsList]);

    const updateSearch = async (input) => {
        setInput(input);
    }     

    const search = async () => {
        setSearchValue(input);
        const response = await axios.get("http://www.omdbapi.com/?apikey=91fd7d58&s=" + input); // get request to api by title
        const movies = response.data.Search;
        if(movies){
            setResultList(movies)

            console.log(nominationsList);
        }
        else{
            NotificationManager.error("No titles found! Try another search.");
            setResultList([]);
        }
    }

    const nominate = async (input) => {
        if(nominationsList.indexOf(input) === -1){ // add to nominate list if not yet nominated
            console.log("added");
            setNominationsList(nominationsList => [...nominationsList, input]);
            // notifications banner
            if(nominationsList.length === 4) {
                NotificationManager.success("Congratulations, you've successfully nominated your movies!");
            }
        }
    }

    const unnominate = async (input) => {
        if(nominationsList.indexOf(input) !== -1) {
            setNominationsList(nominationsList.filter(item => item !== input));
            localStorage.setItem('nominations', nominationsList);
        }
    }

    const openModal = async (movie) => {
        const response = await axios.get("http://www.omdbapi.com/?apikey=91fd7d58&i=" + movie.imdbID); 
        const currentMovie = response.data;
        setMovieOpen(currentMovie);
        setModalOpen(true);
    }

    const closeModal = async () => {
        setModalOpen(false);
        setMovieOpen(null);
    }

    const openLink = async (movie) => {
        // window.location.href = 'https://imdb.com/title/'; 
        if(movie){
            window.open(`https://imdb.com/title/${movie.imdbID}`, "_blank");
        }
    }

    return (
    <div className="Home">
        <ContentDiv>
            <h1><Logo className="logo" src={logo} alt="" />
            the shoppies</h1>
            <p2>Welcome to The Shoppies, the annual movie awards for entrepreneurs. You can nominate up to 5 movies!</p2>
            <SearchDiv>
                <h2>Movie Title</h2>
                <SearchBar
                    keyword={input}
                    setKeyword={updateSearch}
                    searchEnter={search}
                />
                <Button onClick={search}>Search</Button> 
            </SearchDiv>
            
            <Row>
                <Col>
                <ResultDiv>
                    <h2>Search Results</h2>
                    <LineBreak />
                    <h3>{`Displaying search results for "${searchValue}".`}</h3>
                    <table>
                        <tbody>
                        <SearchResults 
                            results={resultList}
                            nominated={nominationsList}
                            add={nominate} 
                            open={openModal} />
                        </tbody>
                    </table>
                    </ResultDiv>
                </Col>
                <Col>
                <ResultDiv>
                    <h2>Nominations</h2>
                    <LineBreak />
                    <h3>Your nominations are automatically synced and saved.</h3>
                    <table>
                        <tbody>
                    <Nominations 
                        nominations={nominationsList} 
                        remove={unnominate} 
                        open={openModal} />
                        </tbody>
                    </table>
                    </ResultDiv>
                </Col>
            </Row>
      <Modal show={modalOpen} onHide={closeModal}>
      <Modal.Header>
          <Modal.Title>{movieOpen ? movieOpen.Title + ` (${movieOpen.Year})`: ''}</Modal.Title>
          <Button close={true} onClick={closeModal}>×</Button>
        </Modal.Header>
        <Modal.Body>
            <Poster src={movieOpen ? movieOpen.Poster: ''} alt=""/>
            <p>{`${movieOpen ? movieOpen.Plot : ''}`}</p>
            <p>{`Genre: ${movieOpen ? movieOpen.Genre : ''}`}</p>
            <p>{`Directed by ${movieOpen ? movieOpen.Director : ''}`}</p>
            <p>{`Written by ${movieOpen ? movieOpen.Writer : ''}`}</p>
            <p>{`Featuring ${movieOpen ? movieOpen.Actors : ''}`}</p>
            </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => openLink (movieOpen)}>
           View on IMDb
          </Button>
        </Modal.Footer>
      </Modal>
      <NotificationContainer/>
      </ContentDiv>
    </div>
  );
}

export default Home;
