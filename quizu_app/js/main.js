const quizu = [
  {
  question : "エースの船長時代の海賊団の名前はどれ？",
  ansers : ['スペード海賊団','ハート海賊団', 'クローバー海賊団','ダイヤ海賊団'],
  correct : 'スペード海賊団'
},
{
  question : "プリンはシャーロット家何女？",
ansers : ['10女','1女','35女','40女'],
correct : '35女'
},
{
  question : "現在のルフィの懸賞金は？",
ansers : ['3000万ベリー','1億ベリー','3億ベリー','15億ベリー'],
correct : '15億ベリー'
},
{
  question : "懸賞金額が一番高いキャラは誰？",
ansers : ['ハンコック','クロコダイル','バルトロメオ','ホーキンス'],
correct : 'ホーキンス'
},
{
  question : "ゾロが熊に飛ばされた島はどれ？",
ansers : ['ハラヘッターニャ','シッケアール王国','ウェザリア','トリノ王国'],
correct : 'シッケアール王国'
},
{
  question : "二年後のシャボンディ諸島で一番最後に来たのは誰？",
ansers : ['ゾロ','ナミ','ロビン','ブルック'],
correct : 'ロビン'
},
{
  question : "アラバスタにあるとされる古代兵器の名前はどれ？",
ansers : ['プルトン','ウラヌス','ポセイドン','ネプチューン'],
correct : 'プルトン'
},
{
  question : "次のうち能力者じゃないのは誰？",
ansers : ['マゼラン','アプー','ラオG','ボンクレー'],
correct : 'ラオG'
},
{
  question : "ビビはゾロのことを何て呼んでた？",
ansers : ['ミスターブシドー','ミスターキシドー','ロロノア','マリモ'],
correct : 'ミスターブシドー'
},
{
  question : "インペルダウンの獄卒獣にいないのはどれ？",
ansers : ['ミノタウロス','ミノチワワ','ミノゼブラ','みのもんた'],
correct : 'みのもんた'
},
]

  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');
  const relode = document.getElementById('relode');



  const judge = document.getElementById('judge');

  let modalCount = 0;

  let quizuIndex = 0;

  let modalCounter =0;


const quizuLength = quizu.length;
let score = 0;

const button = document.getElementsByClassName('choice'); 
const buttonLength = button.length;

// 問題文と選択肢の定義 //
const setupquiz = () => {
  for(i=0; i<buttonLength; i++){
    button[i].textContent = quizu[quizuIndex].ansers[i];
  }
  document.getElementById('quesction').textContent = `${quizuIndex+1}.${quizu[quizuIndex].question}`;
}
setupquiz();

//正誤判定をして、モーダルを表示//
const clickHndler = (e)=>{
  if(quizu[quizuIndex].correct === e.target.textContent){
    judge.textContent = '合ってます';
    modalHandler();
    score++;
}else {
  judge.textContent = '違います';
    modalHandler();
}
}

//モーダル//
const modalHandler = () => {

  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
  
  quizuIndex++;
  close.addEventListener('click',()=>{
   modal.classList.add('hidden');
   mask.classList.add('hidden');
   goTonext();
  });
}

//問題があるなら問題を呼び出す、なければモーダルに終了と表示する//
const goTonext = () =>{
      if( quizuIndex < quizuLength){
        setupquiz ();
      }else{
        judge.textContent = `終わり!!  あなたの得点は${quizuLength}問中${score}点です`;
        close.classList.add('hidden');
        relode.classList.remove('hidden');
        modalHandler();
      }
}
//クリックしたらclickHndlerを呼び出す//
    for(i=0; i<buttonLength; i++){
      button[i].addEventListener('click',(e) => {
      clickHndler(e);
});
    }


    


     