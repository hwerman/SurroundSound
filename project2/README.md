# grtgProject

###Summary:
The app allows the user to search for a movie and view the soundtrack of the movie, saving individual tracks to the user's personal collection.

###User Story:
As a logged in user, you can
> Search for a movie to find its soundtrack
> Preview the songs on the soundtrack, for those with available urls
> Save songs to your personal collection, which you can access as you continue searching for other movie soundtracks

###Use Case:
The user will sign up and log in to begin searching. The user will then enter the name of a movie into the search field. The tunes from the movie will be listed on the lefthand side of the screen and any songs that the user decides to save to the user's personal collection will be listed on the righthand side. There is a link to return to the search page so the user can look up another movie soundtrack.
The user can inspect each song that is listed and if there is a preview url available, the user will see a 'preview' link and will be able to click on the link for a 30 second preview of the song featured in the movie. If there is no preview url link available through the API, the 'preview' link will not appear.

###Approach:
1. Set up scaffolding for app
2. Set up MVC structure
3. Set up server and install any necessary dependencies
4. Organize routes, models & services
5. Access API data and mongodb objects needed
6. Implement user/auth structure
7. Confirm that get, post, put & delete instances work

###Technologies used:
- HTML
- CSS
- Javascript
- node.js
- express
- path
- TuneFind API
- Mongodb

###Wireframes
[Wireframe 1](https://git.generalassemb.ly/storage/user/28/files/d037589c-9c29-11e6-866d-7ac413250c1a)
[Wireframe 2](https://git.generalassemb.ly/storage/user/28/files/dc23affc-9c29-11e6-9307-b3b1d71812a5)
[Wireframe 3](https://git.generalassemb.ly/storage/user/28/files/e8a8e5f8-9c29-11e6-840f-8e514c08a4cf)
[Wireframe 4](https://git.generalassemb.ly/storage/user/28/files/f57252e2-9c29-11e6-98de-1de8aedb1fcc)

Unsolved issues & potential further improvements:
- Rerouting the saveFavorites and deleteFavorites to stay on the ost page with the new info rendered
- Setting the movie search as a get so that the ost page can grab that info and display it on the page - ie 'Tunes from [x]' when users search 'x'
- Fixing the css scroll functions so the subheadings remain in place
- Improvement: link another API to render the images of the movies featured
- Improvement: error alert for when movie is not available
- Improvement: allow user to edit the scene in personal collection instead of name

