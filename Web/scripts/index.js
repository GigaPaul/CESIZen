if(data) {
    const resultElt = document.getElementById("searchResultContent");

    data.content.forEach(content => {
        let article = document.createElement("article")
        article.classList.add("col-4");

        let link = document.createElement("a");
        link.classList.add("card", "shadow-sm", "link-dark", "link-underline-opacity-0")
        link.setAttribute("href", `./Views/content.html?id=${content.id}`)
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
}