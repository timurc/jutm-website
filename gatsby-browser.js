// https://github.com/scottnonnenberg/blog/blob/master/gatsby-browser.js

let first = true;

exports.onRouteUpdate = state => {
    window._paq = window._paq || [];

    if (first) {
        first = false;
    } else {
        window._paq.push(['setCustomUrl', state.pathname]);
        window._paq.push(['setDocumentTitle', state.pathname]);
        window._paq.push(['trackPageView']);
    }
};