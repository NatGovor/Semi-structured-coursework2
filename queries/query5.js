// first way
db.bookings.aggregate([
	{ $sort : {amount  : -1, dateOfPayment: -1} },
    { $limit: 10 }
]);
   
// second way  
db.bookings.find()
     .sort({amount  : -1, dateOfPayment: -1} )
     .limit(10);