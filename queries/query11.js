// For example, need to find operator and driver for the booking 
// from Private drive 10 which was on the 1st Septemper  2017 at 08:30
var selectedBooking = db.bookings.findOne({
    'departurePoint': 'Private drive 10',
    'dateTime': ISODate("2017-10-02T08:30:00")
 });
 
 db.operators.find({
    '_id': selectedBooking.operatorId,
 });
 
 db.drivers.find({
    '_id': selectedBooking.driver.driverId,
 });