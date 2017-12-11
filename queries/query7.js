// first method
db.bookings.find({
    'dateTime': {
        $gte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), 
        $lte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59)
        }
}).count()

// second method
db.bookings.aggregate(
  [
    {
      $match: {
        'dateTime': {
            $gte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), 
            $lte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59)
        }
      }
    },
    {
      $count: "todayBookingCount"
    }
  ]
)
