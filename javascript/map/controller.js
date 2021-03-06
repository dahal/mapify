US.States.Controller = function(views) {
  this.views = views

  this.initialize = function() {
    var map = this.map()
    map.setOptions({styles: this.mapStyle()})
    this.pinPointZipcodes()
  }

  this.map = function() {
    return this.views.initialGoogleMap(this.mapOptions())
  };

  this.mapOptions = function(zoom, center) {
    var us = new google.maps.LatLng(40.04443758460856, -99.228515625)
    var zoom = zoom || 4
    var center = center || us

    return {
      zoom: zoom,
      center: center
    }
  };

  this.mapStyle = function() {
    return [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
    // return [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4f595d"},{"visibility":"on"}]}]
  }

  this.pinPointZipcodes = function() {
    markers = [];
    var map = this.map()
    map.setOptions({styles: this.mapStyle()});

    $.getJSON("data/states.json", function(zipcodes) {
      for (var i = 0; i < zipcodes.length; i++) {
        var zipcode = zipcodes[i]
        var latlng = new google.maps.LatLng(zipcode.lat, zipcode.long);

        var marker = new google.maps.Marker({
          map: map,
          // icon: "../../images/place.png",
          icon: "../../images/places.png",
          // icon: "../../images/pin.png",
          position: latlng,
          draggable: true,
          animation:google.maps.Animation.DROP
        });

        markers.push(marker);
      }
    });
    // markers
  }
}
