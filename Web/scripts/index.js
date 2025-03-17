const searchFilters = $(".searchFilter")
const searchBar = $("#searchBar")[0];

if(data) {
    const resultElt = document.getElementById("searchResultContent");

    data.content.forEach(content => {
        let article = document.createElement("article")
        $(article).addClass("col-4 contentResult").data("name", content.title);

        let link = document.createElement("a");
        link.classList.add("card", "shadow-sm", "link-dark", "link-underline-opacity-0")

        let href = "";
        let filter = "";

        if(data.pages.includes(content)) {
            href = "./Views/content.html";
            filter = "pageContent"
        }
        else {
            href = "./Views/respEx.html";
            filter = "exerResp"
        }

        $(article).data("filter", filter)
        href += `?id=${content.id}`;

        link.setAttribute("href", href)
        article.appendChild(link);

        let img = document.createElement("img");
        img.classList.add("card-img-top", "bg-black");
        img.style.height = "180px";
        link.appendChild(img);

        let body = document.createElement("div");
        body.classList.add("card-body");
        link.appendChild(body);

        let title = document.createElement("h5");
        title.classList.add("card-title", "text-truncate");
        title.innerText = content.title;
        body.appendChild(title);

        let text = document.createElement("p");
        text.classList.add("m-0");
        text.innerText = content.body.slice(0, 123) + "...";
        body.appendChild(text);

        resultElt.appendChild(article);
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
        let value = $(this).val()
    
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