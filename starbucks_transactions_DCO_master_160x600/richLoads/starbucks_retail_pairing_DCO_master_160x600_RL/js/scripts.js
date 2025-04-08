
var Ad = {

  width: 300,
  height: 250,
  container: document.getElementById('container'),

  addContent: function() {
    var border = document.getElementById('border');
    var logo = document.getElementById('logo');
    var product1 = document.getElementById('product1');
    var product2 = document.getElementById('product2');
    var textBlockF1 = document.getElementById('textBlockF1');
    var textBlockF2 = document.getElementById('textBlockF2');
    var textBlockF1 = document.getElementById('textBlockF1a');
    var textBlockF2 = document.getElementById('textBlockF2a');
    var textBlockF1 = document.getElementById('textBlockF1b');
    var textBlockF2 = document.getElementById('textBlockF2b');
    var cta = document.getElementById('cta');
    var content = document.getElementById('content');
    var headline2a = document.getElementById('headline-2a');
    var headline2b = document.getElementById('headline-2b');
    var subheadline = document.getElementById('subheadline');
    var logoImg = document.createElement('img');
    var productImg1 = document.createElement('img');
    var productImg2 = document.createElement('img');

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

    container.style.backgroundImage = 'url(' + myFT.instantAds.background_img + ')';
    container.style.backgroundColor = myFT.instantAds.background_hex;
    container.addEventListener('click', function() {
      myFT.clickTag(1, myFT.instantAds.clickTag1_url);
    });
    container.addEventListener('mouseover', function() {
      cta.style.color = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[2];
      cta.style.backgroundColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[1];
      cta.style.borderColor = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[2];; // new
      
    });
    container.addEventListener('mouseout', function() {
      cta.style.color = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[1];
      cta.style.backgroundColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[0];
      cta.style.borderColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[2] || "#32462f";  // new
    });

    headline2a.innerHTML = myFT.instantAds.F3_headline_txt;
    try{
        headline2a.style.fontSize = myFT.instantAds.F3_headlineTxt_size_hex.split('|')[0] + 'px';
        headline2a.style.color = myFT.instantAds.F3_headlineTxt_size_hex.split('|')[1];
    } 
    catch(err) {}
    headline2a.style.marginBottom = "-0.17em";

    cta.innerHTML = myFT.instantAds.ctaTxt;
    cta.style.fontSize = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[0] + 'px';
    cta.style.color = myFT.instantAds.ctaTxt_size_hex_hexHov.split('|')[1];
    cta.style.backgroundColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[0];
    cta.style.borderColor = myFT.instantAds.ctaBtn_hex_hexHov.split('|')[2] || "#32452f"; //new

    logoImg.src = myFT.instantAds.logo_img;
    logo.appendChild(logoImg);

    productImg1.src = myFT.instantAds.product1_img;
    productImg2.src = myFT.instantAds.product2_img;
    product1.appendChild(productImg1);
    product2.appendChild(productImg2);

    border.style.borderColor = myFT.instantAds.border_hex;

    Ad.createText(textBlockF1a,myFT.instantAds.F1_headline1_txt,myFT.instantAds.F1_headline2_txt,myFT.instantAds.F1_headline1Txt_size_hex,myFT.instantAds.F1_headline2Txt_size_hex);
    Ad.createText(textBlockF2a,myFT.instantAds.F2_headline1_txt,myFT.instantAds.F2_headline2_txt,myFT.instantAds.F2_headline1Txt_size_hex,myFT.instantAds.F2_headline2Txt_size_hex);

    //Ad.createTextSub(textBlockF1b,myFT.instantAds.F1_subHeadline_txt,myFT.instantAds.F1_subHeadline_size_hex);
    //Ad.createTextSub(textBlockF2b,myFT.instantAds.F2_subHeadline_txt,myFT.instantAds.F2_subHeadline_size_hex);

    var styles = document.createElement('style');
    styles.innerHTML = "#textBlockF1a > div:last-child::after { content: '"+ Ad.changeSuperScript(myFT.instantAds.F1_subHeadline_txt) +"';color:"+ myFT.instantAds.F1_subHeadline_size_hex.split('|')[1] +";text-align: right;font-size: "+ myFT.instantAds.F1_subHeadline_size_hex.split('|')[0] +"px;display: block;margin-right: 1.24em; margin-top: -0.3em;letter-spacing: 0.02em; font-family: 'SoDoSansRegular';}"
    styles.innerHTML = "#textBlockF2a > div:last-child::after { content: '"+ Ad.changeSuperScript(myFT.instantAds.F2_subHeadline_txt) +"';color:"+ myFT.instantAds.F2_subHeadline_size_hex.split('|')[1] +";text-align: right;font-size: "+ myFT.instantAds.F2_subHeadline_size_hex.split('|')[0] +"px;display: block;margin-right: 1.24em; margin-top: -0.3em;letter-spacing: 0.02em; font-family: 'SoDoSansRegular';}"
    document.getElementsByTagName('body')[0].appendChild(styles);

    myFT.applyButton(cta,function(){
      myFT.clickTag(2, myFT.instantAds.clickTag2_url);  
    });
    Ad.animate();
  },

    animate: function() {

        TweenLite.set(document.getElementById('content'),{opacity:0});
        TweenLite.set(logo,{opacity:0});
        TweenLite.set(product1,{opacity:0,x:-120+Number(myFT.instantAds.start_product1_offsetX_offsetY.split("|")[0]),y:300+Number(myFT.instantAds.start_product1_offsetX_offsetY.split("|")[1]),width:400,height:400});
        TweenLite.set(product2,{opacity:0,x:280,y:300+Number(myFT.instantAds.start_product2_offsetX_offsetY.split("|")[1]),width:400,height:400});
        TweenLite.set(document.getElementById('textBlockF2'),{x:420});

        TweenLite.to(product1, 0.5, {opacity:1,delay: 0.5});
        TweenLite.to(product2, 0.5, {opacity:1,delay: 0.5});
        TweenLite.to(document.getElementById('container'), 0.5, {opacity:1,delay: 0.5});
        
        TweenLite.from(document.getElementById('textBlockF1'), 0.3, {opacity: 0, delay: 1.5});
        TweenLite.from(document.getElementById('textBlockF1'), 0.5, {y: +120, delay: 1.5});

        TweenLite.to(document.getElementById('textBlockF1'), 0.5, {x:-420, delay: 4});
        TweenLite.to(document.getElementById('textBlockF2'), 0.5, {x:0, delay: 4});
      
        TweenLite.to(product1,0.5, {x:-420,delay: 4});
        TweenLite.to(product2,0.5, {x:-120+Number(myFT.instantAds.start_product2_offsetX_offsetY.split("|")[0]),delay: 4});

        TweenLite.to(product1, 1, {x:-80+Number(myFT.instantAds.end_product1_offsetX_offsetY.split("|")[0]),y:90+Number(myFT.instantAds.end_product1_offsetX_offsetY.split("|")[1]),width:160,height:160,ease: Power2.easeInOut, delay:7});
        TweenLite.to(product2, 1, {x:80+Number(myFT.instantAds.end_product2_offsetX_offsetY.split("|")[0]),y:90+Number(myFT.instantAds.end_product2_offsetX_offsetY.split("|")[1]),width:160,height:160,ease: Power2.easeInOut, delay:7});
        TweenLite.to(document.getElementById('textBlockF2'), 1, {x:80+Number(myFT.instantAds.end_product2_offsetX_offsetY.split("|")[0]),y:-150+Number(myFT.instantAds.end_product2_offsetX_offsetY.split("|")[1]),scale:0.4,opacity:1,ease: Power2.easeInOut, delay:7});
        TweenLite.to(document.getElementById('textBlockF2'), 0.4, {opacity: 0, delay:7.5});

        TweenLite.to(document.getElementById('content'), 0.5, {opacity:1,ease: Power2.easeInOut, delay:8});
        TweenLite.to(logo, 0.5, {opacity:1,ease: Power2.easeInOut, delay:8});

    },

    createText : function (target,str1,str2,prop1,prop2) {
        var t = target;
        if (str1.indexOf("<b>")>-1) {
            var adjuestText = str1.replace("<b>","").replace("</b>","").split('/').join('');
            var setBold = true;
        } else {
            var adjuestText = str1.split('/').join('');
            var setBold = false;
        }
        var aArray = adjuestText.split("<br>");
        var p1 = prop1.split("|");
        for (var i=0;i<aArray.length;i++) {
            var a = document.createElement("div");
            a.setAttribute("class","headline");
            a.innerHTML = Ad.changeSuperScript(aArray[i]);
            a.style.fontSize = p1[0]+"px";
            a.style.color = Ad.checkHex(p1[1]);
            if (setBold==true) {
                a.style.fontWeight = "700";
                a.style.fontFamily = 'SoDoSans';
            }
            t.appendChild(a);
            var lastcheck = a;
        }
        if (str2 != "") {
            a.style.marginBottom = "-0.175em";
            var b = document.createElement("div");
            var p2 = prop2.split("|");
            b.setAttribute("class","headline");
            b.innerHTML = Ad.changeSuperScript(str2);
            b.style.fontSize = p2[0]+"px";
            b.style.color = Ad.checkHex(p2[1]);
            t.appendChild(b);
            lastcheck = b;
        }
        lastcheck.style.marginBottom = "-0.175em";
    },   

    createTextSub : function (target,str1,prop1) {
        var t = target;
        var a = document.createElement("div");
        var p1 = prop1.split("|");
        var lastcheck = a;
        a.setAttribute("class","subheadline");
        a.innerHTML = Ad.changeSuperScript(str1);
        a.style.fontSize = p1[0]+"px";
        a.style.color = Ad.checkHex(p1[1]);
        a.style.marginBottom = "-0.175em";
        t.appendChild(a);
    },    

    changeSuperScript : function(str) {
        str = str.replace("®","<sup>®</sup>");
        str = str.replace("™","<sup style='margin-top: 0.9em;'>™</sup>");
        str = str.replace("©","<sup>©</sup>");
        return str;
    },

    checkHex : function(n){var e=n;return"transparent"!=e?(n.indexOf("#")<0&&(e="#"+n),e):e}
};

myFT.on("instantads", Ad.addContent); //initialize ad once ready