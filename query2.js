db.getCollection('bookings').find({
    'dateTime': {
        $gte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), 
        $lte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59)
        }, 
})