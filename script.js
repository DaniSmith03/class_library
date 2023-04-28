class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get ratings() {
    return this._ratings;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  addRating(num) {
    if (num > 0 && num <= 5) {
      this.ratings.push(num);
    } else {
      console.log('Invalid Rating');
    }
  }

  getAverageRating() {
    let sum = this._ratings.reduce((acc, cv) => {
      return acc + cv;
    });
    return sum / this._ratings.length;
  }

  toggleCheckedOutStatus() {
    return this._isCheckedOut === false;
  }
}

// let movie = new Media('this movie');
// console.log(movie);

// console.log(movie.getAverageRating());

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}
