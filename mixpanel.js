// mixpanel
(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init('6ce73ee0e2d4f3ba55228a9fce25e606', {debug: true}); 

// Track home page upon visit
mixpanel.track('Home page');
console.log("Home page");

function mainLogo(){
    mixpanel.track("Home page");
    console.log("Home page");
}

// Navbar
function navbar() {
    mixpanel.track("Navbar");
    console.log("Navbar");
}

function about() {
    mixpanel.track("About");
    console.log("About");
}

function experiences() {
    mixpanel.track("Experiences");
    console.log("Experiences");
}

function portfolio() {
    mixpanel.track("Portfolio");
    console.log("Portfolio");
}

function contact() {
    mixpanel.track("Contact");
    console.log("Contact");
}

// About Me
function foodblog(){
    mixpanel.track("Instagram Food Blog");
    console.log("Instagram Food Blog");
}

// Experiences
function intersystems(){
    mixpanel.track("InterSystems");
    console.log("InterSystems");
}

function mit(){
    mixpanel.track("MIT");
    console.log("MIT");
}

function archery(){
    mixpanel.track("Archery");
    console.log("Archery");
}

// Portfolio
function emotionDetection(){
    mixpanel.track("Emotion Detection");
    console.log("Emotion Detection");
}

function instagramAutomation(){
    mixpanel.track("Instagram Automation");
    console.log("Instagram Automation");
}

function alexaRestaurant(){
    mixpanel.track("Alexa Restaurant Finder");
    console.log("Alexa Restaurant Finder");
}

function cardGame(){
    mixpanel.track("Card Game App");
    console.log("Card Game App");
}

function personalWebsite(){
    mixpanel.track("Personal Website");
    console.log("Personal Website");
}

// Contact
function github() {
    mixpanel.track("GitHub");
    console.log("GitHub");
}

function linkedin() {
    mixpanel.track("LinkedIn");
    console.log("LinkedIn");
}