const allQuestions = [
  {
      id: 1,
      category: "離散確率分布",
      difficulty: 1,
      priority: 1,
      type: "選択式",
      question: `
        表が出る確率が \\(\\frac{1}{4}\\)、裏が出る確率が \\(\\frac{3}{4}\\) のコインを 5 回投げるとき、表が出る回数を \\(X\\) とおく。<br>
        \\(P(X \\ge 4)\\) の値として正しいものを選べ。
      `,
      choices: ["1. \\(\\frac{21}{1024}\\)", "2. \\(\\frac{15}{1024}\\)", "3. \\(\\frac{1}{64}\\)", "4. \\(\\frac{1}{256}\\)"],
      answer: "1. \\(\\frac{21}{1024}\\)",
      explanation: `
        【解説】<br>
        \\(X\\) は二項分布 \\(Bin(5, \\frac{1}{4})\\) に従います。<br>
        \\(P(X \\ge 4) = P(X=4) + P(X=5)\\) を計算します。
        \\begin{align}
        P(X=4) &= {}_5C_4 \\left(\\frac{1}{4}\\right)^4 \\left(\\frac{3}{4}\\right)^1 \\\\
        &= 5 \\cdot \\frac{1}{256} \\cdot \\frac{3}{4} \\\\
        &= \\frac{15}{1024} 
        \\end{align}
        \\begin{align}
        P(X=5) &= {}_5C_5 \\left(\\frac{1}{4}\\right)^5 \\left(\\frac{3}{4}\\right)^0 \\\\
        &= 1 \\cdot \\frac{1}{1024} \\cdot 1 \\\\
        &= \\frac{1}{1024}
        \\end{align}
        合計すると、\\(P(X \\ge 4) = \\frac{15 + 1}{1024} = \\frac{16}{1024} = \\frac{1}{64}\\) です。<br>
      `
    },
    {
      id: 2,
      category: "離散確率分布",
      difficulty: 2,
      priority: 2,
      type: "選択式",
      question: `
        あるゲームは確率 0.6 で勝てるとする。<br>
        このゲームは、勝てばゲームを続行し、負ければゲームは終了する。<br>
        このゲームが終了したときに、ゲームを行った回数 1 回につき 100 円の賞金が手に入る。<br>
        このゲームで得られる賞金を \\(X\\) としたとき、\\(X\\) の期待値として正しい値を次の選択肢から選べ。<br>
        <br>
        1. 60 <br>
        2. 100 <br>
        3. 250 <br>
        4. 400
      `,
      choices: ["1", "2", "3", "4"],
      answer: "3",
      explanation: `
        正解は 3 です。<br>
        <br>
        <b>1. 試行回数の分布</b><br>
        「負け」を成功（確率 \\(p = 1 - 0.6 = 0.4\\)）とみなすと、ゲームが終了するまでの試行回数 \\(N\\) は、初めて成功するまでの試行回数を表す幾何分布に従います。<br>
        このときの期待値 \\(E[N]\\) は以下の通りです：<br>
        \\[ E[N] = \\frac{1}{p} = \\frac{1}{0.4} = 2.5 \\text{ 回} \\]<br>
        <br>
        <b>2. 賞金の期待値</b><br>
        「ゲームを行った回数 1 回につき 100 円」なので、賞金 \\(X = 100N\\) です。<br>
        \\[ E[X] = 100 \\times E[N] = 100 \\times 2.5 = 250 \\text{ 円} \\]<br>
        <br>
        <b>【参考】</b><br>
        「勝った回数」ではなく「行った回数」を数えるため、最後に負けた時の 1 回分も賞金に含まれる計算になります。
      `
    },
    {
      id: 3,
      category: "離散確率分布",
      difficulty: 1,
      priority: 3,
      type: "選択式",
      question: `
        確率変数 \\(X\\) はパラメータ \\(\\lambda\\) のポアソン分布に従うとする。
        \\(X\\) の期待値と分散として正しい組を選べ。
        ただし、ポアソン分布の確率関数 \\(f(x)\\) は次に示す通りである。
        \\begin{equation}
        f(x) = \\displaystyle\\frac{e^{-\\lambda} \\cdot \\lambda^x}{x!}
        \\end{equation}
        <br>
        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
          <thead>
            <tr class='bg-slate-100'>
              <th class='border border-slate-300 p-1'></th>
              <th class='border border-slate-300 p-1'>期待値</th>
              <th class='border border-slate-300 p-1'>分散</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
              <td class='border border-slate-300 p-1'>\\(\\lambda\\)</td>
              <td class='border border-slate-300 p-1'>\\(\\lambda^2\\)</td>
            </tr>
            <tr>
              <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
              <td class='border border-slate-300 p-1'>\\(\\lambda\\)</td>
              <td class='border border-slate-300 p-1'>\\(\\lambda\\)</td>
            </tr>
            <tr>
              <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
              <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{1}{\\lambda}\\)</td>
              <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{1}{\\lambda^2}\\)</td>
            </tr>
            <tr>
              <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
              <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{1}{\\lambda}\\)</td>
              <td class='border border-slate-300 p-1'>\\(\\lambda\\)</td>
            </tr>
          </tbody>
        </table>
      `,
      choices: ["1", "2", "3", "4"],
      answer: "2",
      explanation: `
        正解は 2 です。<br>
        <br>
        <b>ポアソン分布の特徴</b><br>
        ポアソン分布 \\(Po(\\lambda)\\) は、期待値と分散が等しくなるという性質を持っています。
        \\[ E[X] = \\lambda \\]
        \\[ V[X] = \\lambda \\]
        <b>【参考】導出（期待値）</b><br>
        期待値の定義 \\(E[X] = \\sum x f(x)\\) に確率関数を代入して計算すると、マクローリン展開の形が現れ、最終的に \\(\\lambda\\) が残ります。<br>
        統計検定等でも頻出の基本公式なので、結果だけでもしっかり覚えておきましょう。
      `
    },
    {
      id: 4,
      category: "離散確率分布",
      difficulty: 3,
      priority: 3,
      type: "選択式",
      question: `
        ある商品が 1 日に売れる個数は平均 100 のポアソン分布に従うとする。<br>
        今日、この商品が 120 個以上売れる確率として一番近いものを選べ。<br>
        ただし、パラメータ \\(\\lambda\\) が十分大きいとき、ポアソン分布 \\(Po(\\lambda)\\) は正規分布 \\(N(\\lambda, \\lambda)\\) とみなせることを用いてもよい。<br>
        <br>
        1. 0.4207 <br>
        2. 0.1587 <br>
        3. 0.0228 <br>
        4. 0.0062
      `,
      choices: ["1", "2", "3", "4"],
      answer: "3",
      explanation: `
        正解は 3 です。<br>
        <br>
        <b>1. 分布の近似</b><br>
        売れる個数を \\(X\\) とすると、\\(X \\sim Po(100)\\) です。問題文の指示通り正規近似を行うと、
        \\[ X \\sim N(100, 100) \\]
        とみなせます（平均 \\(\\lambda = 100\\)、分散 \\(\\lambda = 100\\))<br>
        <b>2. 標準化</b><br>
        \\(X = 120\\) を標準化して \\(Z\\) 値を求めます。標準偏差は \\(\\sqrt{100} = 10\\) なので、
        \\[ Z = \\frac{120 - 100}{10} = \\frac{20}{10} = 2 \\]
        となります。<br>
        <b>3. 確率の特定</b><br>
        標準正規分布において、\\(Z \\ge 2\\) となる確率（上側確率）を求めます。<br>
        正規分布表より\\(Z=2\\) のときの面積はおよそ 0.0228 です。<br>
        したがって、選択肢 3 が最も近い値となります。
      `
    },
    {
    id: 9,
    category: "二項分布",
    difficulty: 3,
    priority: 1,
    type: "選択式",
    question: `
      問題文を読み、次の ① 〜 ③ として適切な組み合わせを選べ。<br><br>
      AさんはゲームGを 100 回行ったところ 40 回勝つことができた。このとき、ゲームGは公平なゲームと言えるだろうか。<br>
      1回のゲームGで勝つ確率を \\(p\\) とし、100ゲームを行ったときに勝つ回数を \\(X\\) とすると、\\(X\\) は \\(Bin(p, 100)\\) に従う。<br>
      ここで、<br>
      \\[H_0 : p = \\frac{1}{2} \\text{ vs } H_1 : p \\neq \\frac{1}{2}\\]<br>
      の仮説検定を行う。帰無仮説 \\(H_0\\) の下で \\(X\\) は ① に従う。<br>
      ここで、
      \\[E[X] = 50, Var(X) = \\boxed{\\text{(ア)}}\\] 
      をそれぞれ計算する。<br>
      \\(n\\) が十分大きいため、\\(X\\) は近似的に正規分布に従うことから、正規分布の平均についての検定を行う。検定統計量を \\(Z\\) とすると、<br>
      \\[Z = \\boxed{\\text{(イ)}}\\]
      である。標準正規分布の両側 5% 点は \\(\\pm 1.96\\) であることから、帰無仮説\\(H_0\\) は \\(\\boxed{\\text{(ウ)}}\\) される。

      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>ア</th>
            <th class='border border-slate-300 p-1'>イ</th>
            <th class='border border-slate-300 p-1'>ウ</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class='border border-slate-300 p-1 bg-slate-50'>1</td><td class='border border-slate-300 p-1'>25</td><td class='border border-slate-300 p-1'>-2.0</td><td class='border border-slate-300 p-1'>棄却</td></tr>
          <tr><td class='border border-slate-300 p-1 bg-slate-50'>2</td><td class='border border-slate-300 p-1'>25</td><td class='border border-slate-300 p-1'>-2.0</td><td class='border border-slate-300 p-1'>採択</td></tr>
          <tr><td class='border border-slate-300 p-1 bg-slate-50'>3</td><td class='border border-slate-300 p-1'>25</td><td class='border border-slate-300 p-1'>-2.5</td><td class='border border-slate-300 p-1'>棄却</td></tr>
          <tr><td class='border border-slate-300 p-1 bg-slate-50'>4</td><td class='border border-slate-300 p-1'>50</td><td class='border border-slate-300 p-1'>-2.0</td><td class='border border-slate-300 p-1'>採択</td></tr>
          <tr><td class='border border-slate-300 p-1 bg-slate-50'>5</td><td class='border border-slate-300 p-1'>50</td><td class='border border-slate-300 p-1'>-2.5</td><td class='border border-slate-300 p-1'>棄却</td></tr>
          <tr><td class='border border-slate-300 p-1 bg-slate-50'>6</td><td class='border border-slate-300 p-1'>50</td><td class='border border-slate-300 p-1'>-2.5</td><td class='border border-slate-300 p-1'>採択</td></tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4", "5", "6"],
    answer: "1",
    explanation: `
      【解説】<br>
      ①：帰無仮説 \\(H_0: p=1/2\\) の下で、分散は \\(Var(X) = np(1-p) = 100 \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = 25\\) となります。<br>
      ②：検定統計量 \\(Z\\) は、\\(Z = \\frac{X - E[X]}{\\sqrt{Var(X)}} = \\frac{40 - 50}{\\sqrt{25}} = \\frac{-10}{5} = -2.0\\) です。<br>
      ③：観測された統計量 \\(Z = -2.0\\) は、両側 5% 点の棄却域（\\(Z < -1.96\\) または \\(Z > 1.96\\)）に含まれます。したがって、帰無仮説 \\(H_0\\) は有意水準 5% で棄却されます。<br><br>
      よって、正しい組み合わせは 1 です。
    `
  }
]  