var fields = [
    document.querySelector(`#data`),
    document.querySelector(`#quantidade`),
    document.querySelector(`#valor`)
];

console.log(fields);

let tbody = document.querySelector(`table tbody`);

document.querySelector(`.form`).addEventListener(`submit`, function(event) {
    //alert(`Olar`);
    event.preventDefault();

    let tr = document.createElement(`tr`);
    fields.forEach(function(field) {
        let td = document.createElement(`td`);
        td.textContent = field.value;
        tr.appendChild(td);
    });
    let tdVolume = document.createElement(`td`);
    tdVolume.textContent = fields[1].value * fields[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    fields[0] = ``;
    fields[1] = 1;
    fields[2] = 0,0;
    fields[0].focus();
});