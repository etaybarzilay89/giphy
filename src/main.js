/**
 * Created by etay on 30/07/2017.
 */
(function () {

    function init() {
        renderPage("");
    }

    function searchGiffy(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;

        const giffToSearch = currentTarget.querySelector('#giphy-text-to-search').value;
        fetch(`/search?giphy_text=${giffToSearch}`)
            .then(response => response.json())
            .then(giff => renderPage(giff));
    }

    function renderGiphy(gifSrc) {
        return `<img src="${gifSrc}" width="200px" height="200px">`
    }

    function renderNotFound() {
        return `<h3>Could not find giff</h3>`
    }

    function renderPage(giphyUrl) {
        const rootElement = document.querySelector('.root');
        rootElement.innerHTML = renderHtml(giphyUrl);
        rootElement.querySelector('.search-giphy-form') &&  rootElement.querySelector('.search-giphy-form').addEventListener('submit', searchGiffy);
    }

    function renderHtml(giphyUrl) {
        const isGiphy = giphyUrl && giphyUrl.giphyurl;
        return `
        <form class="search-giphy-form">
          <input type="text" name="giphy-to-search" id="giphy-text-to-search" title="giphy-search">
          <button type="submit" class="search-giphy-btn">Giphy</button>
        </form>
        ${isGiphy ? renderGiphy(giphyUrl.giphyurl) : renderNotFound()} 
        `;
    }

    init();
})();
