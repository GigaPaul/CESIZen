const contentParams = new URLSearchParams(document.location.search);

const isEditing = contentParams.get("edit")

if(isEditing === "true") {
    const editables = document.querySelectorAll(".editable");

    editables.forEach(element => {
        element.setAttribute("contenteditable", true);
    });
}

const idContent = parseInt(contentParams.get("id"));
const container = $("#contentContainer")[0];

const post = data.content.find((content) => content.id === idContent);
if(post) {
    let randomId = Math.floor(Math.random() * (data.users.length - 1));
    let user = data.users[randomId]

    let header = document.createElement("div");
    container.appendChild(header);

    let headerContainer = document.createElement("div");
    $(headerContainer).addClass("d-flex justify-content-between align-items-center");
    header.appendChild(headerContainer);

    let h2 = document.createElement("h2");
    $(h2).addClass("m-0 editable").text(post.title);
    headerContainer.appendChild(h2)

    let author = document.createElement("p");
    $(author).addClass("text-body-tertiary m-0").html(`Il y a 3 mois par <strong>${user.firstName}</strong>`);
    headerContainer.appendChild(author)

    let explicatif = document.createElement("p");
    $(explicatif).addClass("text-body-tertiary editable").text(post.title);
    header.appendChild(explicatif);

    let body = document.createElement("div");
    container.appendChild(body);

    
    let split = post.body.split("\n")
    let type = $(container).data("type");

    switch(type) {
        case "respEx":
            let h4 = document.createElement("h4");
            let textH4 = split[0].split(".")[0];
            $(h4).addClass("editable").text(textH4);
            body.appendChild(h4);

            let p = document.createElement("p");
            $(p).addClass("editable").text(split[0]);
            body.appendChild(p);

            let ol = document.createElement("ol");
            body.appendChild(ol);
            let splitAgain = split[1].split(".");
            for(let i = 0; i < 5; i++) {
                let li = document.createElement("li");
                $(li).text(splitAgain[i] + ".")
                ol.appendChild(li);
            }
            break;
        default:
            for(let i = 0; i < split.length; i++) {
                split[i] = split[i].trim();
    
                if(i % 2 === 0 && i < split.length - 1) {
                    let h4 = document.createElement("h4");
                    let textH4 = split[i].split(".")[0];
                    $(h4).addClass("editable").text(textH4);
                    body.appendChild(h4);
                }
    
                let p = document.createElement("p");
                $(p).addClass("editable").text(split[i]);
                body.appendChild(p);
            }
            break;
    }

}