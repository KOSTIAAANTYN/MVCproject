module.exports = function(movies) {
    return {
      getMovies: function(req, res) {
        res.render('index', { movies });
      },
      addMovie: function(req, res) {
        const { title, director, rating } = req.body;
        const newMovie = { title, director, rating };
        movies.push(newMovie);
        res.redirect('/');
      }
    };
  };
  