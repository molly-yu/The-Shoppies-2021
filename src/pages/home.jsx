import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchBar from "../components/searchbar.jsx";
import SearchResults from "../components/searchresults";
import Nominations from "../components/nominations";

const Home = (props) => {
    const [input, setInput] = useState('');
    const [resultList, setResultList] = useState();
    const [nominationsList, setNominationsList] = useState();

    const search = async (input) => {
        const filtered = ["hi", "movie"];
        const nom = ["movies"];
        setInput(input);
        setResultList(filtered);
        setNominationsList(nom);
        console.log(resultList);
        console.log(nominationsList);
        console.log("Clicked");
    }

    //useEffect(() => {fetchData()}, []);

    return (
    <div className="Home">
            <h1>The Shoppies</h1>
            <p>Welcome to The Shoppies, the annual movie awards for entrepreneurs. You can nominate up to 5 movies!</p>
            <SearchBar
                input={input}
            />
            <button onClick={search}>Search</button> 
            <Container>
            <Row>
                <Col>
                    <h2>Results</h2>
                    <SearchResults results={resultList} />
                </Col>
                <Col>
                    <h2>Nominations</h2>
                    <Nominations nominations={nominationsList} />
                </Col>
            </Row>
      </Container>
    </div>
  );
}

export default Home;
