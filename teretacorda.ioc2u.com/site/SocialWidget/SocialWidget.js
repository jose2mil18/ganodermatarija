// Add UI Functionality Here

var y = -51; //Starting Location - bottom
var divSocialWidget = document.getElementById("SocialWidget");
var togShowHide = document.getElementById("togShowHide");

var SocialWidget = {

    Init:function() {
        SocialWidget.Show();
    },

    Show:function() {
        y++;
        if (y < 1) {
            divSocialWidget.style.bottom = y + 'px';
            window.setTimeout('SocialWidget.Show()', 25);
        }
        else {
            togShowHide.onclick = this.Hide;
            togShowHide.innerHTML = "Hide";
        }
    },

    Hide:function() {
        y--;
        if (y > -33) {
            divSocialWidget.style.bottom = y + 'px';
            window.setTimeout('SocialWidget.Hide()', 10);
        }
        else {
            togShowHide.innerHTML = "Show";
            togShowHide.onclick = this.Show;
        }
    },

    Fav:function() {
	var ua=navigator.userAgent.toLowerCase();
        var isMac=(ua.indexOf('mac')!=-1);
        var buttonStr=isMac?'Command/Cmd':'CTRL';
        if(window.external && document.all)
	    { // (!document.createTextNode || (typeof(window.external.AddFavorite)=='unknown'))
            window.external.AddFavorite(document.location.href, document.title); // IE/Win
        } else if(ua.indexOf('konqueror')!=-1) {
            alert('Press '+buttonStr+' + B To Add This Page To Your Bookmarks/Favorites!');
        } else if ((window.opera) || (window.home || (ua.indexOf('webkit')!=-1)) || (!window.print || isMac)) {
            // Firefox, Netscape, Opera, Safari, iCab, IE5/Mac and Safari 1.0
            alert('Press '+buttonStr+' + D To Add This Page To Your Bookmarks/Favorites!');
        } else {
            alert("To Bookmark/Favorite This Site You Have To Do It Manually Through Your Browser.");
        }
    }

};

//SocialWidget.Init();
if (window.attachEvent) { window.attachEvent('onload', SocialWidget.Init); }
else if (window.addEventListener) { window.addEventListener('load', SocialWidget.Init, false); }
else { document.addEventListener('load', SocialWidget.Init, false); }