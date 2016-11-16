# PHL Property

A Node.js module for looking up information on properties in the City of Philadelphia.

Note - this module is deprecated because of [changes to the API](https://github.com/CityOfPhiladelphia/trashday#trash-day) it was meant to be used with. Since the underlying API is now much simpler, a full Node wrapper is probably not needed. Just use a generic module like [Request](https://www.npmjs.com/package/request) or HTTP/S in the [standard library](https://nodejs.org/api/http.html)

## Usage

Install via npm: 

```
~$ npm install phl-property --save
```

Run tests:

```
~$ npm test
``` 

Look up information on a property:

```javascript
var property = require('phl-property');

property.getPropertyInfo('1234 Market Street', function(error, response) {
  if(!error) {
    console.log(JSON.stringify(response));
  }
  else {
    console.log(JSON.stringify(error));
  }
});
```

Response:

```json
[
  {
    "sanitation_area": "2",
    "planning_district": "Central",
    "water_plate": "28A",
    "traffic_pm_district": "1206",
    "pwd_center_city_district": "In",
    "tract_2010": "500",
    "high_school": "Franklin HS",
    "rubbish": "WED",
    "traffic_district": "1",
    "ward": "5",
    "rising": "Market East",
    "recycle": "WED",
    "ppd_div": "CPD",
    "pwd_wtpsa": "EAST PARK",
    "council_2016": "1",
    "ppd_district": "6",
    "recycling_diversion_rate_score": "8.8",
    "x_coord": "2694254",
    "blkgrp_2000": "3",
    "leaf": "Saturday Bag Dropoff",
    "highway_district": "3",
    "y_coord": "235888",
    "middle_school": "McCall",
    "ward_div": "0528",
    "fire_district": "20",
    "highway_section": "3N",
    "lni_district": "Central",
    "street_light_route": "13",
    "rec_district": "10",
    "tract_2000": "000500",
    "address_id": "1234 MARKET ST",
    "highway_subsection": "3N 1",
    "council_2000": "1",
    "block_2000": "3012",
    "elementary_school": "McCall",
    "block_2010": "1017",
    "sanitation_district": "2B",
    "center_city_district": "In",
    "zipcode": "19107",
    "ppd_sector": "6J",
    "neighborhood": "MARKET EAST",
    "psa": "063",
    "pwd_pres_dist": "EPG",
    "pwd_maint_dist": "3E",
    "blkgrp_2010": "1"
  }
]


```

You can also standardize an address string or get geospatial information for a property to use in another module or application:

```javascript
var property = require('phl-property');

property.getStandardizedAddress('1234 market', function(error, response) {
  if(!error) {
    console.log(response);
  }
  else {
    console.log(error);
  }
});

```

Response:

```json
{
  "addresses": [
    {
      "links": [
        {
          "method": "GET",
          "href": "https://api.phila.gov/ulrs/v3/addresses/1234%20MARKET%20ST/parcels",
          "rel": "parcels"
        },
        {
          "method": "GET",
          "href": "https://api.phila.gov/ulrs/v3/addresses/1234%20MARKET%20ST/topics",
          "rel": "topics"
        },
        {
          "method": "GET",
          "href": "https://api.phila.gov/ulrs/v3/addresses/1234%20MARKET%20ST/data",
          "rel": "data"
        }
      ],
      "segmentId2": -1,
      "segmentId": 440394,
      "streetCode2": 0,
      "streetType": "ST",
      "streetName": "MARKET",
      "streetPrefix": null,
      "streetFullName": "MARKET ST",
      "xCoord": 2694254,
      "yCoord": 235888,
      "matchType": "Parcel",
      "rawAddress": "1234 market",
      "standardizedAddress": "1234 MARKET ST",
      "similarity": 91.5835411471322,
      "streetNumber": 1234,
      "streetCode": 53560
    }
  ]
}
```