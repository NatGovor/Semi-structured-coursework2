var pageNumber = 1;
var limitPerPage = 10;
db.bookings.find().skip(limitPerPage * (pageNumber - 1) ).limit(limitPerPage)