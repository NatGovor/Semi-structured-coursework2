// find available drivers for a ride at specified time (11:15 in example)
db.getCollection('drivers').find({
	'shift.startTime': {$lte: '16:15'}, 
	'shift.endTime': {$gte: '16:15'}}
);

// find available drivers for a ride at current time
db.getCollection('drivers').find({
	'shift.startTime': {$lte: new Date().getHours() + ':' + new Date().getMinutes()}, 
	'shift.endTime': {$gte: new Date().getHours() + ':' + new Date().getMinutes()}
});

// the specified or current time should be within drivers' shifts and drivers should have available cars
db.getCollection('drivers').find({
	'shift.startTime': {$lte: '16:15'}, 
	'shift.endTime': {$gte: '16:15'},
	'cars': {$elemMatch: { 'carStatus': 'roadworthy'}}
});