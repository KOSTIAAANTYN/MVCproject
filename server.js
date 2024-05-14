const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));

const movies = [];

const movieController = require('./controllers/movieController')(movies);

app.get('/', movieController.getMovies);
app.post('/add', movieController.addMovie);
app.post('/watched/:id', movieController.markAsWatched); 
app.post('/review/:id', movieController.addReview); 
app.post('/delete/:index', movieController.deleteMovie);
app.get('/edit/:index', movieController.editMovieForm);
app.post('/edit/:index', movieController.editMovie);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
