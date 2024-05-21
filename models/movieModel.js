class Movie {
  constructor(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
    this.watched = false;
    this.review = '';
  }

  markAsWatched() {
    this.watched = true;
  }

  markAsUnwatched() {
    this.watched = false;
  }

  addReview(review) {
    this.review = review;
  }

  update(title, director, rating, review) {
    this.title = title;
    this.director = director;
    this.rating = rating;
    this.review = review;
  }
}

module.exports = Movie;
