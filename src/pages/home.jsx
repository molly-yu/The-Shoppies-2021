import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import axios from 'axios'

import SearchBar from '../components/searchbar';
import SearchResults from '../components/searchresults';
import Nominations from '../components/nominations';

const Home = (props) => {
    const [input, setInput] = useState('');
    const [resultList, setResultList] = useState([]);
    const [nominationsList, setNominationsList] = useState([]);

    const updateSearch = async (input) => {
        setInput(input);
    }

    const search = async () => {
        console.log("http://www.omdbapi.com/?apikey=91fd7d58&s=" + input)
        const response = await axios.get("http://www.omdbapi.com/?apikey=91fd7d58&s=" + input); // get request to api by title
        const movies = response.data.Search;
        console.log(movies)
        if(movies){
            setResultList(movies)
            console.log(resultList);
            console.log(nominationsList);
        }
        else{
            console.log("no titles found");
        }
        console.log("Clicked");
    }

    const nominate = async (input) => {
        if(nominationsList.indexOf(input) === -1){ // add to nominate list if not yet nominated
            console.log("added");
            setNominationsList(nominationsList => [...nominationsList, input]);
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
            <h1>The Shoppies</h1>
            <p>Welcome to The Shoppies, the annual movie awards for entrepreneurs. You can nominate up to 5 movies!</p>
            <SearchBar
                keyword={input}
                setKeyword={updateSearch}
            />
            <button onClick={search}>Search</button> 
            <Container>
            <Row>
                <Col>
                    <h2>Results</h2>
                    <SearchResults 
                        results={resultList}
                        nominated={nominationsList}
                        add={nominate} />
                </Col>
                <Col>
                    <h2>Nominations</h2>
                    <Nominations 
                        nominations={nominationsList} 
                        remove={unnominate} />
                </Col>
            </Row>
      </Container>
    </div>
  );
}

export default Home;
