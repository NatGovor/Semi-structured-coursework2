	db.getCollection('drivers').find({'shift.startTime': {$lte: new Date().getHours() + ':' + new Date().getMinutes()}, 'shift.endTime': {$gte: new Date().getHours() + ':' + new Date().getMinutes()}})