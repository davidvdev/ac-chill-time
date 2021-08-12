import React from 'react'

const Music = (props) => {

    const loaded = () => {
        const hourlyMusic = () => {
            if(props.game === "Animal Crossing"){
                switch(props.currentTime[0]){
                    // music source: https://downloads.khinsider.com/game-soundtracks/album/animal-crossing-full-gamerip
                    case 0: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/ylidljqw/57%2012AM.mp3` //12AM
                    case 1: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/okeaglbw/58%201AM.mp3` //1AM
                    case 2: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/cjenocyk/59%202AM.mp3` //2AM
                    case 3: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/fuufxfdm/60%203AM.mp3` //3AM
                    case 4: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/fgzmwhir/61%204AM.mp3` //4AM
                    case 5: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/covridlr/62%205AM.mp3` //5AM
                    case 6: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/lnudvooq/63%206AM.mp3` //6AM
                    case 7: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/epeiucnl/64%207AM.mp3` //7AM
                    case 8: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/oycoafpr/65%208AM.mp3` //8AM
                    case 9: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/nnzvlwzu/66%209AM.mp3` //9AM
                    case 10: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/wdkwshgl/67%2010AM.mp3` //10AM
                    case 11: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/dxfktyaa/68%2011AM.mp3` //11AM
                    case 12: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/erkgvhgi/69%2012PM.mp3` //12PM
                    case 13: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/vkdqutcz/70%201PM.mp3` //1PM
                    case 14: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/rhxneszf/71%202PM.mp3` //2PM
                    case 15: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/lvamjoma/72%203PM.mp3` //3PM
                    case 16: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/svaplsve/73%204PM.mp3` //4PM
                    case 17: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/ganqlufi/74%205PM.mp3` //5PM
                    case 18: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/jlpodkzo/75%206PM.mp3` //6PM
                    case 19: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/azzmbawn/76%207PM.mp3` //7PM
                    case 20: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/xszkmlbp/77%208PM.mp3` //8PM
                    case 21: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/xjzxouqy/78%209PM.mp3` //9PM
                    case 22: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/zhcddudp/79%2010PM.mp3` //10PM
                    case 23: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/nxlyyemi/80%2011PM.mp3` //11PM
                    default: loading();
                }
            } else if (props.game === "Animal Crossing: City Folk"){
                switch(props.currentTime[0]){
                    // music source: https://downloads.khinsider.com/game-soundtracks/album/animal-crossing-city-folk
                    case 0: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/iltnmbyv/037%20-%20Midnight%20%28Normal%29.mp3` //12AM
                    case 1: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/zmalsiuc/038%20-%201%20AM%20%28Normal%29.mp3` //1AM
                    case 2: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/olysteky/039%20-%202%20AM%20%28Normal%29.mp3` //2AM
                    case 3: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/ddhsxylt/040%20-%203%20AM%20%28Normal%29.mp3` //3AM
                    case 4: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/qgosknln/041%20-%204%20AM%20%28Normal%29.mp3` //4AM
                    case 5: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/texkaefq/042%20-%205%20AM%20%28Normal%29.mp3` //5AM
                    case 6: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/bxnbqfyo/043%20-%206%20AM%20%28Normal%29.mp3` //6AM
                    case 7: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/tzmhhdtu/044%20-%207%20AM%20%28Normal%29.mp3` //7AM
                    case 8: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/ppzcruui/045%20-%208%20AM%20%28Normal%29.mp3` //8AM
                    case 9: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/dhwypklh/046%20-%209%20AM%20%28Normal%29.mp3` //9AM
                    case 10: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/zppxjhgn/047%20-%2010%20AM%20%28Normal%29.mp3` //10AM
                    case 11: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/ussgroxm/048%20-%2011%20AM%20%28Normal%29.mp3` //11AM
                    case 12: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/wlmzngbw/049%20-%20Noon%20%28Normal%29.mp3` //12PM
                    case 13: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/efrhshyp/050%20-%201%20PM%20%28Normal%29.mp3` //1PM
                    case 14: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/wbuuuuio/051%20-%202%20PM%20%28Normal%29.mp3` //2PM
                    case 15: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/evrtmapf/052%20-%203%20PM%20%28Normal%29.mp3` //3PM
                    case 16: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/rzufgljc/053%20-%204%20PM%20%28Normal%29.mp3` //4PM
                    case 17: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/zekfumwx/054%20-%205%20PM%20%28Normal%29.mp3` //5PM
                    case 18: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/qakjyxhc/055%20-%206%20PM%20%28Normal%29.mp3` //6PM
                    case 19: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/hdltggph/056%20-%207%20PM%20%28Normal%29.mp3` //7PM
                    case 20: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/ndowgvwy/057%20-%208%20PM%20%28Normal%29.mp3` //8PM
                    case 21: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/ziqqxgur/058%20-%209%20PM%20%28Normal%29.mp3` //9PM
                    case 22: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/tzvvclnx/059%20-%2010%20PM%20%28Normal%29.mp3` //10PM
                    case 23: return `https://vgmsite.com/soundtracks/animal-crossing-city-folk/kzuwvafs/060%20-%2011%20PM%20%28Normal%29.mp3` //11PM
                    default: loading();
                }
            } else if (props.game === "Animal Crossing: Wild World"){
                switch(props.currentTime[0]){
                    // music source: https://downloads.khinsider.com/game-soundtracks/album/animal-crossing-wild-world
                    case 0: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/icvhlvhc/57%2012%20AM%20%28AC_WW%29.mp3` //12AM
                    case 1: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/dwogzuaz/58%201%20AM%20%28AC_WW%29.mp3` //1AM
                    case 2: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/tutibirn/59%202%20AM%20%28AC_WW%29.mp3` //2AM
                    case 3: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/femiemfb/60%203%20AM%20%28AC_WW%29.mp3` //3AM
                    case 4: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/femiemfb/60%203%20AM%20%28AC_WW%29.mp3` //4AM
                    case 5: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/gvyrwniv/62%205%20AM%20%28AC_WW%29.mp3` //5AM
                    case 6: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/cnwnmvft/39%206%20AM%20%28AC_WW%29.mp3` //6AM
                    case 7: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/xqxtybnu/40%207%20AM%20%28AC_WW%29.mp3` //7AM
                    case 8: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/wrfvurqv/41%208%20AM%20%28AC_WW%29.mp3` //8AM
                    case 9: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/vwyfpidw/42%209%20AM%20%28AC_WW%29.mp3` //9AM
                    case 10: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/zaqbkzlz/43%2010%20AM%20%28AC_WW%29.mp3` //10AM
                    case 11: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/vrsffldt/44%2011%20AM%20%28AC_WW%29.mp3` //11AM
                    case 12: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/xvkcuvfp/45%2012%20PM%20%28AC_WW%29.mp3` //12PM
                    case 13: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/lpijtvnd/46%201%20PM%20%28AC_WW%29.mp3` //1PM
                    case 14: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/hdcsmzds/47%202%20PM%20%28AC_WW%29.mp3` //2PM
                    case 15: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/sqmmyppj/48%203%20PM%20%28AC_WW%29.mp3` //3PM
                    case 16: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/pxfeevgj/49%204%20PM%20%28AC_WW%29.mp3` //4PM
                    case 17: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/kwpgodjc/50%205%20PM%20%28AC_WW%29.mp3` //5PM
                    case 18: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/hxlnjvbs/51%206%20PM%20%28AC_WW%29.mp3` //6PM
                    case 19: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/nqowhgsl/52%207%20PM%20%28AC_WW%29.mp3` //7PM
                    case 20: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/blnsgoiz/53%208%20PM%20%28AC_WW%29.mp3` //8PM
                    case 21: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/mwtzeslb/54%209%20PM%20%28AC_WW%29.mp3` //9PM
                    case 22: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/geilbreh/55%2010%20PM%20%28AC_WW%29.mp3` //10PM
                    case 23: return `https://vgmsite.com/soundtracks/animal-crossing-wild-world/hjhjroty/56%2011%20PM%20%28AC_WW%29.mp3` //11PM
                    default: loading();
                } 
            } else if(props.game === "Animal Crossing: New Leaf"){
                switch(props.currentTime[0]){
                    // music source: https://downloads.khinsider.com/game-soundtracks/album/animal-crossing-new-leaf
                    case 0: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/uyqvugkn/025%20-%2012%20AM.mp3` //12AM
                    case 1: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/ujpqtvjj/014%20-%201%20AM.mp3` //1AM
                    case 2: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/bodwfmov/015%20-%202%20AM.mp3` //2AM
                    case 3: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/ifhsuiye/016%20-%203%20AM.mp3` //3AM
                    case 4: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/gaeadhvg/017%20-%204%20AM.mp3` //4AM
                    case 5: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/ywcrkrem/018%20-%205%20AM.mp3` //5AM
                    case 6: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/guvxctps/019%20-%206%20AM.mp3` //6AM
                    case 7: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/ghdyirhm/020%20-%207%20AM.mp3` //7AM
                    case 8: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/ybrtsmtk/021%20-%208%20AM.mp3` //8AM
                    case 9: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/aoklipau/022%20-%209%20AM.mp3` //9AM
                    case 10: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/fdntcvmp/023%20-%2010%20AM.mp3` //10AM
                    case 11: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/gvsfhaca/024%20-%2011%20AM.mp3` //11AM
                    case 12: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/tsnpplqq/037%20-%2012%20PM.mp3` //12PM
                    case 13: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/hahklzaw/026%20-%201%20PM.mp3` //1PM
                    case 14: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/thxmmnzg/027%20-%202%20PM.mp3` //2PM
                    case 15: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/rhncogve/028%20-%203%20PM.mp3` //3PM
                    case 16: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/wjjvsmgz/029%20-%204%20PM.mp3` //4PM
                    case 17: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/peiynvby/030%20-%205%20PM.mp3` //5PM
                    case 18: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/ezjttgui/031%20-%206%20PM.mp3` //6PM
                    case 19: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/fpurfvsa/032%20-%207%20PM.mp3` //7PM
                    case 20: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/uqfclymh/033%20-%208%20PM.mp3` //8PM
                    case 21: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/akvznnms/034%20-%209%20PM.mp3` //9PM
                    case 22: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/gzbbacwk/035%20-%2010%20PM.mp3` //10PM
                    case 23: return `https://vgmsite.com/soundtracks/animal-crossing-new-leaf/laxmbhjh/036%20-%2011%20PM.mp3` //11PM
                    default: loading();
                } 
            } else if(props.game === "Animal Crossing: New Horizon"){
                switch(props.currentTime[0]){
                    // music source: https://downloads.khinsider.com/game-soundtracks/album/animal-crossing-new-horizons-2020-switch-gamerip
                    case 0: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/aondbglyuf/2-12%20Midnight%20%28~Sunny%20Weather~%29.mp3` //12AM
                    case 1: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/wwaysfnbua/1-01%20100%20a.m.%20%28~Sunny%20Weather~%29.mp3` //1AM
                    case 2: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/lexrhbhjia/1-02%20200%20a.m.%20%28~Sunny%20Weather~%29.mp3` //2AM
                    case 3: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/pcsvcptaha/1-03%20300%20a.m.%20%28~Sunny%20Weather~%29.mp3` //3AM
                    case 4: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/owkwxjctoh/1-04%20400%20a.m.%20%28~Sunny%20Weather~%29.mp3` //4AM
                    case 5: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/onrrqknryl/1-05%20500%20a.m.%20%28~Sunny%20Weather~%29.mp3` //5AM
                    case 6: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/rqracifvyq/1-06%20600%20a.m.%20%28~Sunny%20Weather~%29.mp3` //6AM
                    case 7: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/nqvsnnskbj/1-07%20700%20a.m.%20%28~Sunny%20Weather~%29.mp3` //7AM
                    case 8: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/jpawzixjfg/1-08%20800%20a.m.%20%28~Sunny%20Weather~%29.mp3` //8AM
                    case 9: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/dnxgmrhouc/1-09%20900%20a.m.%20%28~Sunny%20Weather~%29.mp3` //9AM
                    case 10: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/uwytxfsvce/1-10%201000%20a.m.%20%28~Sunny%20Weather~%29.mp3` //10AM
                    case 11: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/nzohinphwz/1-11%201100%20a.m.%20%28~Sunny%20Weather~%29.mp3` //11AM
                    case 12: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/pronvibntq/1-12%20Noon%20%28~Sunny%20Weather~%29.mp3` //12PM
                    case 13: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/gpxpymuvep/2-01%20100%20p.m.%20%28~Sunny%20Weather~%29.mp3` //1PM
                    case 14: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/ieayrrxhcz/2-02%20200%20p.m.%20%28~Sunny%20Weather~%29.mp3` //2PM
                    case 15: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/jjcmjtbtlp/2-03%20300%20p.m.%20%28~Sunny%20Weather~%29.mp3` //3PM
                    case 16: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/jcfazldtcc/2-04%20400%20p.m.%20%28~Sunny%20Weather~%29.mp3` //4PM
                    case 17: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/mwviyoxvpc/2-05%20500%20p.m.%20%28~Sunny%20Weather~%29.mp3` //5PM
                    case 18: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/onjurdfwac/2-06%20600%20p.m.%20%28~Sunny%20Weather~%29.mp3` //6PM
                    case 19: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/qtzofmsljb/2-07%20700%20p.m.%20%28~Sunny%20Weather~%29.mp3` //7PM
                    case 20: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/yiwzaieiss/2-08%20800%20p.m.%20%28~Sunny%20Weather~%29.mp3` //8PM
                    case 21: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/wmhnbfinbk/2-09%20900%20p.m.%20%28~Sunny%20Weather~%29.mp3` //9PM
                    case 22: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/kebpwcdikm/2-10%201000%20p.m.%20%28~Sunny%20Weather~%29.mp3` //10PM
                    case 23: return `https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/riihrtihta/2-11%201100%20p.m.%20%28~Sunny%20Weather~%29.mp3` //11PM
                    default: loading();
                } 
            }
    }
            return <audio src={hourlyMusic()} loop autoPlay controls/>
            
        }
        const loading = () => {return <h1>loading...</h1>}

    return props.currentTime ? loaded() : loading() ;

}

export default Music