// first method
// set the necessary date interval
db.bookings.find({
    'dateTime': {
        $gte: ISODate("2017-11-01T00:00:00.000Z"), 
        $lte: ISODate("2017-11-01T23:59:59.000Z")
        }
}).count();

// second method
// set the necessary date interval
db.bookings.aggregate(
  [
    {
      $match: {
        'dateTime': {
            $gte: ISODate("2017-11-01T00:00:00.000Z"), 
            $lte: ISODate("2017-11-01T23:59:59.000Z")
        }
      }
    },
    {
      $count: "todayBookingCount"
    }
  ]
);