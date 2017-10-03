// Question 1

function(doc) {
  emit(doc.title, doc.title);
}

// Question 2

function(doc) {
  if (doc.year > 2000) emit(doc.title, doc.year);
}

// Question 3, genre of See the Sea instead of summary of Spider-Man

function(doc) {
  if (doc.title == "See the Sea") emit(doc.title, doc.genre);
}

// Question 4, Matinee instead of Heat

function(doc) {
  if (doc.title == "Matinee") emit(doc.title, doc.director);
}

// Question 5, Natalina Checchi instead of Kirsten Dunst

function(doc) {
  if (doc.actors.some(function(e) e.actor == "Natalina Checchi")) emit(doc.actors, doc.title);
}

// Question 6, role of Chen Cavalier in The Wome and the World instead of Clint Eastwood in Unforgiven
// Doesn't work

function(doc) {
  if ((doc.title == "Home and the World, The (Ghare-Baire)") && (doc.actors.some(function(e) e.actor == "Chen Cavalier"))) emit(doc.title, doc.actors);
}

// Question 7

function(doc) {
  if (doc.actors.length == 3) emit(doc.title, doc.actors);
}

// Question 8
// ???

// Question 9
// ???

// Question 10
// ???

// Question 11

function(doc) {
  if ((doc.year > 1995) && (doc.year <= 1998)) emit(doc.title, doc.year);
}

// Question 12
// ???

// Question 13
// Not sure if this works

function(doc) {
  emit(doc.director, doc.title, 1)
}

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function(key, values) {
  groupBy(key)
}

// Question 14
// ???
