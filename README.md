# PHL Property

A Node.js module for looking up information on properties in the City of Philadelphia.

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
{
  "normalized": [
    "1234 MARKET ST"
  ],
  "query": "1234 Market Street",
  "page": 1,
  "page_count": 1,
  "page_size": 1,
  "total_size": 1,
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "street_address": "1234 MARKET ST",
        "address_low": 1234,
        "address_low_suffix": "",
        "address_low_frac": "",
        "address_high": null,
        "street_predir": "",
        "street_name": "MARKET",
        "street_suffix": "ST",
        "street_postdir": "",
        "unit_type": "",
        "unit_num": "",
        "street_full": "MARKET ST",
        "street_code": 53560,
        "zip_code": "19107",
        "zip_4": "",
        "usps_bldgfirm": "JOHN WANAMAKER FINANCE STATION",
        "usps_type": "",
        "election_block_id": "24021362",
        "election_precinct": "0528",
        "pwd_parcel_id": "542611",
        "dor_parcel_id": "001S070144",
        "li_address_key": "410516",
        "pwd_account_nums": [
          "5356001234001",
          "5356001234005"
        ],
        "opa_account_num": "875100760",
        "opa_owners": [
          "SEPTA"
        ],
        "opa_address": "1234 MARKET ST",
        "geom_type": "centroid",
        "geom_source": "pwd_parcel",
        "center_city_district": "In",
        "cua_zone": "Bethanna",
        "li_district": "Central",
        "philly_rising_area": "Market East",
        "census_tract_2010": "000500",
        "census_block_group_2010": "1",
        "census_block_2010": "1017",
        "council_district_2016": "1",
        "political_ward": "5",
        "political_division": "0528",
        "planning_district": "Central",
        "elementary_school": "McCall",
        "middle_school": "McCall",
        "high_school": "Franklin HS",
        "zoning": "CMX5",
        "police_division": "CPD",
        "police_district": "6",
        "police_service_area": "063",
        "recreation_district": "10",
        "rubbish_recycle_day": "WED",
        "recycling_diversion_rate": 0.088,
        "leaf_collection_area": "Saturday Bag Dropoff",
        "sanitation_area": "2",
        "sanitation_district": "2B",
        "historic_street": "",
        "highway_district": "3",
        "highway_section": "3N",
        "highway_subsection": "3N1",
        "traffic_district": "1",
        "traffic_pm_district": "1206",
        "street_light_route": "13",
        "pwd_maint_district": "3E",
        "pwd_pressure_district": "EPG",
        "pwd_treatment_plant": "EAST PARK",
        "pwd_water_plate": "28A",
        "pwd_center_city_district": "In"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16097658476633,
          39.95166165567195
        ]
      }
    }
  ]
}



```
