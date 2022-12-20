// Map
let map = L.map('map', {
    trackResize: true,
    zoomDelta: 0.25,
    zoomSnap: 0,
    boxZoom: true
}).setView([41.604182, -88.08067], 17.25);


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
// declare campusData array
const campusData = [];

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
    Rooms: [["First Floor &emsp; Art and Design"],["First Floor &emsp; Caterpillar Gallery"],["First Floor &emsp; Philip Lynch Theatre"],["First Floor &emsp; Wadsworth Family Gallery"]],

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
    getRooms: function () {return this.Rooms},
    toString: function () {return this.BuildingName + "<br>" + this.BuildingLewisMapCode + "<br>" + this.BuildingDescription + "<br>" + this.BuildingHyperlink},
});

// buildingFA18 object
let buildingFA18 = new BuildingClass();
// add object to buildings array
buildings.push(buildingFA18);

// Building Vectors
// create FA18 polygon
let FA18 = [buildingFA18.JsonCoordinatesArray];

// FA18 polygon properties and popup
let polygon = L.polygon(FA18, { color: 'green', fillOpacity: .7, weight: 1, id: 'polygon' }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingFA18.getBuildingName() + '</b><br>Building: ' + buildingFA18.BuildingLewisMapCode);
let popup = L.popup();

// building variables
let FA18name = buildingFA18.getBuildingName();
let FA18code = buildingFA18.getBuildingLewisMapCode();
let FA18link = buildingFA18.getBuildingHyperlink();
let FA18desc = buildingFA18.getBuildingDescription();
let FA18city = buildingFA18.getLocationCity();
let FA18state = buildingFA18.getLocationState();
let FA18zip = buildingFA18.getLocationZip();
let FA18rooms = buildingFA18.getRooms();

// push data to campusData
campusData.push(FA18name + " " + FA18code);

// polygon click function
function onClickFA18(e) {
    if (!document.getElementById) return;
    let fLen = FA18rooms.length;
    FA18rooms.sort();

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text += "<li>" + FA18rooms[i] + "</li>";
    }
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + FA18name;
    document.getElementById("buildingName").innerHTML = "<b>" + FA18name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + FA18code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = FA18desc;
    document.getElementById("buildingCityState").innerHTML = FA18city + ", " + FA18state + "  " + FA18zip;
    document.getElementById("buildingRooms").innerHTML = text;
    return;
}
polygon.on('click', onClickFA18);


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
    Rooms: [[""]],

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

// building variables
let SU15name = buildingSU15.getBuildingName();
let SU15code = buildingSU15.getBuildingLewisMapCode();
let SU15link = buildingSU15.getBuildingHyperlink();
let SU15desc = buildingSU15.getBuildingDescription();
let SU15city = buildingSU15.getLocationCity();
let SU15state = buildingSU15.getLocationState();
let SU15zip = buildingSU15.getLocationZip();
let SU15rooms = buildingSU15.getRooms();

// push data to campusData
campusData.push(SU15name + " " + SU15code);

// polygon click function
function onClickSU15(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + SU15name;
    document.getElementById("buildingName").innerHTML = "<b>" + SU15name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + SU15code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = SU15desc;
    document.getElementById("buildingCityState").innerHTML = SU15city + ", " + SU15state + "  " + SU15zip;
    document.getElementById("buildingRooms").innerHTML = SU15rooms;
    return;
}
polygon.on('click', onClickSU15);


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
    Rooms: [[""]],

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

// building variables
let SR1312name = buildingSR1312.getBuildingName();
let SR1312code = buildingSR1312.getBuildingLewisMapCode();
let SR1312link = buildingSR1312.getBuildingHyperlink();
let SR1312desc = buildingSR1312.getBuildingDescription();
let SR1312city = buildingSR1312.getLocationCity();
let SR1312state = buildingSR1312.getLocationState();
let SR1312zip = buildingSR1312.getLocationZip();
let SR1312rooms = buildingSR1312.getRooms();

// push data to campusData
campusData.push(SR1312name + " " + SR1312code);

// polygon click function
function onClickSR1312(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + SR1312name;
    document.getElementById("buildingName").innerHTML = "<b>" + SR1312name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + SR1312code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = SR1312desc;
    document.getElementById("buildingCityState").innerHTML = SR1312city + ", " + SR1312state + "  " + SR1312zip;
    document.getElementById("buildingRooms").innerHTML = SR1312rooms;
    return;
}
polygon.on('click', onClickSR1312);


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
    Rooms: [["Lower Level &emsp; CLASSROOM &emsp; AS-030-S"],["Lower Level &emsp; CLASSROOM &emsp; AS-032-S"],["Lower Level &emsp; CLASSROOM &emsp; AS-036-S"],["Lower Level &emsp; CLASSROOM &emsp; AS-058-S"]
    ,["Lower Level &emsp; CLASSROOM &emsp; AS-060-S"],["Lower Level &emsp; CLASSROOM &emsp; AS-054-S"],["Lower Level &emsp; CLASSROOM &emsp; AS-052-S"],["Lower Level &emsp; CLASSROOM &emsp; AS-018-S"]
    ,["Lower Level &emsp; CLASSROOM &emsp; AS-024-S"],["Lower Level &emsp; CLASSROOM &emsp; AS-019-S"],["Lower Level &emsp; GREENHOUSE &emsp; AS-028A-S"],["Lower Level &emsp; MECHANICAL EQUIPMENT ROOM &emsp; AS-056-S"]
    ,["Lower Level &emsp; PREP ROOM &emsp; AS-020-S"],["Lower Level &emsp; COLLABORATION &emsp; AS-026-S"],["Lower Level &emsp; WOMEN &emsp; AS-038-S"],["Lower Level &emsp; MEN &emsp; AS-040-S"],["Lower Level &emsp; LAN &emsp; AS-051-S"]
    ,["Lower Level &emsp; OFFICE &emsp; AS-057-S"],["Lower Level &emsp; OFFICE &emsp; AS-059-S"],["Lower Level &emsp; OFFICE &emsp; AS-053-S"],["Lower Level &emsp; OFFICE &emsp; AS-055-S"],["Lower Level &emsp; Physics"]
    ,["Lower Level &emsp; Greenhouse"],["Ground Level &emsp; Engineering, Computing and Mathematical Sciences"],["Ground Level &emsp; Cadaver Lab"],["Ground Level &emsp; Likens Virtual Reality Lab"]
    ,["Ground Level &emsp; Dean, Aviation, Science and Technology"],["Ground Level &emsp; Charlie’s Place"],["Upper Level &emsp; Biology"]],

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
polygon.bindPopup('<b>' + buildingAS12.getBuildingName() + '</b><br>Building: ' + buildingAS12.BuildingLewisMapCode + '<br>' + "<a href=" + buildingAS12.BuildingHyperlink + " target= '_blank'>Science Center Website</a>" + '<p align="center"><a href="images/IMG_0926.jpg" target= "_blank"><img src="images/IMG_0926.jpg" style="width:128px;"></a></p>');
popup = L.popup();

// building variables
let AS12name = buildingAS12.getBuildingName();
let AS12code = buildingAS12.getBuildingLewisMapCode();
let AS12link = buildingAS12.getBuildingHyperlink();
let AS12desc = buildingAS12.getBuildingDescription();
let AS12city = buildingAS12.getLocationCity();
let AS12state = buildingAS12.getLocationState();
let AS12zip = buildingAS12.getLocationZip();
let AS12rooms = buildingAS12.getRooms();

// push data to campusData
campusData.push(AS12name + " " + AS12code);

// polygon click function
function onClickAS12(e) {
    if (!document.getElementById) return;
    let fLen = AS12rooms.length;
    AS12rooms.sort();

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text += "<li>" + AS12rooms[i] + "</li>";
    }
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + AS12name;
    document.getElementById("buildingName").innerHTML = "<b>" + AS12name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + AS12code;
    document.getElementById("buildingHyperlink").innerHTML = "<a href=" + AS12link + " target= '_blank'>" + AS12name + " Website</a>";
    document.getElementById("buildingDescription").innerHTML = AS12desc;
    document.getElementById("buildingCityState").innerHTML = AS12city + ", " + AS12state + "  " + AS12zip;
    document.getElementById("buildingRooms").innerHTML = text;
    return;
}
polygon.on('click', onClickAS12);


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "BE43",
    BuildingName: "Benilde Hall",
    JsonCoordinatesArray: [[41.60295, -88.079174], [41.602937, -88.07882], [41.6024, -88.078818], [41.602396, -88.078748], [41.602278, -88.078748], [41.602275, -88.079306], [41.602402, -88.079315], [41.602402, -88.079174]],
    BuildingDescription: "",
    BuildingHyperlink: "",
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
    Rooms: [[""]],

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

// building variables
let BE43name = buildingBE43.getBuildingName();
let BE43code = buildingBE43.getBuildingLewisMapCode();
let BE43link = buildingBE43.getBuildingHyperlink();
let BE43desc = buildingBE43.getBuildingDescription();
let BE43city = buildingBE43.getLocationCity();
let BE43state = buildingBE43.getLocationState();
let BE43zip = buildingBE43.getLocationZip();
let BE43rooms = buildingBE43.getRooms();

// push data to campusData
campusData.push(BE43name + " " + BE43code);

// polygon click function
function onClickBE43(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + BE43name;
    document.getElementById("buildingName").innerHTML = "<b>" + BE43name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + BE43code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = BE43desc;
    document.getElementById("buildingCityState").innerHTML = BE43city + ", " + BE43state + "  " + BE43zip;
    document.getElementById("buildingRooms").innerHTML = BE43rooms;
    return;
}
polygon.on('click', onClickBE43);


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
    Rooms: [[""]],

});

// buildingLR33 object
let buildingLR33 = new BuildingClass();
buildings.push(buildingLR33);

// Building Vectors
// create LR33 polygon
let LR33 = [buildingLR33.JsonCoordinatesArray];

// LR33 polygon properties and popup
polygon = L.polygon(LR33, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingLR33.getBuildingName() + '</b><br>Building: ' + buildingLR33.BuildingLewisMapCode);
popup = L.popup();

// building variables
let LR33name = buildingLR33.getBuildingName();
let LR33code = buildingLR33.getBuildingLewisMapCode();
let LR33link = buildingLR33.getBuildingHyperlink();
let LR33desc = buildingLR33.getBuildingDescription();
let LR33city = buildingLR33.getLocationCity();
let LR33state = buildingLR33.getLocationState();
let LR33zip = buildingLR33.getLocationZip();
let LR33rooms = buildingLR33.getRooms();

// push data to campusData
campusData.push(LR33name + " " + LR33code);

// polygon click function
function onClickLR33(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + LR33name;
    document.getElementById("buildingName").innerHTML = "<b>" + LR33name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + LR33code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = LR33desc;
    document.getElementById("buildingCityState").innerHTML = LR33city + ", " + LR33state + "  " + LR33zip;
    document.getElementById("buildingRooms").innerHTML = LR33rooms;
    return;
}
polygon.on('click', onClickLR33);


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
    Rooms: [[""]],

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

// building variables
let CD61name = buildingCD61.getBuildingName();
let CD61code = buildingCD61.getBuildingLewisMapCode();
let CD61link = buildingCD61.getBuildingHyperlink();
let CD61desc = buildingCD61.getBuildingDescription();
let CD61city = buildingCD61.getLocationCity();
let CD61state = buildingCD61.getLocationState();
let CD61zip = buildingCD61.getLocationZip();
let CD61rooms = buildingCD61.getRooms();

// push data to campusData
campusData.push(CD61name + " " + CD61code);

// polygon click function
function onClickCD61(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + CD61name;
    document.getElementById("buildingName").innerHTML = "<b>" + CD61name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + CD61code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = CD61desc;
    document.getElementById("buildingCityState").innerHTML = CD61city + ", " + CD61state + "  " + CD61zip;
    document.getElementById("buildingRooms").innerHTML = CD61rooms;
    return;
}
polygon.on('click', onClickCD61);


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
    Rooms: ["First Floor &emsp; Mailroom"],

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

// building variables
let DL45name = buildingDL45.getBuildingName();
let DL45code = buildingDL45.getBuildingLewisMapCode();
let DL45link = buildingDL45.getBuildingHyperlink();
let DL45desc = buildingDL45.getBuildingDescription();
let DL45city = buildingDL45.getLocationCity();
let DL45state = buildingDL45.getLocationState();
let DL45zip = buildingDL45.getLocationZip();
let DL45rooms = buildingDL45.getRooms();

// push data to campusData
campusData.push(DL45name + " " + DL45code);

// polygon click function
function onClickDL45(e) {
    if (!document.getElementById) return;
    let fLen = DL45rooms.length;
    DL45rooms.sort();

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text += "<li>" + DL45rooms[i] + "</li>";
    }
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + DL45name;
    document.getElementById("buildingName").innerHTML = "<b>" + DL45name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + DL45code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = DL45desc;
    document.getElementById("buildingCityState").innerHTML = DL45city + ", " + DL45state + "  " + DL45zip;
    document.getElementById("buildingRooms").innerHTML = text;
    return;
}
polygon.on('click', onClickDL45);

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
    Rooms: [[""]],

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

// building variables
let DO55name = buildingDO55.getBuildingName();
let DO55code = buildingDO55.getBuildingLewisMapCode();
let DO55link = buildingDO55.getBuildingHyperlink();
let DO55desc = buildingDO55.getBuildingDescription();
let DO55city = buildingDO55.getLocationCity();
let DO55state = buildingDO55.getLocationState();
let DO55zip = buildingDO55.getLocationZip();
let DO55rooms = buildingDO55.getRooms();

// push data to campusData
campusData.push(DO55name + " " + DO55code);

// polygon click function
function onClickDO55(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + DO55name;
    document.getElementById("buildingName").innerHTML = "<b>" + DO55name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + DO55code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = DO55desc;
    document.getElementById("buildingCityState").innerHTML = DO55city + ", " + DO55state + "  " + DO55zip;
    document.getElementById("buildingRooms").innerHTML = DO55rooms;
    return;
}
polygon.on('click', onClickDO55);


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
    Rooms: [[""]],

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

// building variables
let FO36name = buildingFO36.getBuildingName();
let FO36code = buildingFO36.getBuildingLewisMapCode();
let FO36link = buildingFO36.getBuildingHyperlink();
let FO36desc = buildingFO36.getBuildingDescription();
let FO36city = buildingFO36.getLocationCity();
let FO36state = buildingFO36.getLocationState();
let FO36zip = buildingFO36.getLocationZip();
let FO36rooms = buildingFO36.getRooms();

// push data to campusData
campusData.push(FO36name + " " + FO36code);

// polygon click function
function onClickFO36(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + FO36name;
    document.getElementById("buildingName").innerHTML = "<b>" + FO36name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + FO36code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = FO36desc;
    document.getElementById("buildingCityState").innerHTML = FO36city + ", " + FO36state + "  " + FO36zip;
    document.getElementById("buildingRooms").innerHTML = FO36rooms;
    return;
}
polygon.on('click', onClickFO36);


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
    Rooms: [[""]],
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

// building variables
let SC23name = buildingSC23.getBuildingName();
let SC23code = buildingSC23.getBuildingLewisMapCode();
let SC23link = buildingSC23.getBuildingHyperlink();
let SC23desc = buildingSC23.getBuildingDescription();
let SC23city = buildingSC23.getLocationCity();
let SC23state = buildingSC23.getLocationState();
let SC23zip = buildingSC23.getLocationZip();
let SC23rooms = buildingSC23.getRooms();

// push data to campusData
campusData.push(SC23name + " " + SC23code);

// polygon click function
function onClickSC23(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + SC23name;
    document.getElementById("buildingName").innerHTML = "<b>" + SC23name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + SC23code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = SC23desc;
    document.getElementById("buildingCityState").innerHTML = SC23city + ", " + SC23state + "  " + SC23zip;
    document.getElementById("buildingRooms").innerHTML = SC23rooms;
    return;
}
polygon.on('click', onClickSC23);


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
    Rooms: [[""]],
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

// building variables
let MC11name = buildingMC11.getBuildingName();
let MC11code = buildingMC11.getBuildingLewisMapCode();
let MC11link = buildingMC11.getBuildingHyperlink();
let MC11desc = buildingMC11.getBuildingDescription();
let MC11city = buildingMC11.getLocationCity();
let MC11state = buildingMC11.getLocationState();
let MC11zip = buildingMC11.getLocationZip();
let MC11rooms = buildingMC11.getRooms();

// push data to campusData
campusData.push(MC11name + " " + MC11code);

// polygon click function
function onClickMC11(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + MC11name;
    document.getElementById("buildingName").innerHTML = "<b>" + MC11name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + MC11code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = MC11desc;
    document.getElementById("buildingCityState").innerHTML = MC11city + ", " + MC11state + "  " + MC11zip;
    document.getElementById("buildingRooms").innerHTML = MC11rooms;
    return;
}
polygon.on('click', onClickMC11);


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
    Rooms: [[""]],
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

// building variables
let MT56name = buildingMT56.getBuildingName();
let MT56code = buildingMT56.getBuildingLewisMapCode();
let MT56link = buildingMT56.getBuildingHyperlink();
let MT56desc = buildingMT56.getBuildingDescription();
let MT56city = buildingMT56.getLocationCity();
let MT56state = buildingMT56.getLocationState();
let MT56zip = buildingMT56.getLocationZip();
let MT56rooms = buildingMC11.getRooms();

// push data to campusData
campusData.push(MT56name + " " + MT56code);

// polygon click function
function onClickMT56(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + MT56name;
    document.getElementById("buildingName").innerHTML = "<b>" + MT56name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + MT56code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = MT56desc;
    document.getElementById("buildingCityState").innerHTML = MT56city + ", " + MT56state + "  " + MT56zip;
    document.getElementById("buildingRooms").innerHTML = MT56rooms;
    return;
}
polygon.on('click', onClickMT56);


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
    Rooms: [[""]],
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

// building variables
let NO39name = buildingNO39.getBuildingName();
let NO39code = buildingNO39.getBuildingLewisMapCode();
let NO39link = buildingNO39.getBuildingHyperlink();
let NO39desc = buildingNO39.getBuildingDescription();
let NO39city = buildingNO39.getLocationCity();
let NO39state = buildingNO39.getLocationState();
let NO39zip = buildingNO39.getLocationZip();
let NO39rooms = buildingNO39.getRooms();

// push data to campusData
campusData.push(NO39name + " " + NO39code);

// polygon click function
function onClickNO39(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + NO39name;
    document.getElementById("buildingName").innerHTML = "<b>" + NO39name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + NO39code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = NO39desc;
    document.getElementById("buildingCityState").innerHTML = NO39city + ", " + NO39state + "  " + NO39zip;
    document.getElementById("buildingRooms").innerHTML = NO39rooms;
    return;
}
polygon.on('click', onClickNO39);


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
    Rooms: [[""]],
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

// building variables
let JP58name = buildingJP58.getBuildingName();
let JP58code = buildingJP58.getBuildingLewisMapCode();
let JP58link = buildingJP58.getBuildingHyperlink();
let JP58desc = buildingJP58.getBuildingDescription();
let JP58city = buildingJP58.getLocationCity();
let JP58state = buildingJP58.getLocationState();
let JP58zip = buildingJP58.getLocationZip();
let JP58rooms = buildingJP58.getRooms();

// push data to campusData
campusData.push(JP58name + " " + JP58code);

// polygon click function
function onClickJP58(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + JP58name;
    document.getElementById("buildingName").innerHTML = "<b>" + JP58name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + JP58code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = JP58desc;
    document.getElementById("buildingCityState").innerHTML = JP58city + ", " + JP58state + "  " + JP58zip;
    document.getElementById("buildingRooms").innerHTML = JP58rooms;
    return;
}
polygon.on('click', onClickJP58);


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
    Rooms: [[""]],
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

// building variables
let PH51name = buildingPH51.getBuildingName();
let PH51code = buildingPH51.getBuildingLewisMapCode();
let PH51link = buildingPH51.getBuildingHyperlink();
let PH51desc = buildingPH51.getBuildingDescription();
let PH51city = buildingPH51.getLocationCity();
let PH51state = buildingPH51.getLocationState();
let PH51zip = buildingPH51.getLocationZip();
let PH51rooms = buildingPH51.getRooms();

// push data to campusData
campusData.push(PH51name + " " + PH51code);

// polygon click function
function onClickPH51(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + PH51name;
    document.getElementById("buildingName").innerHTML = "<b>" + PH51name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + JP58code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = PH51desc;
    document.getElementById("buildingCityState").innerHTML = PH51city + ", " + PH51state + "  " + PH51zip;
    document.getElementById("buildingRooms").innerHTML = PH51rooms;
    return;
}
polygon.on('click', onClickPH51);


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
    Rooms: [[""]],
});

// buildingRY59 object
let buildingRY59 = new BuildingClass();
// add object to buildings array
buildings.push(buildingRY59);

// Building Vectors
// create RY59 polygon
let RY59 = [buildingRY59.JsonCoordinatesArray];

// RY59 polygon properties and popup
polygon = L.polygon(RY59, { color: 'green', fillOpacity: .7, weight: 1, id: "polygon" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingRY59.getBuildingName() + '</b><br>Building: ' + buildingRY59.BuildingLewisMapCode);
popup = L.popup();

// building variables
let RY59name = buildingRY59.getBuildingName();
let RY59code = buildingRY59.getBuildingLewisMapCode();
let RY59link = buildingRY59.getBuildingHyperlink();
let RY59desc = buildingRY59.getBuildingDescription();
let RY59city = buildingRY59.getLocationCity();
let RY59state = buildingRY59.getLocationState();
let RY59zip = buildingRY59.getLocationZip();
let RY59rooms = buildingRY59.getRooms();

// push data to campusData
campusData.push(RY59name + " " + RY59code);

// polygon click function
function onClickRY59(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + RY59name;
    document.getElementById("buildingName").innerHTML = "<b>" + RY59name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + RY59code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = RY59desc;
    document.getElementById("buildingCityState").innerHTML = RY59city + ", " + RY59state + "  " + RY59zip;
    document.getElementById("buildingRooms").innerHTML = RY59rooms;
    return;
}
polygon.on('click', onClickRY59);

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
    Rooms: [[""]],
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

// building variables
let SL26name = buildingSL26.getBuildingName();
let SL26code = buildingSL26.getBuildingLewisMapCode();
let SL26link = buildingSL26.getBuildingHyperlink();
let SL26desc = buildingSL26.getBuildingDescription();
let SL26city = buildingSL26.getLocationCity();
let SL26state = buildingSL26.getLocationState();
let SL26zip = buildingSL26.getLocationZip();
let SL26rooms = buildingSL26.getRooms();

// push data to campusData
campusData.push(SL26name + " " + SL26code);

// polygon click function
function onClickSL26(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + SL26name;
    document.getElementById("buildingName").innerHTML = "<b>" + SL26name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + SL26code;
    document.getElementById("buildingHyperlink").innerHTML = "";
    document.getElementById("buildingDescription").innerHTML = SL26desc;
    document.getElementById("buildingCityState").innerHTML = SL26city + ", " + SL26state + "  " + SL26zip;
    document.getElementById("buildingRooms").innerHTML = SL26rooms;
    return;
}
polygon.on('click', onClickSL26);

// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "SH49",
    BuildingName: "South Hall",
    JsonCoordinatesArray: [[41.602905, -88.08336], [41.6029, -88.082784], [41.602806, -88.082781], [41.602806, -88.082781],  [41.602688, -88.082821], [41.602682, -88.082642], [41.602593, -88.082642], [41.602591, -88.082593], [41.602591, -88.082639], [41.602589, -88.082588], [41.602571, -88.082588], [41.602571, -88.08254], [41.602489, -88.082534], [41.602487, -88.082601], [41.602461, -88.082604], [41.602459, -88.082741], [41.602461, -88.082736], [41.602489, -88.082736], [41.602489, -88.082867], [41.602403, -88.08287], [41.602401, -88.082797], [41.602206, -88.082797], [41.602208, -88.083379], [41.602242, -88.083387], [41.602242, -88.08342], [41.602304, -88.083411], [41.602306, -88.083368], [41.602397, -88.083366], [41.602397, -88.082929], [41.602497, -88.082926], [41.602497, -88.083205], [41.602676, -88.083202], [41.602682, -88.082883], [41.602814, -88.082889], [41.602822, -88.083358]],
    BuildingDescription: "The College of Nursing and Health Sciences encompasses the fields of nursing, occupational therapy, speech-language pathology, and exercise and movement science.",
    BuildingHyperlink: "https://www.lewisu.edu/academics/nursing/index.htm",
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
    Rooms: [[""]],
});

// buildingSH49 object
let buildingSH49 = new BuildingClass();
// add object to buildings array
buildings.push(buildingSH49);

// Building Vectors
// create SH49 polygon
let SH49 = [buildingSH49.JsonCoordinatesArray];

// SH49 polygon properties and popup
polygon = L.polygon(SH49, { color: 'green', fillOpacity: .7, weight: 1, id: "polygonSH49" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingSH49.getBuildingName() + '</b><br>Building: ' + buildingSH49.BuildingLewisMapCode);
popup = L.popup();

// building variables
let SH49name = buildingSH49.getBuildingName();
let SH49code = buildingSH49.getBuildingLewisMapCode();
let SH49link = buildingSH49.getBuildingHyperlink();
let SH49desc = buildingSH49.getBuildingDescription();
let SH49city = buildingSH49.getLocationCity();
let SH49state = buildingSH49.getLocationState();
let SH49zip = buildingSH49.getLocationZip();
let SH49rooms = buildingSH49.getRooms();

// push data to campusData
campusData.push(SH49name + " " + SH49code);

// polygon click function
function onClickSH49(e) {
    if (!document.getElementById) return;
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + SH49name;
    document.getElementById("buildingName").innerHTML = "<b>" + SH49name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + SH49code;
    document.getElementById("buildingHyperlink").innerHTML = "<a href=" + SH49link + " target= '_blank'>" + SH49name + " Website</a>";
    document.getElementById("buildingDescription").innerHTML = SH49desc;
    document.getElementById("buildingCityState").innerHTML = SH49city + ", " + SH49state + "  " + SH49zip;
    document.getElementById("buildingRooms").innerHTML = SH49rooms;
    return;
}
polygon.on('click', onClickSH49);


// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "SA31",
    BuildingName: "Sancta Alberta Chapel",
    JsonCoordinatesArray: [[41.605516, -88.08014], [41.605524, -88.079824],[41.605548, -88.079824],[41.605558, -88.079577],[41.605322, -88.079564],[41.605318, -88.079615],[41.605241, -88.079617],[41.605233, -88.079676],[41.605141, -88.079674],[41.605131, -88.079982],[41.605288, -88.079993],[41.605292, -88.079972],[41.605368, -88.07998],[41.605366, -88.080135]],
    BuildingDescription: "University Ministry is located at the center of the Romeoville campus. The main entrance is across from the LRC under the red awning. Come explore and say hello!</p><p>Head up the stairs on your right to the Student Lounge. It’s a bit of a maze in this older section of the building, known as the Miguel Center, but you’ll make your way around the Victoria LaGrippe Meditation Garden (courtyard of building) to the Sancta Alberta Chapel.</p><p>The James A. LaGrippe Pastoral Center is adjacent to the Chapel and houses the D’Arcy Great Room and Lewis Family Room.",
    BuildingHyperlink: "https://www.lewisu.edu/studentservices/ministry/theplace.htm",
    LocationLatitude: 41.605516,
    LocationLongitude: -88.08014,
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
    Rooms: [["First Floor &emsp; Student Lounge &emsp; 1"],["First Floor &emsp; Study Room &emsp; 2"],["First Floor &emsp; Office of Nia White, Coordinator of Peer Ministry and Service &emsp; 3"]
    ,["First Floor &emsp; Office of Fr. Dennis Lewandowski, University Chaplain &emsp; 4"],["First Floor &emsp; Living Room &emsp; 5"],["First Floor &emsp; Office of Margaret Martinez, Director of Mission and Ministry &emsp; 6"]
    ,["First Floor &emsp; Office of Venus Wozniak, Associate Director of Mission and Ministry &emsp; 7"],["Lower Level &emsp; Multi-Faith Prayer & Meditation Room &emsp; 8"],["Lower Level &emsp; Food Pantry &emsp; 9"]
    ,["First Floor &emsp; Sancta Alberta Chapel"],["First Floor &emsp; Kitchen"],["First Floor &emsp; DArcy Great Room"],["First Floor &emsp; Lewis Family Room"],["First Floor &emsp; Mens Restroom"]
    ,["First Floor &emsp; Womens Restroom"]],
});

// buildingSH49 object
let buildingSA31 = new BuildingClass();
// add object to buildings array
buildings.push(buildingSA31);

// Building Vectors
// create SH49 polygon
let SA31 = [buildingSA31.JsonCoordinatesArray];

// SA31 polygon properties and popup
polygon = L.polygon(SA31, { color: 'green', fillOpacity: .7, weight: 1, id: "polygonSA31" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingSA31.getBuildingName() + '</b><br>Building: ' + buildingSA31.BuildingLewisMapCode);
popup = L.popup();

// building variables
let SA31name = buildingSA31.getBuildingName();
let SA31code = buildingSA31.getBuildingLewisMapCode();
let SA31link = buildingSA31.getBuildingHyperlink();
let SA31desc = buildingSA31.getBuildingDescription();
let SA31city = buildingSA31.getLocationCity();
let SA31state = buildingSA31.getLocationState();
let SA31zip = buildingSA31.getLocationZip();
let SA31rooms = buildingSA31.getRooms();

// push data to campusData
campusData.push(SA31name + " " + SA31code);

// polygon click function
function onClickSA31(e) {
    if (!document.getElementById) return;
    let fLen = SA31rooms.length;
    SA31rooms.sort();

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text += "<li>" + SA31rooms[i] + "</li>";
    }
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + SA31name;
    document.getElementById("buildingName").innerHTML = "<b>" + SA31name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + SA31code;
    document.getElementById("buildingHyperlink").innerHTML = "<a href=" + SA31link + " target= '_blank'>" + SA31name + " Website</a>";
    document.getElementById("buildingDescription").innerHTML = SA31desc;
    document.getElementById("buildingCityState").innerHTML = SA31city + ", " + SA31state + "  " + SA31zip;
    document.getElementById("buildingRooms").innerHTML = text;
    return;
}
polygon.on('click', onClickSA31);

// Areas
// new building
BuildingClass.include({
    // add properties
    BuildingLewisMapCode: "A20",
    BuildingName: "Lewis University Airport",
    JsonCoordinatesArray: [[41.605192, -88.092472],[41.605003, -88.091984],[41.605076, -88.091936],[41.605039, -88.091834],[41.604614, -88.092129],[41.604915, -88.09288],[41.605132, -88.092724],[41.605076, -88.092563]],
    BuildingDescription: "Lewis University Airport is a public use airport located 20 miles southwest of Chicago, in the village of Romeoville in Will County, Illinois, United States. The Joliet Regional Port District assumed ownership of the airport in 1989. The National Weather Service Chicago, Illinois is adjacent to the airport. Wikipedia",
    BuildingHyperlink: "http://www.flylot.com",
    LocationLatitude: 41.605516,
    LocationLongitude: -88.08014,
    LocationAddressNumber: 1,
    LocationAddress: "George J Michas Dr",
    LocationAddress2: "",
    LocationCity: "Romeoville",
    LocationState: "IL",
    LocationZip: 60466,
    LocationPhone: 0,
    LocationClosed: false,
    LocationDescription: "",
    LocationHyperlink: "",
    Rooms: [[""]],
});

// buildingA20 object
let buildingA20 = new BuildingClass();
// add object to buildings array
buildings.push(buildingA20);

// Building Vectors
// create A20 polygon
let A20 = [buildingA20.JsonCoordinatesArray];

// A20 polygon properties and popup
polygon = L.polygon(A20, { color: 'green', fillOpacity: .7, weight: 1, id: "polygonSA31" }).addTo(vectorLayer);
polygon.bindPopup('<b>' + buildingA20.getBuildingName() + '</b><br>Building: ' + buildingA20.BuildingLewisMapCode);
popup = L.popup();

// building variables
let A20name = buildingSA31.getBuildingName();
let A20code = buildingSA31.getBuildingLewisMapCode();
let A20link = buildingSA31.getBuildingHyperlink();
let A20desc = buildingSA31.getBuildingDescription();
let A20city = buildingSA31.getLocationCity();
let A20state = buildingSA31.getLocationState();
let A20zip = buildingSA31.getLocationZip();
let A20rooms = buildingSA31.getRooms();

// push data to campusData
campusData.push(A20name + " " + A20code);

// polygon click function
function onClickA20(e) {
    if (!document.getElementById) return;
    let fLen = A20rooms.length;
    A20rooms.sort();

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text += "<li>" + A20rooms[i] + "</li>";
    }
    document.getElementById("searchFeedback").innerHTML = "Search Building: " + A20name;
    document.getElementById("buildingName").innerHTML = "<b>" + A20name + "</b>";
    document.getElementById("buildingMapCode").innerHTML = "Building: " + A20code;
    document.getElementById("buildingHyperlink").innerHTML = "<a href=" + A20link + " target= '_blank'>" + A20name + " Website</a>";
    document.getElementById("buildingDescription").innerHTML = A20desc;
    document.getElementById("buildingCityState").innerHTML = A20city + ", " + A20state + "  " + A20zip;
    document.getElementById("buildingRooms").innerHTML = text;
    return;
}
polygon.on('click', onClickA20);


// Campus search on map click
function onMapClick(e) {
    if (!document.getElementById) return;
    let fLen = campusData.length;
    campusData.sort();

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text += "<li>" + campusData[i] + "</li>";
    }
    text += "</ul>"
    document.getElementById("searchFeedback").innerHTML = "Search Campus";
    document.getElementById("buildingName").innerHTML = "<b>Lewis University Campus</b>";
    document.getElementById("buildingMapCode").innerHTML = " ";
    document.getElementById("buildingHyperlink").innerHTML = "<a href=https://lewisu.edu/index.htm target= '_blank'>Lewis University Website</a>";
    document.getElementById("buildingDescription").innerHTML = "Lewis University at Oak Brook";
    document.getElementById("buildingCityState").innerHTML = text;
    document.getElementById("buildingRooms").innerHTML = "";
    return;
}
map.on('click', onMapClick);



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
// coffee click function
document
    .getElementById("searchBox")
    .addEventListener("dblclick", function() {
        document.getElementById("searchBox").innerHTML = "";
        document.getElementById("searchFeedback").innerHTML = "Result:";
        document.getElementById("buildingName").innerHTML = "<b>Courtyard Café</b>";
        document.getElementById("buildingMapCode").innerHTML = " ";
        document.getElementById("buildingHyperlink").innerHTML = "<a href='https://content-service.sodexomyway.com/media/NEWStarbucksMenu8.15.22_tcm82-155876.pdf?url=https://lewisu.sodexomyway.com/' target='_blank'>menu</a>";
        document.getElementById("buildingDescription").innerHTML = "";
        document.getElementById("buildingCityState").innerHTML = "";
        document.getElementById("buildingRooms").innerHTML = "";
        let marker;
        marker = L.marker([41.602504, -88.080721], {icon: coffeeIcon}).addTo(map);
        marker.bindPopup("<b>Courtyard Café</b><br>Bldg. DL45<br><a href='https://content-service.sodexomyway.com/media/NEWStarbucksMenu8.15.22_tcm82-155876.pdf?url=https://lewisu.sodexomyway.com/' target='_blank'>menu</a>");
        popup = L.popup();
        map.setView([41.602504, -88.080721], 17.25);
    });


// hyperlink click function
document
    .getElementById("buildingDescription")
    .addEventListener("click", function() {
        let marker;
        marker = L.marker([41.84646100975679, -87.94560320118678], {icon: coffeeIcon}).addTo(map);
        marker.bindPopup("<b>Lewis University at Oak Brook</b><br><a href='https://www.lewisu.edu/campuses/oakbrook/index.htm' target='_blank'>Lewis University at Oak Brook Website</a>");
        popup = L.popup();
        map.setView([41.84646100975679, -87.94560320118678], 17.25);
    });