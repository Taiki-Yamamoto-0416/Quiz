const allQuestions = [
  {
    id: 1,
    category: "例",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      これは練習用です.
    `,
    choices: ["1", "2", "3"],
    answer: "1",
    explanation: `
      正解は 1 です。<br>
      ここに解説を書きます
      `
  },
  {
    id: 2,
    category: "数式",
    difficulty: 1,
    priority: 2,
    type: "回答式",
    question: `
      数式の練習です.LaTeXとは少し違います.
      1.数式モード$....$は\\(....\\)と書きます。
      2.\は\\で書きます.
        例. \alpha -> \\alpha
            \begin{align} -> \\begin{align} 
      3.文章の改行は,強制改行で<br>と打ちます      
      こんな感じです.その他はLaTeXと同じように扱えます.     
    `,
    choices: ["1", "2", "3"],
    answer: "1",
    explanation: `
      標準偏差は分散の正の平方根として定義されます。<br>
      \\(\\sqrt{16} = 4\\) となるため、標準偏差は 4 です。
      `
  }
];    