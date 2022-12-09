// Map
let map = L.map('map', {
    trackResize: true,
    zoomDelta: 0.25,
    zoomSnap: 0,
    boxZoom: true
}).setView([41.605, -88.080516], 17.25);


// map layers

// GeoJSON layers
let vectorLayer = L.geoJSON().addTo(map);

// tile layer
let tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// watermark
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');

        img.src = 'https://lewisu.edu/images/logo90.png';
        img.style.width = '300px';

        return img;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});

// controls
// lat/lng onClick()
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

// Watermark
L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}
L.control.watermark({ position: 'topright' }).addTo(map);

// added zoom controls
L.control.zoom({ position: 'bottomleft' }).addTo(map);

// scale
L.control.scale({ position: 'bottomright' }).addTo(map);

// Building Class
// declare building array
const buildings = [];
let BuildingClass = L.Class.extend({
    // add one property
    BuildingLewisMapCode: "",
});

BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "FA18",
    BuildingName: "Oremus Fine Arts Center",
    JsonCoordinatesArray: [[41.606751, -88.082339],
        [41.607048, -88.081952],
        [41.606891, -88.081754],
        [41.606783, -88.081877],
        [41.606522, -88.081523],
        [41.606334, -88.081775]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    BuildingKeywords: [["arts"], ["center"]],
    LocationLatitude: 41.60669331948281,
    LocationLongitude: -88.08174331719218,
    LocationAddressNumber: 0,
    LocationAddress: "University Dr W",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60446,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

    // Methods
    getBuildingLewisMapCode: function () {return this.BuildingLewisMapCode},
    getBuildingName: function () {return this.BuildingName},
    getJsonCoordinatesArray: function () {return this.JsonCoordinatesArray},
    getBuildingDescription: function () {return this.BuildingDescription},
    getBuildingHyperlink: function () {return this.BuildingHyperlink},
    getLocationLatitude: function () {return this.LocationLattitude},
    getLocationLongitude: function () {return this.LocationLongitude},
    getLocationAddressNumber: function () {return this.LocationAddressNumber},
    getLocationAddress: function () {return this.LocationAddress},
    getLocationAddress2: function () {return this.LocationAddress2},
    getLocationCity: function () {return this.LocationCity},
    getLocationState: function () {return this.LocationState},
    getLocationZip: function () {return this.LocationZip},
    getLocationPhone: function () {return this.LocationPhone},
    getLocationClosed: function () {return this.LocationClosed},
    getLocationDescription: function () {return this.LocationDescription},
    getLocationHyperlink: function () {return this.LocationHyperlink},
});

// buildingFA18 object
let buildingFA18 = new BuildingClass();
// add object to buildings array
buildings.push(buildingFA18);

// Building Vectors
// create FA18 polygon
let FA18 = [buildingFA18.JsonCoordinatesArray];

// FA18 polygon properties and popup
let polygon = L.polygon(FA18, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingFA18.getBuildingName() + '</b><br>Building: ' + buildingFA18.BuildingLewisMapCode);
let popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "SU15",
    BuildingName: "Lewis Memorial Hall",
    JsonCoordinatesArray: [[41.606235, -88.081317], [41.606233, -88.081],  [41.606111, -88.080997],  [41.606107, -88.080952], [41.605989, -88.080952], [41.605991, -88.080989], [41.605876, -88.080997], [41.60588, -88.08133], [41.605983, -88.081336], [41.605989, -88.081376], [41.606128, -88.081373], [41.606132, -88.081322]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.606130913714715,
    LocationLongitude: -88.08113869728327,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60446,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",
    LocationKeywords: [[""]],

});

// buildingSU15 object
let buildingSU15 = new BuildingClass();
// add object to buildings array
buildings.push(buildingSU15);

// Building Vectors
// create SU15 polygon
let SU15 = [buildingSU15.JsonCoordinatesArray];

// SU15 polygon properties and popup
polygon = L.polygon(SU15, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingSU15.getBuildingName() + '</b><br>Building: ' + buildingSU15.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "SR1312",
    BuildingName: "Shipping/Receiving",
    JsonCoordinatesArray: [[41.669606, -88.076555], [41.669648, -88.076594], [41.669806, -88.076597], [41.669816, -88.076063], [41.66979, -88.076011], [41.669616, -88.076003], [41.669612, -88.076111], [41.669646, -88.076146], [41.669612, -88.076222], [41.66964, -88.076257], [41.669612, -88.076335], [41.669636, -88.07637], [41.669608, -88.076446], [41.669634, -88.076473]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.669815343026166,
    LocationLongitude: -88.07630753096431,
    LocationAddressNumber: 1312,
    LocationAddress: "Enterprise Drive",
    LocationAddress2: "Unit J",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "Shipping/Receiving",
    LocationHyperlink: "",

});

// buildingSR1312 object
let buildingSR1312 = new BuildingClass();
// add object to buildings array
buildings.push(buildingSR1312);

// Building Vectors
// create SR1312 polygon
let SR1312 = [buildingSR1312.JsonCoordinatesArray];

// SR1312 polygon properties and popup
polygon = L.polygon(SR1312, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingSR1312.getBuildingName() + '</b><br>Building: ' + buildingSR1312.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "AS12",
    BuildingName: "Academic Science Center",
    JsonCoordinatesArray: [[41.606621, -88.080927], [41.606641, -88.080403], [41.606604, -88.080403], [41.606606, -88.080387], [41.606719, -88.080387], [41.606727, -88.079854], [41.606787, -88.079762], [41.606682, -88.079647], [41.60665, -88.079695], [41.60663, -88.079679], [41.606277, -88.07988], [41.606277, -88.079819], [41.606243, -88.079808], [41.606245, -88.079314], [41.605974, -88.079309], [41.605968, -88.079998], [41.605956, -88.080006], [41.60595, -88.080546], [41.606217, -88.080554], [41.606221, -88.080731], [41.606394, -88.080736], [41.606392, -88.080934], [41.606618, -88.080937]],
    BuildingDescription: "",
    BuildingHyperlink: "https://www.lewisu.edu/sciencecenter/index.htm",
    LocationLatitude: 41.606621,
    LocationLongitude: -88.080927,
    LocationAddressNumber: 1312,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingAS12 object
let buildingAS12 = new BuildingClass();
// add object to buildings array
buildings.push(buildingAS12);

// Building Vectors
// create AS12 polygon
let AS12 = [buildingAS12.JsonCoordinatesArray];

// AS12 polygon properties and popup
polygon = L.polygon(AS12, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingAS12.getBuildingName() + '</b><br>Building: ' + buildingAS12.BuildingLewisMapCode + "<br>" + "<a href=" + buildingAS12.BuildingHyperlink + " target= '_blank'>Science Center Website</a>");
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "BE43",
    BuildingName: "Benilde Hall",
    JsonCoordinatesArray: [[41.60295, -88.079174], [41.602937, -88.07882], [41.6024, -88.078818], [41.602396, -88.078748], [41.602278, -88.078748], [41.602275, -88.079306], [41.602402, -88.079315], [41.602402, -88.079174]],
    BuildingDescription: "",
    BuildingHyperlink: "https://www.lewisu.edu/sciencecenter/index.htm",
    LocationLatitude: 41.602668975234245,
    LocationLongitude: -88.07901160213044,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingBE43 object
let buildingBE43 = new BuildingClass();
// add object to buildings array
buildings.push(buildingBE43);

// Building Vectors
// create BE43 polygon
let BE43 = [buildingBE43.JsonCoordinatesArray];

// BE43 polygon properties and popup
polygon = L.polygon(BE43, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingBE43.getBuildingName() + '</b><br>Building: ' + buildingBE43.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "LR33",
    BuildingName: "Brother Paul French, FSC Learning Resource Center / LRC",
    JsonCoordinatesArray: [[41.605737, -88.079219], [41.605741, -88.078963], [41.605796, -88.078957], [41.605796, -88.07885], [41.605748, -88.078848],[41.605748, -88.078748], [41.605122, -88.078727], [41.605112, -88.07921]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.605737,
    LocationLongitude: -88.079219,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingLR33 object
let buildingLR33 = new BuildingClass();
// add object to buildings array
buildings.push(buildingLR33);

// Building Vectors
// create LR33 polygon
let LR33 = [buildingLR33.JsonCoordinatesArray];

// LR33 polygon properties and popup
polygon = L.polygon(LR33, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingLR33.getBuildingName() + '</b><br>Building: ' + buildingLR33.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "CD61",
    BuildingName: "Cody Hall",
    JsonCoordinatesArray: [[41.601399, -88.077981], [41.601082, -88.077575], [41.601001, -88.077666], [41.601325, -88.078054]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.60125595396016,
    LocationLongitude: -88.077823802130457,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingCD61 object
let buildingCD61 = new BuildingClass();
// add object to buildings array
buildings.push(buildingCD61);

// Building Vectors
// create CD61 polygon
let CD61 = [buildingCD61.JsonCoordinatesArray];

// CD61 polygon properties and popup
polygon = L.polygon(CD61, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingCD61.getBuildingName() + '</b><br>Building: ' + buildingCD61.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "DL45",
    BuildingName: "De La Salle Hall",
    JsonCoordinatesArray: [[41.602896, -88.080763], [41.60289, -88.080172], [41.60277, -88.08017], [41.602768, -88.080057], [41.60268, -88.080055], [41.602678, -88.079993], [41.602525, -88.07999], [41.602525, -88.080057], [41.602402, -88.080059], [41.602405, -88.080326], [41.602351, -88.080331], [41.602347, -88.080186], [41.602266, -88.080189], [41.602268, -88.080782], [41.602343, -88.080783], [41.602339, -88.080639], [41.602477, -88.080642], [41.602481, -88.080924], [41.602667, -88.080921], [41.602667, -88.080661], [41.602816, -88.080658], [41.602818, -88.080763], [41.602892, -88.080763]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.602896,
    LocationLongitude: -88.080763,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingDL45 object
let buildingDL45 = new BuildingClass();
// add object to buildings array
buildings.push(buildingDL45);

// Building Vectors
// create DL45 polygon
let DL45 = [buildingDL45.JsonCoordinatesArray];

// DL45 polygon properties and popup
polygon = L.polygon(DL45, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingDL45.getBuildingName() + '</b><br>Building: ' + buildingDL45.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "DO55",
    BuildingName: "Dorothy Day Hall",
    JsonCoordinatesArray: [[41.60128, -88.083037], [41.601282, -88.082745], [41.601169, -88.082742], [41.601167, -88.082718], [41.601033, -88.082718], [41.601035, -88.082758], [41.600927, -88.082761], [41.600927, -88.083048], [41.601029, -88.083051], [41.601031, -88.083091], [41.601171, -88.083091], [41.601173, -88.083035]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.60128,
    LocationLongitude: -88.083037,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingDO55 object
let buildingDO55 = new BuildingClass();
// add object to buildings array
buildings.push(buildingDO55);

// Building Vectors
// create DO55 polygon
let DO55 = [buildingDO55.JsonCoordinatesArray];

// DO55 polygon properties and popup
polygon = L.polygon(DO55, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingDO55.getBuildingName() + '</b><br>Building: ' + buildingDO55.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "FO36",
    BuildingName: "Founders Hall",
    JsonCoordinatesArray: [[41.604675, -88.079207], [41.604675, -88.078765], [41.60436, -88.078767], [41.604358, -88.078915], [41.604555, -88.078923], [41.604555, -88.079202]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.60128,
    LocationLongitude: -88.083037,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingFO36 object
let buildingFO36 = new BuildingClass();
// add object to buildings array
buildings.push(buildingFO36);

// Building Vectors
// create FO36 polygon
let FO36 = [buildingFO36.JsonCoordinatesArray];

// FO36 polygon properties and popup
polygon = L.polygon(FO36, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingFO36.getBuildingName() + '</b><br>Building: ' + buildingFO36.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "SC23",
    BuildingName: "JFK Student Recreation and Sports Center",
    JsonCoordinatesArray: [[41.605552, -88.082404], [41.60556, -88.081718], [41.605257, -88.08170], [41.605042, -88.08193], [41.604976, -88.081846], [41.604882, -88.081916], [41.60481, -88.081916], [41.60481, -88.081747], [41.603999, -88.081736], [41.603987, -88.082345], [41.604797, -88.082369], [41.604795, -88.082353], [41.605211, -88.082372], [41.605213, -88.082399]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.60128,
    LocationLongitude: -88.083037,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingSC23 object
let buildingSC23 = new BuildingClass();
// add object to buildings array
buildings.push(buildingSC23);

// Building Vectors
// create SC23 polygon
let SC23 = [buildingSC23.JsonCoordinatesArray];

// SC23 polygon properties and popup
polygon = L.polygon(SC23, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingSC23.getBuildingName() + '</b><br>Building: ' + buildingSC23.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "MC11",
    BuildingName: "McNamara Hall",
    JsonCoordinatesArray: [[41.607125, -88.079421], [41.607122, -88.079291], [41.606887, -88.079288], [41.606889, -88.079424]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.607125,
    LocationLongitude: -88.079421,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingMC11 object
let buildingMC11 = new BuildingClass();
// add object to buildings array
buildings.push(buildingMC11);

// Building Vectors
// create MC11 polygon
let MC11 = [buildingMC11.JsonCoordinatesArray];

// MC11 polygon properties and popup
polygon = L.polygon(MC11, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingMC11.getBuildingName() + '</b><br>Building: ' + buildingMC11.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "MT56",
    BuildingName: "Mother Teresa Hall",
    JsonCoordinatesArray: [[41.601733, -88.082361], [41.601735, -88.082064], [41.601606, -88.082058], [41.601602, -88.082034], [41.601484, -88.082034], [41.601484, -88.082062], [41.601366, -88.082072], [41.60137, -88.082375], [41.601482, -88.082378], [41.60148, -88.08241], [41.601606, -88.082402], [41.601608, -88.082369], [41.601733, -88.082361]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.601733,
    LocationLongitude: -88.082361,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingMT56 object
let buildingMT56 = new BuildingClass();
// add object to buildings array
buildings.push(buildingMT56);

// Building Vectors
// create MT56 polygon
let MT56 = [buildingMT56.JsonCoordinatesArray];

// MT56 polygon properties and popup
polygon = L.polygon(MT56, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingMT56.getBuildingName() + '</b><br>Building: ' + buildingMT56.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "NO39",
    BuildingName: "North Hall",
    JsonCoordinatesArray: [[41.604352, -88.079618], [41.604352, -88.079462], [41.604272, -88.079459], [41.604268, -88.079435], [41.604226, -88.079435], [41.604228, -88.079365], [41.604206, -88.079363], [41.60421, -88.079162], [41.604226, -88.079164], [41.604224, -88.079006], [41.604214, -88.078998], [41.604214, -88.078888], [41.604089, -88.078993], [41.604077, -88.078995], [41.604075, -88.079135], [41.604096, -88.07914], [41.604091, -88.079373], [41.604073, -88.079376], [41.604071, -88.079513], [41.604081, -88.079518], [41.604079, -88.079636], [41.60426, -88.079647], [41.60426, -88.079617]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.604352,
    LocationLongitude: -88.079618,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingNO39 object
let buildingNO39 = new BuildingClass();
// add object to buildings array
buildings.push(buildingNO39);

// Building Vectors
// create NO39 polygon
let NO39 = [buildingNO39.JsonCoordinatesArray];

// NO39 polygon properties and popup
polygon = L.polygon(NO39, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingNO39.getBuildingName() + '</b><br>Building: ' + buildingNO39.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "JP58",
    BuildingName: "Pope John Paul II Hall",
    JsonCoordinatesArray: [[41.601721, -88.081272], [41.601725, -88.08101], [41.60161, -88.081007], [41.601608, -88.080948], [41.60148, -88.080948], [41.601478, -88.080999], [41.601364, -88.081007], [41.601364, -88.081288], [41.601478, -88.081291], [41.601478, -88.081326], [41.601598, -88.081321], [41.601602, -88.081275]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.601721,
    LocationLongitude: -88.081272,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingJP58 object
let buildingJP58 = new BuildingClass();
// add object to buildings array
buildings.push(buildingJP58);

// Building Vectors
// create JP58 polygon
let JP58 = [buildingJP58.JsonCoordinatesArray];

// JP58 polygon properties and popup
polygon = L.polygon(JP58, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingJP58.getBuildingName() + '</b><br>Building: ' + buildingJP58.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "PH51",
    BuildingName: "The Powerhouse Flex and Fitness Center",
    JsonCoordinatesArray: [[41.602561, -88.083855], [41.602565, -88.083676], [41.602325, -88.083676], [41.602323, -88.083858]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.601721,
    LocationLongitude: -88.081272,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingPH51 object
let buildingPH51 = new BuildingClass();
// add object to buildings array
buildings.push(buildingPH51);

// Building Vectors
// create PH51 polygon
let PH51 = [buildingPH51.JsonCoordinatesArray];

// PH51 polygon properties and popup
polygon = L.polygon(PH51, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingPH51.getBuildingName() + '</b><br>Building: ' + buildingPH51.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "RY59",
    BuildingName: "Ryan Hall",
    JsonCoordinatesArray: [[41.601641, -88.079321], [41.601637, -88.078699], [41.601547, -88.078694], [41.601545, -88.079324]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.601641,
    LocationLongitude: -88.079321,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingRY59 object
let buildingRY59 = new BuildingClass();
// add object to buildings array
buildings.push(buildingRY59);

// Building Vectors
// create RY59 polygon
let RY59 = [buildingRY59.JsonCoordinatesArray];

// PH51 polygon properties and popup
polygon = L.polygon(RY59, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingRY59.getBuildingName() + '</b><br>Building: ' + buildingRY59.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "SL26",
    BuildingName: "Sheil Hall",
    JsonCoordinatesArray: [[41.605001, -88.081471], [41.605006, -88.081288], [41.604784, -88.081275], [41.604787, -88.081063], [41.604814, -88.08107], [41.604816, -88.080908], [41.604657, -88.080905], [41.604653, -88.081042], [41.604683, -88.081047], [41.604677, -88.081278], [41.604473, -88.081283], [41.604471, -88.081474], [41.604675, -88.081476], [41.604681, -88.0815], [41.604777, -88.081503], [41.604779, -88.081471]],
    BuildingDescription: "",
    BuildingHyperlink: "",
    LocationLatitude: 41.601641,
    LocationLongitude: -88.079321,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingSL26 object
let buildingSL26 = new BuildingClass();
// add object to buildings array
buildings.push(buildingSL26);

// Building Vectors
// create SL26 polygon
let SL26 = [buildingSL26.JsonCoordinatesArray];

// SL26 polygon properties and popup
polygon = L.polygon(SL26, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingSL26.getBuildingName() + '</b><br>Building: ' + buildingSL26.BuildingLewisMapCode);
popup = L.popup();


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "SH49",
    BuildingName: "South Hall",
    JsonCoordinatesArray: [[41.602905, -88.08336], [41.6029, -88.082784], [41.602806, -88.082781], [41.602806, -88.082781],  [41.602688, -88.082821], [41.602682, -88.082642], [41.602593, -88.082642], [41.602591, -88.082593], [41.602591, -88.082639], [41.602589, -88.082588], [41.602571, -88.082588], [41.602571, -88.08254], [41.602489, -88.082534], [41.602487, -88.082601], [41.602461, -88.082604], [41.602459, -88.082741], [41.602461, -88.082736], [41.602489, -88.082736], [41.602489, -88.082867], [41.602403, -88.08287], [41.602401, -88.082797], [41.602206, -88.082797], [41.602208, -88.083379], [41.602242, -88.083387], [41.602242, -88.08342], [41.602304, -88.083411], [41.602306, -88.083368], [41.602397, -88.083366], [41.602397, -88.082929], [41.602497, -88.082926], [41.602497, -88.083205], [41.602676, -88.083202], [41.602682, -88.082883], [41.602814, -88.082889], [41.602822, -88.083358]],
    BuildingDescription: "The College of Nursing and Health Sciences encompasses the fields of nursing, occupational therapy, speech-language pathology, and exercise and movement science.",
    BuildingHyperlink: "<https://www.lewisu.edu/academics/nursing/index.htm</p>",
    LocationLatitude: 41.602905,
    LocationLongitude: -88.08336,
    LocationAddressNumber: 0,
    LocationAddress: "",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",

});

// buildingSH49 object
let buildingSH49 = new BuildingClass();
// add object to buildings array
buildings.push(buildingSH49);

// Building Vectors
// create SH49 polygon
let SH49 = [buildingSH49.JsonCoordinatesArray];

// SH49 polygon properties and popup
polygon = L.polygon(SH49, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);

polygon.on("click", changeSearchFeedback);
//polygon.bindPopup('<b>' + buildingSH49.getBuildingName() + '</b><br>Building: ' + buildingSH49.BuildingLewisMapCode + '<p></b>Description: ' + buildingSH49.BuildingDescription + '</b><br>Website: <a href=' + buildingSH49.BuildingHyperlink + ' target= _blank>' + buildingSH49.BuildingName + "<br>" + "<a href=" + buildingSH49.BuildingHyperlink + " target= '_blank'>" + buildingSH49.BuildingHyperlink + " Website</a>");
//popup = L.popup();

function changeSearchFeedback() {

    if (!document.getElementById) return;

    var newtitle = document.changeform.newtitle.value;

    var searchBox = document.getElementById("searchBox");

    searchBox.firstChild.nodeValue="testing";

  }



// marker function
// markers with icons
let coffeeIcon = L.icon({
    iconUrl: 'images/cafe-outline.svg',
    shadowUrl: 'images/icon_shadow.svg',

    iconSize: [140, 60], //size of the icon
    shadowSize: [140, 60], //size of the shadow
    iconAnchor: [68, 60], //point of the icon which will correspond to marker's location
    shadowAnchor: [68, 60], //point of the shadow which will correspond to marker's location
    popupAnchor: [0, -60] // point from which the popup should open relative to the iconAnchor
});

// placing coffee marker
/*
let marker;
marker = L.marker([41.602504, -88.080721], {icon: coffeeIcon}).addTo(map);
marker.bindPopup("<b>Courtyard Café</b><br>Bldg. DL45<br><a href='https://content-service.sodexomyway.com/media/NEWStarbucksMenu8.15.22_tcm82-155876.pdf?url=https://lewisu.sodexomyway.com/' target='_blank'>menu</a>");
popup = L.popup();*/
