// ==UserScript==
// @name         科技创新达人赛
// @namespace    https://greasyfork.org/zh-CN/scripts/551993-科技创新达人赛
// @version      2025-10-09
// @description  仅限内部交流使用，请用户24小时内删除脚本，产生的后果由用户个人承担。
// @author       buzhanxian
// @match        https://qtmoa.hecmcc.com:7080/*
// @icon         https://src.onlinedown.net/images/h_iphone_imges/book_3/171124_044606.jpg
// @license      GPL-3.0 License
// @downloadURL https://update.greasyfork.org/scripts/551994/%E7%A7%91%E6%8A%80%E5%88%9B%E6%96%B0%E8%BE%BE%E4%BA%BA%E8%B5%9B.user.js
// @updateURL https://update.greasyfork.org/scripts/551994/%E7%A7%91%E6%8A%80%E5%88%9B%E6%96%B0%E8%BE%BE%E4%BA%BA%E8%B5%9B.meta.js
// ==/UserScript==
/*
再次声明：仅限内部交流使用，请用户24小时内删除脚本，产生的后果由用户个人承担。
*/
(function() {

    start();
    function start() {
        // 等待页面加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(start, 1000);
            });
        } else {
            setTimeout(getTmArrValue, 1000);
        }
    }


    function getTmArrValue() {
        try {
            // 方法1: 直接访问全局变量
            if (typeof window.tm_arr !== 'undefined' && Array.isArray(window.tm_arr) && window.tm_arr.length > 0) {
                printAnswer();
                return;
            }
            // 方法2: 使用unsafeWindow（如果需要）
            if (typeof unsafeWindow !== 'undefined' &&
                typeof unsafeWindow.tm_arr !== 'undefined' &&
                Array.isArray(unsafeWindow.tm_arr) &&
                unsafeWindow.tm_arr.length > 0) {
                printAnswer();
                return;
            }
            setTimeout(getTmArrValue, 1000);
        } catch (error) {
            setTimeout(getTmArrValue, 1000);
        }
    }
    function printAnswer() {
        if ("1" === unsafeWindow.tm_arr[0][10]) {
            alert('答案选项是 ： 正确');
        } else if ("0" === unsafeWindow.tm_arr[0][10]) {
            alert('答案选项是 ： 错误');
        } else {
            alert('答案选项是 ： ' + unsafeWindow.tm_arr[0][10]);
        }
    }
    // 可选：添加一个按钮到页面，方便手动触发
    function addButton() {
        const button = document.createElement('button');
        button.innerHTML = '获取答案';
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = '9999';
        button.style.padding = '5px 10px';
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '3px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', getTmArrValue);

        document.body.appendChild(button);
    }

    // 添加按钮
    setTimeout(addButton, 2000);
})();
