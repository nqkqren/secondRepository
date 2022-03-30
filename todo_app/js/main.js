(()=>{
  const titles = [];
  const cnp_titles = [];

  const mask = document.getElementById('mask')
  const modal = document.getElementById('modal')


  //エンターキーでaddイベントが発火//
  $("#title").keypress(function(e){
    if(e.which == 13){
      $("#add").click();
    }
  });

//リストを表示（未完了タスク）//
  const view = () => {
    for(  let i=0 ; i<titles.length; i++ ){
      $('#list').prepend('<li id="item" data-titles="'+i+'"><span>'+titles[i]+'</span><i id="cnp" class="fa-solid fa-check"></i><i id="delete" class="fa-solid fa-trash"></i></li>');
    }
  }
//リストを表示（完了済タスク）//
  const cnp_view = () => {
    for(  let i=0 ; i<cnp_titles.length; i++ ){
      $('#cnp_list').prepend('<li id="item" data-titles="'+i+'"><span>'+cnp_titles[i]+'</span><i id="back" class="fa-solid fa-arrow-rotate-left"></i><i id="cnp_delete" class="fa-solid fa-trash"></i></li>');
    }
  }

  //タスクを追加、入力欄が空ならメッセージを表示//
  $("#add").on('click',function(){
    const title = $('#title').val();
    if(title === ''){
      $('#error-message').text('タスクを入力してください');
    }else {
      $('#error-message').text('');
      $('#list').empty();
      titles.push(title);
      view();
      console.log(title)
    }
    document.getElementById('title').value = '';
  });
  //未完了タスクを全消し//
  $('#allDelete').on('click',function(){
    mask.classList.remove('hidden')
    modal.classList.remove('hidden')
    $('.yes').on('click',function(){
      mask.classList.add('hidden')
      modal.classList.add('hidden')
      $('#list').empty();
      titles.splice(0);
      view();
      $('#cnp_list').empty();
      cnp_titles.splice(0);
      cnp_view();
    })
    $('.no').on('click',function(){
      mask.classList.add('hidden')
      modal.classList.add('hidden')
    })
  });
  //選択したタスクを削除（未完了タスク）//
  $(document).on('click','#delete',function(){
    $('#list').empty();
    titles.splice($(this).closest('li').attr('data-titles'), 1);
    view();
  });
  //選択したタスクを削除（完了済タスク）//
  $(document).on('click','#cnp_delete',function(){
    $('#cnp_list').empty();
    cnp_titles.splice($(this).closest('li').attr('data-titles'), 1);
    cnp_view();
  });

  //TASK => COP//
  $(document).on('click','#cnp',function(){
    $('#list').empty();
    titles.splice($(this).closest('li').attr('data-titles'), 1);
    view();

    $('#cnp_list').empty();
    const cnp_title = this.closest('li').textContent
    cnp_titles.push(cnp_title)
    cnp_view();
  });
  //CNP => TASK //
  $(document).on('click','#back',function(){
    $('#cnp_list').empty();
    cnp_titles.splice($(this).closest('li').attr('data-titles'), 1);
    cnp_view();

    $('#list').empty();
    const title = this.closest('li').textContent
    titles.push(title)
    view();
  });

  

})();


//const wa = this.closest('li');
  //    wa.classList.toggle('opacity');