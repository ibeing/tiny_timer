$(document).ready(function () {
        var HOURS = $('#remHours');         // cache the DOM
        var MINS  = $('#remMins');
        var SECS  = $('#remSecs');

        var hoursRemaining = HOURS.text();
        var minsRemaining  = MINS.text();
        var secsRemaining  = SECS.text();

        window.setInterval(function(){

            if ( hoursRemaining == 0 && minsRemaining == 0 && secsRemaining == 1 ) {
                $('#timeCounter').text('its expired');
            }

            if ( secsRemaining == 1 ) {
                if ( minsRemaining == 0 ) {
                    HOURS.text( hoursRemaining -= 1 );
                }
                if ( minsRemaining == 0 && hoursRemaining >= 0 ) {
                    minsRemaining = 59;
                    MINS.text( minsRemaining  );
                } else {
                    MINS.text( minsRemaining -= 1 );
                }
                if (minsRemaining == 0 && hoursRemaining == 0) {
                    $('#timeCounter').text('its expired');
                }
                secsRemaining = 60;
            }

            // if ( secsRemaining == 1 ) secsRemaining = 60;

            SECS.text( secsRemaining -=  1 );

        }, 1000);
});
