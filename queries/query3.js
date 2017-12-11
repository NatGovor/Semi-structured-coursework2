db.getCollection('drivers').find({
    'cars.dateOfLastMOTTest': {"$lte": new Date(new Date().setDate(new Date().getDate() - 330))}
 });
 
 // display only driver's id and cars
 db.getCollection('drivers').find({
    'cars.dateOfLastMOTTest': {"$lte": new Date(new Date().setDate(new Date().getDate() - 330))}
 }, {"_id": 1, "cars": 1});