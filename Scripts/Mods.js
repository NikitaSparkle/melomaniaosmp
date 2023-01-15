const host = 'http://localhost:5000';

let last_date = "";


fetch(`${host}/getMods`).then((response) => {
    response.json().then((data) => {
        data.map((item) => {
            let url = "'" + item.mod_path + "'";

            let date = new Date(item.mod_date);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let year = date.getFullYear();

            let normal_date = day + "." + month + "." + year;

            if(normal_date === last_date){
                let element_s = '<button class="mod-button" onclick="download_file(' + url + ')">' + item.mod_name + '</button>\n';
                document.getElementById('mod_container_'+normal_date+'').innerHTML += element_s;
            }
            else{
                let element_n = '    ' +
                    '    <div id="'+normal_date+'" class="date-cont">\n' +
                    '      <h2 class="date">'+normal_date+'</h2>\n' +
                    '      <br>\n' +
                    '      <div id="mod_container_'+normal_date+'" class="mod-cont">\n' +
                    '        <button class="mod-button" onclick="download_file(' + url + ')">' + item.mod_name + '</button>\n' +
                    '      </div>\n' +
                    '    </div>' +
                    '<br>';
                document.getElementById('container').innerHTML += element_n;
                last_date = normal_date;
            }

        })
    })
})
