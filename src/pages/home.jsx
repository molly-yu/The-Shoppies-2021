import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
    vertical-align:middle;
`;

const ContentDiv = styled.div`
    padding: 1.5rem;
    max-width: 1080px;
    @media (min-width: 800px) {
    width: 70%;
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
    const [resultList, setResultList] = useState([]);
    const [nominationsList, setNominationsList] = useState([]);

    const updateSearch = async (input) => {
        setInput(input);
    }

    const search = async () => {
        const response = await axios.get("http://www.omdbapi.com/?apikey=91fd7d58&s=" + input); // get request to api by title
        const movies = response.data.Search;
        if(movies){
            setResultList(movies)
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
        console.log(nominationsList.indexOf(input));
        if(nominationsList.indexOf(input) !== -1) {
            setNominationsList(nominationsList.filter(item => item !== input));
        }
    }

    //useEffect(() => {fetchData()}, []);

    return (
    <div className="Home">
        <ContentDiv>
            <h1><Logo className="logo" src={logo} alt="" />
            the shoppies</h1>
            <p>Welcome to The Shoppies, the annual movie awards for entrepreneurs. You can nominate up to 5 movies!</p>
            <SearchDiv>
                <h2>Movie Title</h2>
                <SearchBar
                    keyword={input}
                    setKeyword={updateSearch}
                />
                <Button onClick={search}>Search</Button> 
            </SearchDiv>
            
            <Row>
                <Col>
                <ResultDiv>
                    <h2>Search Results</h2>
                    <LineBreak />
                    <table>
                    <SearchResults 
                        results={resultList}
                        nominated={nominationsList}
                        add={nominate} />
                    </table>
                    </ResultDiv>
                </Col>
                <Col>
                <ResultDiv>
                    <h2>Your Nominations</h2>
                    <LineBreak />
                    <table>
                    <Nominations 
                        nominations={nominationsList} 
                        remove={unnominate} />
                    </table>
                    </ResultDiv>
                </Col>
            </Row>
      
      <NotificationContainer/>
      </ContentDiv>
    </div>
  );
}

export default Home;
