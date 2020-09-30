//配列の中にオブジェクトを入れて、さらに配列をいれる。
const quiz = [
  {
    question: "日本の四季の正しい順番は次のうちどれ？",
    answers: [
      "春・冬・夏・秋",
      "春・夏・冬・秋",
      "春・夏・秋・冬",
      "秋・冬・夏・春",
    ],
    correct: "春・夏・秋・冬",
  },
  {
    question: "次のうち正しい円周率はどれ？",
    answers: ["314", "3.14", "31.4", "3,14"],
    correct: "3.14",
  },
  {
    question: "この中で世界三大美人として当てはまっていないのは誰？",
    answers: ["クレオパトラ", "紫式部", "小野小町", "楊貴妃"],
    correct: "紫式部",
  },
  {
    question:
      "世界でGAFAという有名企業の名前の頭文字をとって呼ぶ呼び方があるが、次のうち当てはまらないのはどれ？",
    answers: ["Google", "Amazon", "Facebook", "Ameba"],
    correct: "Ameba",
  },
];

const quizLength = quiz.length; //4問
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length; //6個

//クイズの問題文、選択肢を定義
const setup = () => {
  console.log(
    (document.getElementById("js-question").textContent =
      quiz[quizIndex].question)
  );
  //textContentプロパティを使うとhtml内の文字だけ抽出することができる。

  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setup();
//関数の呼び出し

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解!");
    score++;
  } else {
    window.alert("不正解!");
  }

  quizIndex++;
  //次の問題にすすむ処理

  if (quizIndex < quizLength) {
    //問題数があればこちらを実装
    setup();
  } else {
    //問題数がもう無ければこちらを実装
    window.alert(
      "終了！あなたの正解数は " + score + "/" + quizLength + "です！"
    );
  }
};

//クリックした時の正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}

//[$]でHTMLのオブジェクトが入っていることが理解しやすい。

//[e]はイベントのオブジェクトの事
//[e.target]はクリックされたボタンの事を表している。(クリックされた要素に対して何かしたいときに使う)だから、いちいちbutton[~]と書かずにe.targetと書くのが望ましい。
