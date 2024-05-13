module.exports = function(movies) {
  return {
    getMovies: function(req, res) {
      res.render('index', { movies });
    },
    addMovie: function(req, res) {
      const { title, director, rating } = req.body;
      const newMovie = { title, director, rating, watched: false, review: '' };
      movies.push(newMovie);
      res.redirect('/');
    },
    markAsWatched: function(req, res) {
      const movieIndex = req.params.id;
      movies[movieIndex].watched = true;
      res.redirect('/');
    },
    addReview: function(req, res) {
      const movieIndex = req.params.id;
      const review = req.body.review;
      movies[movieIndex].review = review;
      res.redirect('/');
    },
    deleteMovie: function(req, res) {
      const index = req.params.index;
      if (index >= 0 && index < movies.length) {
        movies.splice(index, 1);
      }
      res.redirect('/');
    }
  };
};


