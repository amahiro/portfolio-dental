document.addEventListener('DOMContentLoaded', function(){

    //FOT-筑紫A丸ゴシック Std
    (function(d) {
        var config = {
        kitId: 'tdh7dqv',
        scriptTimeout: 3000,
        async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
    
    //fadein
    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 50){
                    $(this).addClass('scrollin');
                }
            });
        });
    });
    new Hamburger();
    new HeroSlider('.swiper-container');
});