;(function (w, d, Site) {
  var searchFormToggleBtn = d.getElementById('search-form-toggle'),
      searchFormContainer = d.getElementById('search-form-container'),
      states = {
        hidden: 'is-hidden'
      };

  if (searchFormToggleBtn !== null && searchFormContainer !== null) {
    searchFormToggleBtn.addEventListener('click', function(evt) {
      evt.preventDefault();

      searchFormContainer.classList.toggle(states.hidden);
    });
  }

})(window, document, window.SedonaSite || {});
