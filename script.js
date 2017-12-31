var nextPage = function (page, timeout) {
    setTimeout(function () {
        window.location.href = page;
    }, timeout)
};