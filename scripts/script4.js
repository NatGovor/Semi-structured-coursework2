// unpaid amount per driver last month
var lastMonthRevenue = db.bookings.aggregate(
   [
      {
         $match:
            {
              'dateOfPayment': {
                  $gte: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1, 0 , 0, 0),
                  $lte: new Date(new Date().getFullYear(), new Date().getMonth(), 0, 23, 59, 59)
              },
            }
      },
     {
       $group:
         {
           _id: {driver: '$driver'},
           payAmount: { $sum: '$amount' },
          // payAmount: { $multiply: [ $sum: '$amount', '$driver.percentageOfReceipt' / 100 ] } ,

        }
     }
   ]
)

var lastMonthRevenueExist = db.getCollection('revenue').find({
  'startDate': {$gte: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1, 0 , 0, 0)},
  'endDate': {$lte: new Date(new Date().getFullYear(), new Date().getMonth(), 0, 23, 59, 59)},
}).count();

if(lastMonthRevenueExist) {
  db.revenue.insert({

  })
}


