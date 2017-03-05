function windowLoaded() {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }

    function enablerInitHandler() {
        if (Enabler.isPageLoaded()) {
            pageLoadedHandler();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
        }
    }
    console.log('window loading...');
    window.removeEventListener('load',windowLoaded);
}

function pageLoadedHandler() {
    console.log('page loaded');
    var vidInpageList = [],
        containerInpageList = [],
        playStateInpageList = [];
    var vidExpandList = ['fWZonesZlfU', 'izMzs_O15Ro', 'H9X39SdBW98'],
        containerExpandList = ['ytHolder1', 'ytHolder2', 'ytHolder3'],
        playStateExpandList = ['standard'];
        
        //Expand YT video1
    var playerExp1 = {
        ID : 'ytpExp1',
        CONTAINER_ID : containerExpandList[0],
        _URL : vidExpandList[0],
        AUTOPLAY : playStateExpandList[0],
        PAUSE_ON_START : false,
        MUTED : false,
        CONTROLS : 'autohide',
        ALLOWFULLSCREEN : false,
        IS_MOBILE : 'false',
        TRACKING_METRICS_PLAYING : '',
        TRACKING_METRICS_PAUSE : '',
        TRACKING_METRICS_ENDED : '',
        TRACKING_METRICS_REPLAY : '',
        TRACKING_METRICS_VIEWED_PERCENT_0 : 'CTR_Mega_Video0%',
        TRACKING_METRICS_VIEWED_PERCENT_25 : 'CTR_Mega_Video25%',
        TRACKING_METRICS_VIEWED_PERCENT_50 : 'CTR_Mega_Video50%',
        TRACKING_METRICS_VIEWED_PERCENT_75 : 'CTR_Mega_Video75%',
        TRACKING_METRICS_VIEWED_PERCENT_100 : '',
        TRACKING_METRICS_VIEWED_TIMER : 'Timer_ExpandedVideo',
        PAUSE_ON_EXPAND : false,
        DESTROY_ON_COLLAPSE : false,

        EVENTS_ENDED : function(){
            if(!isYTVideo1Ended){
                Enabler.counter('CTR_Mega_Video100%');
                isYTVideo1Ended = true;
            }
        }
    };

    ytpExp1 = new YTController(playerExp1);

    var playerExp2 = {
        ID : 'ytpExp2',
        CONTAINER_ID : containerExpandList[1],
        _URL : vidExpandList[1],
        AUTOPLAY : playStateExpandList[0],
        PAUSE_ON_START : false,
        MUTED : false,
        CONTROLS : 'autohide',
        ALLOWFULLSCREEN : false,
        IS_MOBILE : 'false',
        TRACKING_METRICS_PLAYING : '',
        TRACKING_METRICS_PAUSE : '',
        TRACKING_METRICS_ENDED : '',
        TRACKING_METRICS_REPLAY : '',
        TRACKING_METRICS_VIEWED_PERCENT_0 : 'CTR_Modulus_Video0%',
        TRACKING_METRICS_VIEWED_PERCENT_25 : 'CTR_Modulus_Video25%',
        TRACKING_METRICS_VIEWED_PERCENT_50 : 'CTR_Modulus_Video50%',
        TRACKING_METRICS_VIEWED_PERCENT_75 : 'CTR_Modulus_Video75%',
        TRACKING_METRICS_VIEWED_PERCENT_100 : '',
        TRACKING_METRICS_VIEWED_TIMER : 'Timer_ExpandedVideo',
        PAUSE_ON_EXPAND : false,
        DESTROY_ON_COLLAPSE : false,

        EVENTS_ENDED : function(){
            if(!isYTVideo2Ended){
                Enabler.counter('CTR_Modulus_Video100%');
                isYTVideo2Ended = true;
            }
        }
    };

    ytpExp2 = new YTController(playerExp2);
    
    var playerExp3 = {
        ID : 'ytpExp3',
        CONTAINER_ID : containerExpandList[2],
        _URL : vidExpandList[2],
        AUTOPLAY : playStateExpandList[0],
        PAUSE_ON_START : false,
        MUTED : false,
        CONTROLS : 'autohide',
        ALLOWFULLSCREEN : false,
        IS_MOBILE : 'false',
        TRACKING_METRICS_PLAYING : '',
        TRACKING_METRICS_PAUSE : '',
        TRACKING_METRICS_ENDED : '',
        TRACKING_METRICS_REPLAY : '',
        TRACKING_METRICS_VIEWED_PERCENT_0 : 'CTR_Doomsland_Video0%',
        TRACKING_METRICS_VIEWED_PERCENT_25 : 'CTR_Doomsland_Video25%',
        TRACKING_METRICS_VIEWED_PERCENT_50 : 'CTR_Doomsland_Video50%',
        TRACKING_METRICS_VIEWED_PERCENT_75 : 'CTR_Doomsland_Video75%',
        TRACKING_METRICS_VIEWED_PERCENT_100 : '',
        TRACKING_METRICS_VIEWED_TIMER : 'Timer_ExpandedVideo',
        PAUSE_ON_EXPAND : false,
        DESTROY_ON_COLLAPSE : false,

        EVENTS_ENDED : function(){
            if(!isYTVideo3Ended){
                Enabler.counter('CTR_Doomsland_Video100%');
                isYTVideo3Ended = true;
            }
        }
    };

  ytpExp3 = new YTController(playerExp3);

}


var ytpExp1, ytpExp2, ytpExp3;


function registerTrackings(){
    return;

    Enabler.counter('CTR_Mega_Video0%');
    Enabler.counter('CTR_Mega_Video25%');
    Enabler.counter('CTR_Mega_Video50%');
    Enabler.counter('CTR_Mega_Video75%');
    Enabler.counter('CTR_Mega_Video100%');

    Enabler.counter('CTR_Modulus_Video0%');
    Enabler.counter('CTR_Modulus_Video25%');
    Enabler.counter('CTR_Modulus_Video50%');
    Enabler.counter('CTR_Modulus_Video75%');
    Enabler.counter('CTR_Modulus_Video100%');

    Enabler.counter('CTR_Doomsland_Video0%');
    Enabler.counter('CTR_Doomsland_Video25%');
    Enabler.counter('CTR_Doomsland_Video50%');
    Enabler.counter('CTR_Doomsland_Video75%');
    Enabler.counter('CTR_Doomsland_Video100%');

    Enabler.startTimer('Timer_ExpandedVideo');
}

function destroyAllYTPlayer(){
    try{ytpExp1.destroyYT()}catch(e){};
    try{ytpExp2.destroyYT()}catch(e){};
    try{ytpExp3.destroyYT()}catch(e){};
    setTimeout(function(){
	    try{ytpExp1.destroyYT()}catch(e){};
	    try{ytpExp2.destroyYT()}catch(e){};
	    try{ytpExp3.destroyYT()}catch(e){};
	},500);
}

