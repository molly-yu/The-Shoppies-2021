# The Shoppies 2021 Frontend Challenge

Welcome to The Shoppies! This project was created for the Shopify UX Developer Intern & Web Developer Intern Challenge for Fall 2021. 

View the deployed app here: http://the-shoppies-2021-molly-yu.herokuapp.com/

Project description: The Shoppies are an annual movie awards for entrepreneurs. On the website, users will be able to search and nominate 5 movies using the API from OMDB. 
The webpage is user-friendly and includes additional features to help users pick nominations easily and accessibly. The app was built with ReactJS using entirely functional components with Hooks for state management. Data is saved through caching with localStorage.

Some of the basic features include:
- Search OMDB and display the movie results
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

In particular, the following technical requirements were implemented:
- Search results come from OMDB's API. If no results are available, a banner pops up to indicate to the user that no movies were found.
- Each search result shows its title, year of release and a (+) button to nominate that film.
- Updates to the search terms update the result list.
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, its nominate button is disabled.
- A banner is displayed when user has finished nominating 5 films. At this point, all nominate buttons will be disabled.

Some of the additional features include:
- Automatic nomination saving upon refreshing the page (through cache).
- Details about each movie (e.g. plot, directors/writers, actors) can be viewed as a modal pop up by clicking the button next to the movie title. From there, the associated IMDb page can be opened in a new tab.
- Appropriate shadowing/animations on button clicks and banner pop ups.
- Improved accessibility through aria-labels and keyboard focusing.

## Local Build
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
