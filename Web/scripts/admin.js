
if(data) {

    const tbody = document.getElementsByTagName("tbody")[0]
    const filters = $(".adminFilter");
    const adminSearchBar = $("#adminSearchBar")

    const start = new Date(2025, 0, 1);
    const today = new Date();

    for(let i = 0; i < data.users.length; i++) {
        let user = data.users[i];

        let isBanned = i % 5 === 0;

        let tr = document.createElement("tr");

        if(isBanned) {
            $(tr).addClass("userBanned")
        }

        let id = document.createElement("td");
        $(id).addClass("tdId");
        id.innerText = user.id;
        tr.appendChild(id);

        let tdName = document.createElement("td");
        let linkName = document.createElement("a")
        $(linkName).addClass("link-primary tdName").prop("target", "_blank");
        linkName.setAttribute("href", `${path}Views/profile.html?id=${user.id}`);
        linkName.innerText = `${user.firstName} ${user.lastName}`;
        tdName.appendChild(linkName);
        tr.appendChild(tdName)

        let inscription = document.createElement("td");
        let inscriptionRandomDate = randomDate(start, today);
        inscription.innerText = DateToString(inscriptionRandomDate);
        tr.appendChild(inscription);

        let statutChange = document.createElement("td");
        $(statutChange).addClass("dateStatutChange")
        if(isBanned) {
            let bannedRandomDate = randomDate(inscriptionRandomDate, today);
            $(statutChange).text(DateToString(bannedRandomDate))
        }
        tr.appendChild(statutChange);

        let statutTd = document.createElement("td");
        let statutBtn = document.createElement("button");
        $(statutBtn).addClass("btn btn-sm w-100 statutBtn");

        if(isBanned) {
            $(statutBtn).addClass("btn-outline-danger")
        }
        else {
            $(statutBtn).addClass("btn-success")
        }

        statutBtn.setAttribute("type", "button");
        statutBtn.innerText = isBanned ? "Banni" : "Actif";
        statutTd.appendChild(statutBtn);
        tr.appendChild(statutTd);

        let tdPromote = document.createElement("td");
        let statutPromote = document.createElement("button");
        $(statutPromote).addClass("btn btn-sm w-100 statutPromote btn-outline-primary");
        statutPromote.setAttribute("type", "button");
        statutPromote.innerText = "Utilisateur"

        $(statutPromote).on("click", function() {
            $(this).toggleClass("btn-outline-primary btn-primary")
            this.innerText = $(this).hasClass("btn-primary") ? "Admin" : "Utilisateur"
        })

        tdPromote.appendChild(statutPromote);
        tr.appendChild(tdPromote);

        let tdAction = document.createElement("td");
        let linkAction = document.createElement("a");
        linkAction.classList.add("link-danger")
        linkAction.setAttribute("href", "#")
        linkAction.innerText = "Supprimer";

        $(linkAction).on("click", function() {
            let tr = $(this).parents("tr");
            tr.remove();
        })

        tdAction.appendChild(linkAction)
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
    }

    $(".statutBtn").on("click", function() {
        let tr = $(this).parents("tr");
        let lastChangeTd = $(tr).children(".dateStatutChange");
        let currentDate = DateToString(new Date());

        lastChangeTd.text(currentDate)

        // Dé-bannissement
        if($(tr).hasClass("userBanned")) {
            $(tr).removeClass("userBanned");
            $(this).removeClass("btn-outline-danger").addClass("btn-success").text("Actif")
        }
        // Bannissement
        else {
            $(tr).addClass("userBanned");
            $(this).removeClass("btn-success").addClass("btn-outline-danger").text("Banni")
        }
    })


    $(filters).on("click", function() {
        $("tr").each(function () {
            ShowOrNot(this)
        })
    })

    $(adminSearchBar).on("input", function() {
        $("tr").each(function () {
            ShowOrNot(this)
        })
    })

    $("tr").each(function () {
        ShowOrNot(this)
    })
}


function ShowOrNot(element) {
    let filterMatches = false;

    let checkedFilter = $(".adminFilter:checked");
    let filterId = $(checkedFilter).prop("id");

    if(filterId === "adminBlacklist") {
        filterMatches = $(element).hasClass("userBanned");
    }
    else if(filterId === "adminWhitelist") {
        filterMatches = !$(element).hasClass("userBanned");
    }
    else {
        filterMatches = true;
    }

    if(!filterMatches) {
        $(element).addClass("d-none");
        return;
    }
    
    let nameOrIdMatches = false;

    let searchValue = $(adminSearchBar).val().toLowerCase().trim();
    let id = $($(element).children(".tdId")[0]).text();
    let name = $($(element).find(".tdName")[0]).text().toLowerCase().trim();

    nameOrIdMatches = id.includes(searchValue) || name.includes(searchValue);
    $(element).toggleClass("d-none", !nameOrIdMatches)
}


function DateToString(date) {
    let day, year, hour, minute;
    let month = date.getMonth() + 1;
    day = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
    month = month >= 10 ? month : "0"+month;
    year = date.getFullYear();
    hour = date.getHours() >= 10 ? date.getHours() : "0"+date.getHours();
    minute = date.getMinutes() >= 10 ? date.getMinutes() : "0"+date.getMinutes();

    return `${day}/${month}/${year} ${hour}:${minute}`;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}