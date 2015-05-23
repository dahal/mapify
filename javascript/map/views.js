US.States.Views = function() {
  this.initialGoogleMap = function(mapOptions) {
    return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }
}
