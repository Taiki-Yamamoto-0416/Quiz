const allQuestions = [
  {
    id: 1,
    category: "連続型確率分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\( X \\) は正規分布 \\( \\mathcal{N}(3,4) \\) に従うとする．このとき，確率 \\(\\mathrm{P}(-3\\le X \\le 1)\\) はいくらか．<br>
      ① 0.16<br>
      ② 0.25<br>
      ③ 0.40<br>
      ④ 0.63<br>
      ⑤ 0.88
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "①",
    explanation: `
      正解は①です．<br>
      <解説> <br>
      \\( X \\) の期待値は 3, 分散は 2 より，標準化した\\( Z = \\frac{X-3}{2} \\)は \\( \\mathcal{N}(0,1) \\) に従う. したがって，<br>
      \\begin{align}
      \\mathrm{P}(-3\\le X\\le 1) &= \\mathrm{P}(-3 \\le Z \\le -1) \\\\
        &= \\mathrm{P}(1 \\le Z \\le 3) \\\\
        &= Q(1)-Q(3) \\\\
        &= 0.1587 - 0.0013 \\\\
        &= 0.1574 \\approx 0.16 ,
      \\end{align}
      ただし，\\(Q\\) は標準正規分布の上側確率とする．
      `
  },
  {
    id: 2,
    category: "連続型確率分布",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      1時間に患者が平均5人訪れる病院において，次の患者が訪れるまでの時間をXとし，指数分布に従うとする．<br>
      8分以内に次の患者が訪れる確率はいくらか．以下の表を用いてもよい．<br>
      ① 0.24<br>
      ② 0.39<br>
      ③ 0.49<br>
      ④ 0.55<br>
      ⑤ 0.70
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>\\(x\\)</th>
            <th class='border border-slate-300 p-1'>\\(e^{-x}\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1/3</td>
            <td class='border border-slate-300 p-1'>0.7165</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1/2</td>
            <td class='border border-slate-300 p-1'>0.6065</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2/3</td>
            <td class='border border-slate-300 p-1'>0.5134</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>0.3679</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4/3</td>
            <td class='border border-slate-300 p-1'>0.2636</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3/2</td>
            <td class='border border-slate-300 p-1'>0.2231</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "③",
    explanation: `
      正解は③です．<br>
      <解説> <br>
      \\(X\\) が指数分布 \\(\\mathrm{Exp}(\\lambda)\\) に従うとき，これは単位時間当たりのある事象の平均発生回数 \\(\\lambda\\) に対して，次に事象が発生するまでの待ち時間 \\(X\\) をモデル化するときによく用いられる．このとき，<br>
      \\begin{align}
      \\mathrm{E}[X] &= 1/\\lambda, \\\\
      \\mathrm{Var}[X] &= 1/\\lambda^2, \\\\
      f(x|\\lambda) &= \\lambda e^{-\\lambda x},\\ x\\ge 0,\\\\
      P(X\\ge x) &= 1-e^{-\\lambda x}
      \\end{align}
      が成り立つ．ただし，\\(f(x|\\lambda)\\) は \\(X\\) の確率密度関数．本問題では \\(\\lambda = 5\\) とすればよい．よって，求める確率は
      \\begin{align}
      \\mathrm{P}(X\\le 8/60) &= 1-e^{-5\\times 8/60} \\\\
      &= 1-e^{-4/3} \\\\
      &\\approx 1-0.5134 \\approx 0.49.
      \\end{align}
      `
  },
];    