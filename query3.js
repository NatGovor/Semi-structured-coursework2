db.getCollection('drivers').find({
    'cars.dateOfLastMOTTest': {"$lte": new Date(new Date().setDate(new Date().getDate() - 330))}
 });