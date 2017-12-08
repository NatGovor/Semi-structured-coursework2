db.getCollection('bookings').aggregate({ 
    $match: {'dateOfPayment': {"$exists":false, $eq: null}} },
    { $group: 
        { _id : 'totalUnpaidAmount', sum : { $sum: "$amount" } 
    } 
})