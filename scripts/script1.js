var selectedBooking = db.getCollection('bookings').findOne({
    '_id': ObjectId("5a24003c95649f22efbb18fe"),
 });
 db.getCollection('operators').find({
    '_id': selectedBooking.operatorId,
 });
 db.getCollection('drivers').find({
    '_id': selectedBooking.driver.driverId,
 });