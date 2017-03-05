'use strict';
var YTControllerList = [];
var YTController = function(YT){
	this.ID = YT.ID;
	this.CONTAINER_ID = YT.CONTAINER_ID;
	this._URL = YT._URL;
	this.AUTOPLAY = YT.AUTOPLAY;
	this.PREVIEW_DURATION = YT.PREVIEW_DURATION;
	this.MUTED = YT.MUTED;
	this.CONTROLS = YT.CONTROLS;
	this.ALLOWFULLSCREEN = YT.ALLOWFULLSCREEN;
	this.IS_MOBILE = YT.IS_MOBILE;
	this.INTRO_HIDE = YT.INTRO_HIDE;
	this.PAUSE_ON_START = YT.PAUSE_ON_START;
	this.PAUSE_ON_END = YT.PAUSE_ON_END;
	this.LOOP = YT.LOOP;
	this.ANNOTATIONS = YT.ANNOTATIONS;
	this.RELATED = YT.RELATED;
	this.START_POSITION = YT.START_POSITION;
	this.TITLE = YT.TITLE;
	this.COLOR = YT.COLOR;
	this.AUTO_UNMUTE = YT.AUTO_UNMUTE;

	this.TRACKING_METRICS_PLAYING = YT.TRACKING_METRICS_PLAYING;
	this.TRACKING_METRICS_PAUSE = YT.TRACKING_METRICS_PAUSE;
	this.TRACKING_METRICS_ENDED = YT.TRACKING_METRICS_ENDED;
	this.TRACKING_METRICS_REPLAY = YT.TRACKING_METRICS_REPLAY;
	this.TRACKING_METRICS_CLICK_FOR_SOUND = YT.TRACKING_METRICS_CLICK_FOR_SOUND;

	this.TRACKING_METRICS_VIEWED_TIMER = YT.TRACKING_METRICS_VIEWED_TIMER;
	this.TRACKING_METRICS_VIEWED_PERCENT_0 = YT.TRACKING_METRICS_VIEWED_PERCENT_0;
	this.TRACKING_METRICS_VIEWED_PERCENT_25 = YT.TRACKING_METRICS_VIEWED_PERCENT_25;
	this.TRACKING_METRICS_VIEWED_PERCENT_50 = YT.TRACKING_METRICS_VIEWED_PERCENT_50;
	this.TRACKING_METRICS_VIEWED_PERCENT_75 = YT.TRACKING_METRICS_VIEWED_PERCENT_75;
	this.TRACKING_METRICS_VIEWED_PERCENT_100 = YT.TRACKING_METRICS_VIEWED_PERCENT_100;
			
	this.TRACKING_METRICS_PREVIEWED_TIMER = YT.TRACKING_METRICS_PREVIEWED_TIMER;
	this.TRACKING_METRICS_PREVIEWED_PERCENT_0 = YT.TRACKING_METRICS_PREVIEWED_PERCENT_0;
	this.TRACKING_METRICS_PREVIEWED_PERCENT_25 = YT.TRACKING_METRICS_PREVIEWED_PERCENT_25;
	this.TRACKING_METRICS_PREVIEWED_PERCENT_50 = YT.TRACKING_METRICS_PREVIEWED_PERCENT_50;
	this.TRACKING_METRICS_PREVIEWED_PERCENT_75 = YT.TRACKING_METRICS_PREVIEWED_PERCENT_75;
	this.TRACKING_METRICS_PREVIEWED_PERCENT_100 = YT.TRACKING_METRICS_PREVIEWED_PERCENT_100;

	this.TRACKING_METRICS_CLOSE_AD = YT.TRACKING_METRICS_CLOSE_AD;

	this.EVENTS_PLAYING = YT.EVENTS_PLAYING;
	this.EVENTS_PAUSED = YT.EVENTS_PAUSED;
	this.EVENTS_ENDED = YT.EVENTS_ENDED;
	this.EVENTS_REPLAY = YT.EVENTS_REPLAY;
	this.EVENTS_PREVIEWED_0 = YT.EVENTS_PREVIEWED_0;
	this.EVENTS_PREVIEWED_25 = YT.EVENTS_PREVIEWED_25;
	this.EVENTS_PREVIEWED_50 = YT.EVENTS_PREVIEWED_50;
	this.EVENTS_PREVIEWED_75 = YT.EVENTS_PREVIEWED_75;
	this.EVENTS_PREVIEWED_100 = YT.EVENTS_PREVIEWED_100;
	this.EVENTS_VIEWED_0 = YT.EVENTS_VIEWED_0;
	this.EVENTS_VIEWED_25 = YT.EVENTS_VIEWED_25;
	this.EVENTS_VIEWED_50 = YT.EVENTS_VIEWED_50;
	this.EVENTS_VIEWED_75 = YT.EVENTS_VIEWED_75;
	this.EVENTS_VIEWED_100 = YT.EVENTS_VIEWED_100;

	this.TRACKING_METRICS_VIEWED = new _timer(this.TRACKING_METRICS_VIEWED_TIMER);
	this.TRACKING_METRICS_PREVIEWED = new _timer(this.TRACKING_METRICS_PREVIEWED_TIMER);

	this.DESTROY_ON_EXPAND = YT.DESTROY_ON_EXPAND;
	this.DESTROY_ON_COLLAPSE = YT.DESTROY_ON_COLLAPSE;
	this.PAUSE_ON_EXPAND = YT.PAUSE_ON_EXPAND;
	this.PAUSE_ON_COLLAPSE = YT.PAUSE_ON_COLLAPSE;

	this.TRACKING_METRICS = ["TRACKING_METRICS_PLAYING","TRACKING_METRICS_PAUSE","TRACKING_METRICS_ENDED","TRACKING_METRICS_REPLAY","TRACKING_METRICS_CLICK_FOR_SOUND","TRACKING_METRICS_VIEWED_TIMER","TRACKING_METRICS_VIEWED_PERCENT_0","TRACKING_METRICS_VIEWED_PERCENT_25","TRACKING_METRICS_VIEWED_PERCENT_50","TRACKING_METRICS_VIEWED_PERCENT_75","TRACKING_METRICS_VIEWED_PERCENT_100","TRACKING_METRICS_PREVIEWED_TIMER","TRACKING_METRICS_PREVIEWED_PERCENT_0","TRACKING_METRICS_PREVIEWED_PERCENT_25","TRACKING_METRICS_PREVIEWED_PERCENT_50","TRACKING_METRICS_PREVIEWED_PERCENT_75","TRACKING_METRICS_PREVIEWED_PERCENT_100"];

	this.ATTRIBUTE = ["ID","CONTAINER_ID","_URL","AUTOPLAY","PREVIEW_DURATION","MUTED","CONTROLS","ALLOWFULLSCREEN","IS_MOBILE","INTRO_HIDE","PAUSE_ON_START","PAUSE_ON_END","LOOP","ANNOTATIONS","RELATED","START_POSITION","TITLE","TRACKING_METRICS_PLAYING","TRACKING_METRICS_PAUSE","TRACKING_METRICS_ENDED","TRACKING_METRICS_REPLAY","TRACKING_METRICS_CLICK_FOR_SOUND","TRACKING_METRICS_VIEWED_TIMER","TRACKING_METRICS_VIEWED_PERCENT_0","TRACKING_METRICS_VIEWED_PERCENT_25","TRACKING_METRICS_VIEWED_PERCENT_50","TRACKING_METRICS_VIEWED_PERCENT_75","TRACKING_METRICS_VIEWED_PERCENT_100","TRACKING_METRICS_PREVIEWED_TIMER","TRACKING_METRICS_PREVIEWED_PERCENT_0","TRACKING_METRICS_PREVIEWED_PERCENT_25","TRACKING_METRICS_PREVIEWED_PERCENT_50","TRACKING_METRICS_PREVIEWED_PERCENT_75","TRACKING_METRICS_PREVIEWED_PERCENT_100","TRACKING_METRICS_CLOSE_AD","EVENTS_PLAYING","EVENTS_PAUSED","EVENTS_ENDED","EVENTS_REPLAY","EVENTS_PREVIEWED_0","EVENTS_PREVIEWED_25","EVENTS_PREVIEWED_50","EVENTS_PREVIEWED_75","EVENTS_PREVIEWED_100","EVENTS_VIEWED_0","EVENTS_VIEWED_25","EVENTS_VIEWED_50","EVENTS_VIEWED_75","EVENTS_VIEWED_100"];

	this.EVENTS = ["EVENTS_PLAYING","EVENTS_PAUSED","EVENTS_ENDED","EVENTS_REPLAY","EVENTS_PREVIEWED_0","EVENTS_PREVIEWED_25","EVENTS_PREVIEWED_50","EVENTS_PREVIEWED_75","EVENTS_PREVIEWED_100","EVENTS_VIEWED_0","EVENTS_VIEWED_25","EVENTS_VIEWED_50","EVENTS_VIEWED_75","EVENTS_VIEWED_100"];

	YTControllerList.push({ID:this.ID,CONTAINER_ID:this.CONTAINER_ID});
};
YTController.prototype.createYT = function(YT){
	this.Is = {
		playing : false,
		fplay : true,
		paused : true,
		blockPause : false,
		ended : false,
		replay : false,
		destroyed : false,
		exit_triggered : false
	};

	!!YT && this.set(YT);

	this.ytp = document.createElement('gwd-youtube');
	this.ytp.setAttribute('id', this.ID);
	this.ytp.setAttribute('video-url', this._URL);
	!!this.AUTOPLAY && function(){
		var a = (this.AUTOPLAY == "intro" && !!this.PREVIEW_DURATION) ? 'preview' : this.AUTOPLAY;
		(this.AUTOPLAY == "intro" && !!this.PREVIEW_DURATION) && function(){
			this.ytp.setAttribute('overlay-hide','true');
		}.bind(this)();
		this.ytp.setAttribute('autoplay', a);
	}.bind(this)();
	!!this.PREVIEW_DURATION && this.ytp.setAttribute('preview-duration', this.PREVIEW_DURATION);
	!!this.MUTED && this.ytp.setAttribute('muted','');
	!!this.CONTROLS && this.ytp.setAttribute('controls', this.CONTROLS);
	!!this.ALLOWFULLSCREEN && this.ytp.setAttribute('allowfullscreen','');
	!!this.PAUSE_ON_END && this.ytp.setAttribute('pause-on-end','');
	!!this.LOOP && this.ytp.setAttribute('loop','');
	!!this.ANNOTATIONS && this.ytp.setAttribute('annotations','');
	!!this.START_POSITION && this.ytp.setAttribute('start-position',this.START_POSITION);
	!!this.TITLE && this.ytp.setAttribute('title','');
	!!this.COLOR && this.ytp.setAttribute('color',this.COLOR);
	this.ytp.setAttribute('style',
		'display:block;' +
		'width:' + document.getElementById(this.CONTAINER_ID).offsetWidth+'px;' +
		'height:' + document.getElementById(this.CONTAINER_ID).offsetHeight+'px;' +
		'background-color:rgb(0,0,0);'
	);
	(this.AUTOPLAY == 'preview') && this.ytp.setAttribute('thumbnailClick',this.ID);
	document.getElementById(this.CONTAINER_ID).appendChild(this.ytp);

	this.ytp.addEventListener('playing', this.playingHandler.bind(this), false);
	this.ytp.addEventListener('paused', this.pausedHandler.bind(this), false);
	this.ytp.addEventListener('ended', this.endedHandler.bind(this), false);
	this.ytp.addEventListener('previewed0percent', this.previewed0percentHandler.bind(this), false);
	this.ytp.addEventListener('previewed25percent', this.previewed25percentHandler.bind(this), false);
	this.ytp.addEventListener('previewed50percent', this.previewed50percentHandler.bind(this), false);
	this.ytp.addEventListener('previewed75percent', this.previewed75percentHandler.bind(this), false);
	this.ytp.addEventListener('previewed100percent', this.previewed100percentHandler.bind(this), false);
	this.ytp.addEventListener('viewed0percent', this.viewed0percentHandler.bind(this), false);
	this.ytp.addEventListener('viewed25percent', this.viewed25percentHandler.bind(this), false);
	this.ytp.addEventListener('viewed50percent', this.viewed50percentHandler.bind(this), false);
	this.ytp.addEventListener('viewed75percent', this.viewed75percentHandler.bind(this), false);
	this.ytp.addEventListener('viewed100percent', this.viewed100percentHandler.bind(this), false);
    this.addStudioEvents.bind(this)();
};
YTController.prototype.addEventListener = function(event,func){
   	typeof func == 'function' && function(){
   		switch(event) {
	    case 'playing':
   			this.EVENTS_PLAYING = func;
	        break;
       	case 'paused':
   			this.EVENTS_PAUSED = func;
	        break;
        case 'ended':
   			this.EVENTS_ENDED = func;

	        break;
        case 'replay':
   			this.EVENTS_REPLAY = func;
	        break;
        case 'previewed0percent':
   			this.EVENTS_PREVIEWED_0 = func;
	        break;
        case 'previewed25percent':
   			this.EVENTS_PREVIEWED_25 = func;
	        break;
        case 'previewed50percent':
   			this.EVENTS_PREVIEWED_50 = func;
	        break;
        case 'previewed75percent':
   			this.EVENTS_PREVIEWED_75 = func;
	        break;
        case 'previewed100percent':
   			this.EVENTS_PREVIEWED_100 = func;
	        break;
        case 'viewed0percent':
   			this.EVENTS_VIEWED_0 = func;
	        break;
        case 'viewed25percent':
   			this.EVENTS_VIEWED_25 = func;
	        break;
        case 'viewed50percent':
   			this.EVENTS_VIEWED_50 = func;
	        break;
        case 'viewed75percent':
   			this.EVENTS_VIEWED_75 = func;
	        break;
        case 'viewed100percent':
   			this.EVENTS_PREVIEWED_100 = func;
	        break;
	    default:
	        // default code block
		}
   	}.bind(this)();
};
YTController.prototype.playingHandler = function(){
	var a = document.getElementById(this.ID).getAttribute('autoplay'),
		b = this.ytp.getAttribute('thumbnailClick'),
		c = this.TRACKING_METRICS_CLICK_FOR_SOUND || null,
		d = this.TRACKING_METRICS_PLAYING || null,
		e = this.TRACKING_METRICS_REPLAY || null,
		f = this.AUTO_UNMUTE || false;
	this.Is.playing = true;
	a == 'preview' && function(){
		!!this.PAUSE_ON_START&&this.pauseVideo(false);
		this.Is.exit_triggered && function(){
			this.Is.exit_triggered = false;
			this.pauseVideo();
		}.bind(this)();
	}.bind(this)();

	(a == 'standard' || a == 'none' || a == 'intro') && function(){
		if(this.Is.fplay){
			this.Is.fplay = false;
			this.TRACKING_METRICS_PREVIEWED.stop();
			this.TRACKING_METRICS_VIEWED.start();
			(!!b && !!c) && Enabler.counter(c);
			!!d && Enabler.counter(d);
			!!this.EVENTS_PLAYING && this.EVENTS_PLAYING();
		} else {
			this.TRACKING_METRICS_VIEWED.start();
			if(!this.Is.ended){
				(this.Is.paused && !!d) && Enabler.counter(d);
			} else {
				this.Is.ended = false;
				!!e && Enabler.counter(e);
				!!this.EVENTS_REPLAY && this.EVENTS_REPLAY();
			}
			(!!this.EVENTS_PLAYING && this.Is.paused) && this.EVENTS_PLAYING();
		}
		setTimeout(function(){
			(a !== 'intro' && !this.MUTED && f) && this.ytp.a.unMute();
		}.bind(this),1000);
		this.Is.paused = false;
		this.Is.blockPause = false;
	}.bind(this)();
};
YTController.prototype.pausedHandler = function(){
	var a = this.TRACKING_METRICS_PAUSE || null,
		b = document.getElementById(this.ID).getAttribute('autoplay'),
		c = (b == 'standard' || b == 'none');
	this.Is.paused = true;
	this.Is.playing = false;
	this.TRACKING_METRICS_PREVIEWED.stop();
	this.TRACKING_METRICS_VIEWED.stop();
	(!this.Is.blockPause && !!a) && Enabler.counter(a);
	(!!this.EVENTS_PAUSED && c) && this.EVENTS_PAUSED();
};
YTController.prototype.endedHandler = function(){
	this.Is.ended = true;
	this.Is.playing = false;
	(!!this.IS_MOBILE && this.AUTOPLAY == 'none') && function(){
		this.AUTOPLAY = 'none';
		//this.destroyYT();
		//this.createYT();
		this.Is.replay = true;
		this.Is.ended = true;
		this.Is.fplay = false;
	}.bind(this)();
	this.TRACKING_METRICS_PREVIEWED.stop();
	this.TRACKING_METRICS_VIEWED.stop();
	(!!this.INTRO_HIDE && this.AUTOPLAY=='intro') && function(){
		this.ytp.style.display='none';
	}.bind(this)();

	!!this.TRACKING_METRICS_ENDED && Enabler.counter(this.TRACKING_METRICS_ENDED);
	!!this.EVENTS_ENDED && this.EVENTS_ENDED();
};
YTController.prototype.previewed0percentHandler = function(){
	this.Is.playing = true;
	var a = this.TRACKING_METRICS_PREVIEWED_PERCENT_0 || null;
	this.TRACKING_METRICS_PREVIEWED.start();
	!!a && Enabler.counter(a);
	!!this.EVENTS_PREVIEWED_0 && this.EVENTS_PREVIEWED_0();
};
YTController.prototype.previewed25percentHandler = function(){
	var a = this.TRACKING_METRICS_PREVIEWED_PERCENT_25 || null;
	!!a && Enabler.counter(a);
	!!this.EVENTS_PREVIEWED_25 && this.EVENTS_PREVIEWED_25();
};
YTController.prototype.previewed50percentHandler = function(){
	var a = this.TRACKING_METRICS_PREVIEWED_PERCENT_50 || null;
	!!a && Enabler.counter(a);
	!!this.EVENTS_PREVIEWED_50 && this.EVENTS_PREVIEWED_50();
};
YTController.prototype.previewed75percentHandler = function(){
	var a = this.TRACKING_METRICS_PREVIEWED_PERCENT_75 || null;
	!!a && Enabler.counter(a);
	!!this.EVENTS_PREVIEWED_75 && this.EVENTS_PREVIEWED_75();
};
YTController.prototype.previewed100percentHandler = function(){
	var a = this.TRACKING_METRICS_PREVIEWED_PERCENT_100 || null;
	this.TRACKING_METRICS_PREVIEWED.stop();
	this.Is.blockPause = true;
	!!a && Enabler.counter(a);
	(!!this.INTRO_HIDE && !!this.PREVIEW_DURATION && this.AUTOPLAY=='intro') && function(){
		this.ytp.style.display='none';
	}.bind(this)();
	!!this.EVENTS_PREVIEWED_100 && this.EVENTS_PREVIEWED_100();
};
YTController.prototype.viewed0percentHandler = function(){
	this.Is.playing = true;
	var a = this.TRACKING_METRICS_VIEWED_PERCENT_0 || null;
	(!!a && !this.Is.replay) && Enabler.counter(a);
	!!this.EVENTS_VIEWED_0 && this.EVENTS_VIEWED_0();
	try{this.ytp.a.unMute();}catch(e){}
};
YTController.prototype.viewed25percentHandler = function(){
	var a = this.TRACKING_METRICS_VIEWED_PERCENT_25 || null;
	(!!a && !this.Is.replay) && Enabler.counter(a);
	!!this.EVENTS_VIEWED_25 && this.EVENTS_VIEWED_25();
};
YTController.prototype.viewed50percentHandler = function(){
	var a = this.TRACKING_METRICS_VIEWED_PERCENT_50 || null;
	(!!a && !this.Is.replay) && Enabler.counter(a);
	!!this.EVENTS_VIEWED_50 && this.EVENTS_VIEWED_50();
};
YTController.prototype.viewed75percentHandler = function(){
	var a = this.TRACKING_METRICS_VIEWED_PERCENT_75 || null;
	(!!a && !this.Is.replay) && Enabler.counter(a);
	!!this.EVENTS_VIEWED_75 && this.EVENTS_VIEWED_75();
};
YTController.prototype.viewed100percentHandler = function(){
	var a = this.TRACKING_METRICS_VIEWED_PERCENT_100 || null;
	this.Is.blockPause = true;
	(!!a && !this.Is.replay) && Enabler.counter(a);
	!!this.EVENTS_VIEWED_100 && this.EVENTS_VIEWED_100();
};
YTController.prototype.destroyYT = function(clear){
	this.Is.destroyed = true;
	document.getElementById(this.CONTAINER_ID).innerHTML = '';
	this.TRACKING_METRICS_PREVIEWED.stop();
	this.TRACKING_METRICS_VIEWED.stop();
	(!!clear && typeof clear == 'boolean') && function(){
		this.clear("all");
	}.bind(this)();

	(!!clear && typeof clear == 'object') && function(){
		for (var key in clear) {
			this.clear(clear[key]);
		}
	}.bind(this)();
};
YTController.prototype.playVideo = function(){
	try{this.ytp.a.playVideo();}catch(e){}
};
YTController.prototype.pauseVideo = function(trackPause){
	var a = this.ytp.getAttribute('autoplay') == 'preview';
	this.Is.blockPause = !!trackPause ? false : true;
	this.TRACKING_METRICS_PREVIEWED.stop();
	this.TRACKING_METRICS_VIEWED.stop();
	try{(!this.Is.fplay || a) && this.ytp.a.pauseVideo();}catch(e){}
};
YTController.prototype.muteVideo = function(){
	try{this.ytp.a.mute();}catch(e){}
};
YTController.prototype.unMuteVideo = function(){
	try{this.ytp.a.unMute();}catch(e){}
};
YTController.prototype.set = function(attr){
	for (var key in attr) {
		Object.prototype.hasOwnProperty.call(attr, key) && function(){
			this[key] = attr[key];
		}.bind(this)();
	}
};
YTController.prototype.clear = function(attr){
	(typeof attr == 'string') && function(){
		switch(attr){
			case 'all':
				this.TRACKING_METRICS_VIEWED.TIMER = null;
				this.TRACKING_METRICS_PREVIEWED.TIMER = null;
				for (var x in this.ATTRIBUTE) {
					this[this.ATTRIBUTE[x]] = null;
				}
			break;
			case 'metrics':
				for (var x in this.TRACKING_METRICS) {
					this[this.TRACKING_METRICS[x]] = null;
				}
			break;
			case 'events':
				for (var x in this.EVENTS) {
					this[this.EVENTS[x]] = null;
				}
			break;
			default:
				for (var y in this.ATTRIBUTE){
					if(attr == this.ATTRIBUTE[y]){
						this[attr] = null;
					}
				}
			break;
		}
	}.bind(this)();
	(typeof attr == 'object') && function(){
		for (var x in attr) {
			for (var y in this.ATTRIBUTE){
				if(attr[x] == this.ATTRIBUTE[y]){
					this[attr[x]] = null;
					attr[x].indexOf('TIMER') >= 0 && function(){
						if(attr[x].indexOf('PREVIEWED')){
							this.TRACKING_METRICS_PREVIEWED.TIMER = null;
						}else{
							this.TRACKING_METRICS_VIEWED.TIMER = null;
						}
					}.bind(this)();
				}
			}
		}
	}.bind(this)();
};
YTController.prototype.addStudioEvents = function(){
	Enabler.addEventListener(studio.events.StudioEvent.EXIT, this.exitHandler.bind(this));
	Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, this.collapseHandler.bind(this));
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START, this.collapseHandler.bind(this));
	Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, this.expandHandler.bind(this));
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START, this.expandHandler.bind(this));
	Enabler.constructor.prototype.close = function(_super) {
		var a = this.ID;
		return function(){
			window[a]['closeAd']();
			_super.apply(this);
		};
	}.bind(this)(Enabler.constructor.prototype.close);
};
YTController.prototype.closeAd = function(){
	this.TRACKING_METRICS_PREVIEWED.stop();
	this.TRACKING_METRICS_VIEWED.stop();
	!!this.TRACKING_METRICS_CLOSE_AD && Enabler.counter(this.TRACKING_METRICS_CLOSE_AD);
};
YTController.prototype.exitHandler = function(){
	this.Is.exit_triggered = true;
	this.Is.blockPause = true;
	this.TRACKING_METRICS_PREVIEWED.stop();
	this.TRACKING_METRICS_VIEWED.stop();
	try{this.Is.playing&&this.ytp.a.pauseVideo();}catch(e){}
};
YTController.prototype.collapseHandler = function(){
	!!this.DESTROY_ON_COLLAPSE && this.destroyYT();
	!!this.PAUSE_ON_COLLAPSE && this.pauseVideo();
};

YTController.prototype.expandHandler = function(){
	!!this.DESTROY_ON_EXPAND && this.destroyYT();
	!!this.PAUSE_ON_EXPAND && this.pauseVideo();
};

YTController.prototype.destroyAll = function(){
	for(var key in YTControllerList){
		document.getElementById(YTControllerList[key]['CONTAINER_ID']).innerHTML = '';
		window[YTControllerList[key]['ID']].TRACKING_METRICS_PREVIEWED.stop();
		window[YTControllerList[key]['ID']].TRACKING_METRICS_VIEWED.stop();
	}
};

var _timer = function(data){
	this.TIMER = data || null;
	this.started = false;
	this.stopped = true;
};
_timer.prototype.start = function(){
	(this.stopped && !!this.TIMER) && function(){
		this.stopped = false;
		this.started = true;
		Enabler.startTimer(this.TIMER);
	}.bind(this)();
};
_timer.prototype.stop = function(){
	(this.started && !!this.TIMER) && function(){
		this.stopped = true;
		this.started = false;
		Enabler.stopTimer(this.TIMER);
	}.bind(this)();
};






