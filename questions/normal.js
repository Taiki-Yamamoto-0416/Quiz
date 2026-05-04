const allQuestions = [
  {
    id: 1,
    category: "正規分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\( X \\) は正規分布 \\( \\mathcal{N}(3,4) \\) に従うとする．このとき，確率 \\(P(-3\\le X \\le 1)\\) はいくらか．<br>
      ① 0.16<br>
      ② 0.25<br>
      ③ 0.4<br>
      ④ 0.63<br>
      ⑤ 0.88
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "①",
    explanation: `
      \\( X \\) の期待値は 3, 分散は 2 より，標準化した\\( Z = \\frac{X-3}{2} \\)は \\( \\mathcal{N}(0,1) \\) に従う. したがって，<br>
      \\begin{align}
      P(-3\\le X\\le 1) &= P(-3 \\le Z \\le -1) \\\\
        &= P(1 \\le Z \\le 3) \\\\
        &= Q(1)-Q(3) \\\\
        &= 0.1587 - 0.0013 \\\\
        &= 0.1574 \\approx 0.16 ,
      \\end{align}
      ただし，\\(Q\\) は標準正規分布の上側確率とする．
      `
  },
];    