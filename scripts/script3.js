db.getCollection('bookings').aggregate(
   [
     {
       $group:
         {
           _id: {clientId: '$clientId'},
           totalProfit: { $sum: '$amount' },
         }
     },
     { $sort: {'totalProfit': -1} },
     { $limit: 1 }
   ]
);
