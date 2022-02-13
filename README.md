# moviesApp

# Thought process

This web app consists of 3 components: 
1. Home - initial page where all the movies are loaded
2. MovieCard - component that briefly shows a single movie 
3. MoviePage - page with details about a movie

The idea on the Home page was to give user an overview of some popular movies every time the page renders (by default the page number 1 is shown).
The user can type in a keyword in the search bar at the beginning of a page and the website will give them a response from /search/movie API method.
At the bottom of a page the user can choose the page number and we are sending a request to API with the parameter "page".
Any time when buttons "Search" and "Select page" are clicked, it will trigger the change of state for any of the parameters which will result
in rendering the component again.
For displaying movies I used functional components "MovieCard" that I made to which I passed the most important parameters.
When the user clicks on "Details" button, web app redirects them to the MoviePage where they can see more information about the movie.
Routing was done with react-router-dom by passing the movie ID as a URL parameter. Then I used a useParams hook to extract the movie ID again
so I can use it to get the wanted movie from API.


# What would I do if I had more time?
- I would separate the link to API in a different component and store API key in a variable so it gets easier to use it multiple times
and if I have to change API key I only have to change it on one place. 
- I would show movies in a grid view as it can be difficult for users to scroll down a lot.
- I would add a "not found" page if the user tries to access any page that is not declared in router.