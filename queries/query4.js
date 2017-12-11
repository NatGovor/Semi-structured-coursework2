// hom many unpaid rides(bookings) we have?
db.getCollection('bookings').find({
    'dateOfPayment': { $exists: false }
}).count();

// get all unpaid rides(bookings)
db.getCollection('bookings').find({
    'dateOfPayment': { $exists: false }
});

// how much money should we recieve from unpaid bookings?
db.getCollection('bookings').aggregate(
    { 
        $match: {'dateOfPayment': { $exists: false }}
    },
    {
        $group: { _id : 'totalUnpaidAmount', sum : { $sum: "$amount" }}
    } 
);