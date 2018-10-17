const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(j => j.startLocation)

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(j => j.endLocation)

};

Traveller.prototype.getJourneysByTransport = function (transport) {
 return this.journeys.filter(j => j.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(j => j.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let distances = this.journeys.map(j => j.distance)
  return distances.reduce((total, n)=> total+n)

};

function newArrayer(){
  let uniques = []
  if (uniques.includes(transport) === false ){
    uniques.push(transport);
  }
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  let allTransports = this.journeys.map(j=>j.transport)
  let uniques =[]

  return allTransports.map(newArrayer);

};


module.exports = Traveller;
