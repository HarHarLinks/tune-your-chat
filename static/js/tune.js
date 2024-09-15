import { AllOfFilter, AnyOfFilter, refreshCardsView } from "./projects.js";

document.addEventListener('DOMContentLoaded', (event) => {

    var filters = [];
    let maturityFilter = new AnyOfFilter("filter-maturity", "all-tunes", filters);
    let licenceFilter = new AnyOfFilter("filter-licence", "all-tunes", filters);
    let languageFilter = new AnyOfFilter("filter-language", "all-tunes", filters);
    let tagFilter = new AllOfFilter("filter-tags", "all-tunes", filters);
    filters.push(
        maturityFilter,
        licenceFilter,
        languageFilter,
        tagFilter
    );
    refreshCardsView("all-tunes", filters);
    for(const filter of filters) {
        filter.refreshActiveState();
    }
})
