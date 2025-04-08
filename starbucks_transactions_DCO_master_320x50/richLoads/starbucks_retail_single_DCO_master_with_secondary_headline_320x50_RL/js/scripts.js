
var Ad = {

  width: 320,
  height: 50,
  container: document.getElementById('container'),

  addContent: function() {
    var border = document.getElementById('border');
    var logo = document.getElementById('logo');
    var product = document.getElementById('product');
    var cta = document.getElementById('cta');
    var headline1 = document.getElementById('headline-1');
    var headline2a = document.getElementById('headline-2a');
    var headline2b = document.getElementById('headline-2b');
    var styles = document.createElement('style');
    var zoomed = document.getElementById('zoomed');
    var logoImg = document.createElement('img');
    var productImg = document.createElement('img');

    if (window.navigator.userAgent.indexOf("Windows") != -1) {
      Ad.container.classList.add('win');
      if (window.navigator.userAgent.indexOf("Firefox") != -1) {
        Ad.container.classList.add('ff');
      }
      if (window.navigator.userAgent.indexOf("Chrome") != -1) {
        Ad.container.classList.add('chrome');
      }
      if ((window.navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true )) {
        Ad.container.classList.add('ie');
      }
    }
    else {     
      Ad.container.classList.add('mac');
      if (window.navigator.userAgent.indexOf("Firefox") != -1) {
        Ad.container.classList.add('ff');
      }
      if (window.navigator.userAgent.indexOf("Chrome") != -1) {
        Ad.container.classList.add('chrome');
      }
      if (window.navigator.userAgent.indexOf("Safari") != -1) {
        Ad.container.classList.add('safari');
      }
    }

    Ad.container.style.backgroundImage = 'url(' + myFT.instantAds.background_img + ')';
    Ad.container.style.backgroundColor = myFT.instantAds.background_hex;
    Ad.container.addEventListener('click', function() {
      myFT.clickTag(1, myFT.instantAds.clickTag1_url);
    });
    Ad.container.addEventListener('mouseover', function() {
      cta.style.color = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[2];
      cta.style.backgroundColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[1];
      cta.style.borderColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[2] || "#fff";
    });
    Ad.container.addEventListener('mouseout', function() {
      cta.style.color = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[1];
      cta.style.backgroundColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[0];
      cta.style.borderColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[2] || "#c2c2c2";
    });

    headline1.innerHTML = Ad.changeSuperScript(myFT.instantAds.F1_headline_txt);
    headline1.style.fontSize = myFT.instantAds.F1_headlineTxt_size_hex_glowHex.split('|')[0] + 'px';
    headline1.style.color = myFT.instantAds.F1_headlineTxt_size_hex_glowHex.split('|')[1];
    headline1.style.textShadow = '-1px -1px 0 '+ myFT.instantAds.F1_headlineTxt_size_hex_glowHex.split('|')[2] +', 1px -1px 0 '+ myFT.instantAds.F1_headlineTxt_size_hex_glowHex.split('|')[2] +', -1px 1px 0 '+ myFT.instantAds.F1_headlineTxt_size_hex_glowHex.split('|')[2] +', 1px 1px 0 '+ myFT.instantAds.F1_headlineTxt_size_hex_glowHex.split('|')[2];

    if (myFT.instantAds.F2_headline2_txt === "") {
      //AWN-20210408: Fix for <b> + <span> overlap
      if (myFT.instantAds.F2_headline1_txt.indexOf("<b>")>-1) {
        var adjuestText = myFT.instantAds.F2_headline1_txt.replace("<b>","").replace("</b>","").split('/').join('');
        headline2a.innerHTML = '<span>' + Ad.changeSuperScript(adjuestText).split('<br>').join('</span><span>') + '</span>';
        headline2a.style.fontWeight = "700";
        headline2a.style.fontFamily = 'SoDoSans';
      } else {        
        if (myFT.instantAds.F2_headline1_txt.indexOf("<br>") !== -1) {
          headline2a.innerHTML = '<span>' + Ad.changeSuperScript(myFT.instantAds.F2_headline1_txt).split('<br>').join('</span><span>') + '</span>';
        } 
        else {
          headline2a.innerHTML = '<span>' + Ad.changeSuperScript(myFT.instantAds.F2_headline1_txt).split('<br/>').join('</span><span>') + '</span>';
        }
      }
      styles.innerHTML = "#headline-2a > span:last-child { display: inline-block; position: relative; } #headline-2a > span:last-child::after { content: '"+ Ad.changeSuperScript(myFT.instantAds.F2_subHeadline_txt) +"';color:"+ myFT.instantAds.F2_subHeadline_size_hex.split('|')[1] +";text-align: center;font-size: "+ myFT.instantAds.F2_subHeadline_size_hex.split('|')[0] +"px;display: block; letter-spacing: 0.02em; margin-top: 3px; font-family: 'SoDoSansRegular';}"
    }
    else {
      headline2a.innerHTML = Ad.changeSuperScript(myFT.instantAds.F2_headline1_txt);
    }

    headline2a.style.fontSize = myFT.instantAds.F2_headline1Txt_size_hex.split('|')[0] + 'px';
    headline2a.style.color = myFT.instantAds.F2_headline1Txt_size_hex.split('|')[1];
    headline2a.style.marginBottom = "3px";
    // headline2a.style.marginBottom = (myFT.instantAds.F2_headline2_txt=="")?"0px":"5px";


    if (myFT.instantAds.F2_headline2_txt !== "") {
      if (myFT.instantAds.F2_headline2_txt.indexOf("<br>") !== -1) {
        headline2a.innerHTML = '<span>' + Ad.changeSuperScript(myFT.instantAds.F2_headline2_txt).split('<br>').join('</span><span>') + '</span>';
      } 
      else {
        headline2a.innerHTML = '<span>' + Ad.changeSuperScript(myFT.instantAds.F2_headline2_txt).split('<br/>').join('</span><span>') + '</span>';
      }
      styles.innerHTML = "#headline-2b > span:last-child { display: inline-block; position: relative; } #headline-2b > span:last-child::after { content: '"+ Ad.changeSuperScript(myFT.instantAds.F2_subHeadline_txt) +"';color:"+ myFT.instantAds.F2_subHeadline_size_hex.split('|')[1] +";text-align: right;font-size: "+ myFT.instantAds.F2_subHeadline_size_hex.split('|')[0] +"px;display: block;margin-right: 1.14em; margin-top: -0.3em; position: absolute; right: 0; letter-spacing: 0.02em; font-family: 'SoDoSansRegular';}"
    }

    headline2b.style.fontSize = myFT.instantAds.F2_headline2Txt_size_hex.split('|')[0] + 'px';
    headline2b.style.color = myFT.instantAds.F2_headline2Txt_size_hex.split('|')[1];

    cta.innerHTML = myFT.instantAds.ctaTxt;
    cta.style.fontSize = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[0] + 'px';
    cta.style.color = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[1];
    cta.style.backgroundColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[0];
    cta.style.borderColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[2] || "#c2c2c2";

    logoImg.src = myFT.instantAds.logo_img;
    logo.appendChild(logoImg);

    productImg.src = myFT.instantAds.product1_img;
    product.appendChild(productImg);

    border.style.borderColor = myFT.instantAds.border_hex;

    //zoomed.style.transform = 'translate(' + myFT.instantAds.start_product1_offsetX_offsetY.split('|')[0] + ', ' + myFT.instantAds.start_product1_offsetX_offsetY.split('|')[1] + ') scale(2.6)';

    myFT.applyClickTag(cta, 2, myFT.instantAds.clickTag2_url);
    
    document.getElementsByTagName('body')[0].appendChild(styles);

    Ad.animate();
  },

  animate: function() {
    TweenLite.from(document.getElementById('headline-1'), 0.25, {autoAlpha: 0, y: '50px', delay: 0.5});
    TweenLite.from(document.getElementById('content'), 0.25, {autoAlpha: 0, y: '50px', ease: Power2.easeInOut, delay: 3.2});
    TweenLite.to(document.getElementById('headline-1'), 0.7, {
      autoAlpha: 0, 
      y: '64px', 
      ease: Power2.easeInOut,
      delay: 2.5
    });
  },

  changeSuperScript : function(str) {
      str = str.replace("®","<sup>®</sup>");
      str = str.replace("™","<sup style='margin-top: 0.6em;'>™</sup>");
      str = str.replace("©","<sup>©</sup>");
      return str;
  }

};

myFT.on("instantads", Ad.addContent); //initialize ad once ready