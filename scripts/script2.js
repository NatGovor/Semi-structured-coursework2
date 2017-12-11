// Total last month revenue
db.revenue.aggregate(
   [{
       $match: {
            'startDate': {$gte: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1, 0 , 0, 0)},
           'endDate': {$lte: new Date(new Date().getFullYear(), new Date().getMonth(), 0, 23, 59, 59)},
       }
     },
     {
       $group:
         {
           "_id": null,
           'totalLastMonthRevenue': { $sum: '$driverWage' },
         }
     }
   ]
)
     
// Average revenue
db.revenue.aggregate(
   [
     {
       $group:
         {
           "_id": null,
           "minDate": {$min: '$startDate'},
           "maxDate": {$max: '$endDate'},
           'totalLastMonthRevenue': { $sum: '$driverWage' },
         }
     }
   ]
);