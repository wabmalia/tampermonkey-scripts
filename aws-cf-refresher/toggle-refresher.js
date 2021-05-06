// ==UserScript==
// @name         AWS toggle refresher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.console.aws.amazon.com/cloudformation/home?region=*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_log
// @run-at       context-menu
// ==/UserScript==

(function () {
    'use strict';

    let timerId = GM_getValue("refresher_timer")
    if (timerId) {
        GM_log("Stop refresher")
        clearInterval(timerId)
        GM_setValue("refresher_timer", 0)
    } else {
        GM_log("Start refresher")
        timerId = setInterval(() => {
            document.querySelectorAll("awsui-button.stacks-refresh-button")
                .forEach(element => element.firstChild.click())
        }, 3000)
        GM_setValue("refresher_timer", timerId)
    }
})();