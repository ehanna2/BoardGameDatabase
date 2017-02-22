select
	e.Name
	, e.Description
	, e.Date
	, l.Name as Location
	, l.Address
	, l.City
	, l.State
	, l.Zip
from Events e
inner join Locations l on e.LocationID = l.locationID
where OwnerTypeID = 2 and OwnerID = {0}
