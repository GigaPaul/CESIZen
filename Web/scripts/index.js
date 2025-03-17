const searchFilters = $(".searchFilter")
const searchBar = $("#searchBar")[0];

if(data) {
    const resultElt = document.getElementById("searchResultContent");

    data.content.forEach(content => {
        let elt = new Post(content).CreateElement();

        resultElt.appendChild(elt);
    });

    $(".contentResult").each(function() {
        CheckIfDisplayed(this);
    })

    $(searchFilters).on("change", function() {
        $(".contentResult").each(function() {
            CheckIfDisplayed(this);
        })
    })

    $(searchBar).on("input", function() {    
        $(".contentResult").each(function() {
            CheckIfDisplayed(this);
        })
    })

}





function CheckIfDisplayed(element) {
    let filter = $(element).data("filter");

    let filterChecked = false;

    $(".searchFilter").each(function() {
        if($(this).data("filter") === filter) {
            filterChecked = this.checked;
        }
    })
    
    if(!filterChecked) {
        $(element).toggleClass("d-none", true);
        return;
    }



    let value = $(searchBar).val()
    let searchMatches = $(element).data("name").includes(value);
    $(element).toggleClass("d-none", !searchMatches);
}