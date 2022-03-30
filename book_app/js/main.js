  $('#send').on('click',function(){
        const url = "https://www.googleapis.com/books/v1/volumes?q="+$("#key").val();
      $.ajax({
          url: url,
          dataType: "json"
      }).done(function(data) {

          console.log(data);
          const len = data.items.length;
          let html ;
          for( let i=0; i < len; i++){
            html += `
              <tr>
                <td>${data.items[i].volumeInfo.title}</td>
                <td>${data.items[i].volumeInfo.authors}</td>
                <td>
                  <a target="_blank" href="${data.items[i].volumeInfo.infoLink}">
                  <img src="${data.items[i].volumeInfo.imageLinks.thumbnail}">
                </td>
              </tr>  `
          }
            $("#list").empty().append(html);    

      });
  });

  $("#key").keydown(function() {
  if( event.keyCode == 13 ) {
    $("#send").click();
  }
});
 

