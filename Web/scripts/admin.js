
if(data) {

    const tbody = document.getElementsByTagName("tbody")[0]

    data.users.forEach(user => {
        let tr = document.createElement("tr");

        let id = document.createElement("td");
        id.innerText = user.id;
        tr.appendChild(id);

        let tdName = document.createElement("td");
        let linkName = document.createElement("a")
        linkName.classList.add("link-primary");
        linkName.setAttribute("href", "#");
        linkName.innerText = user.firstName;
        tdName.appendChild(linkName);
        tr.appendChild(tdName)

        let inscription = document.createElement("td");
        inscription.innerText = "10/04/2024 11:54";
        tr.appendChild(inscription);

        let statutChange = document.createElement("td");
        // statutChange.innerText = user.id;
        tr.appendChild(statutChange);

        let statutTd = document.createElement("td");
        let statutBtn = document.createElement("button");
        statutBtn.classList.add("btn", "btn-success", "btn-sm", "w-100");
        statutBtn.setAttribute("type", "button");
        statutBtn.innerText = "Actif";
        statutTd.appendChild(statutBtn);
        tr.appendChild(statutTd);

        let tdAction = document.createElement("td");
        let linkAction = document.createElement("a");
        linkAction.classList.add("link-danger")
        linkAction.setAttribute("href", "#")
        linkAction.innerText = "Supprimer";
        tdAction.appendChild(linkAction)
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
    });
}