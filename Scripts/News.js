const host = 'http://localhost:5000';

fetch(`${host}/getNews`).then((response) => {
    response.json().then((data) => {
        data.map((item) => {

            let id = item.art_id;

            let date = new Date(item.art_date);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let year = date.getFullYear();

            let normal_date = day + "." + month + "." + year;

            let element = '        ' +
                '       <div id="art_cont_'+id+'" class="art-container" onmouseover="art_cont_hover('+id+')" onmouseout="art_cont_no_hover('+id+')">\n' +
                '            <img id="art_img_'+id+'" class="art-img" src="' + item.art_img + '" alt="No Image">\n' +
                '            <br>\n' +
                '            <div id="art_cont_text_'+id+'" class="art-text">\n' +
                '                <h1 id="art_title_'+id+'" class="art-title">' + item.art_title + '</h1>\n' +
                '                <br>\n' +
                '                <h3 class="art-data">' + normal_date + '</h3>\n' +
                '                <br>\n' +
                '                <h3 id="art_text_'+id+'" class="art-desc">' + item.art_text + '</h3>\n' +
                '            </div>\n' +
                '        </div>\n'

            document.getElementById('container').innerHTML += element;

        })
    })
})
