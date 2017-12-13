var monthStart = "2017-12-01T00:00:00.000Z";
var monthEnd = "2017-12-31T00:00:00.000Z";

var revenueForMonth = db.revenue.find({
    'startDate': ISODate(monthStart),
    'endDate': ISODate(monthEnd),
});

// no revenue for specified month found
if (revenueForMonth.length === 0) {
	var drivers = db.drivers.find({});
	for (var i = 0; i < drivers.length; i++) {
		var incomeFromDriver = db.getCollection('bookings').aggregate([
			{
				$match: {
					'driver.driverId': drivers[i]._id,
					'dateTime': {
						$gte: ISODate(monthStart),
						$lte: ISODate(monthEnd)
					}
				}
			},
			{
				$group: {
					'_id': { driverId: '$driver.driverId' },
					'amountOfDriverBookings': { $sum: '$amount' }
				}
			}  
		]);
		
		var driverWage = 0;
		var companyWage = 0;
		
		if (drivers[i].percentageOfReceipt) {
			driverWage = incomeFromDriver.amountOfDriverBookings * 0.4;
		} else {
			driverWage = drivers[i].salary;
		}
		companyWage = incomeFromDriver.amountOfDriverBookings - driverWage;
		
		db.revenue.insert({
			driverId : drivers[i]._id,
			startDate : ISODate(monthStart),
			endDate : ISODate(monthEnd),
			driverWage : driverWage,
			companyWage : companyWage
		});
	}
}


