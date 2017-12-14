// find drivers whose cars will soon require MOT test
// we assume that MOT test is needed soon if the last was at least 330 days ago
db.drivers.find({
    'cars.dateOfLastMOTTest': {"$lte": new Date(new Date().setDate(new Date().getDate() - 330))}
 });
 
 // display only driver's id and cars
 db.drivers.find({
    'cars.dateOfLastMOTTest': {"$lte": new Date(new Date().setDate(new Date().getDate() - 330))}
 }, {"_id": 1, "cars": 1});