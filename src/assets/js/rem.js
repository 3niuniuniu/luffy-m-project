const getRem = () => 100 * (getScreenWidth() / 375);
const getScreenWidth = () => document.documentElement.clientWidth;
(function (doc, win) {
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = () => {
        const docEl = document.documentElement;
        const clientWidth = getScreenWidth();
        if (!clientWidth) return;
        docEl.style.fontSize = `${getRem()}px`;
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


