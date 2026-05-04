const allQuestions = [
  {
    id: 1,
    category: "仮説検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      仮説検定に関する次のア〜ウの言葉が表す語句の組み合わせとして正しいものを、下の表の1〜4から選べ。<br>
      <br>
      ア. 帰無仮説が正しいにも関わらず、帰無仮説を棄却すること。<br>
      イ. 帰無仮説が正しくないときに、正しく帰無仮説を棄却できる確率。<br>
      ウ. 帰無仮説が正しいと仮定した下で、実際に観測されたデータが得られる確率。<br>
      <br>
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
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>第一種の過誤</td>
            <td class='border border-slate-300 p-1'>有意水準</td>
            <td class='border border-slate-300 p-1'>t値</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>第一種の過誤</td>
            <td class='border border-slate-300 p-1'>検出力</td>
            <td class='border border-slate-300 p-1'>P値</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>第二種の過誤</td>
            <td class='border border-slate-300 p-1'>検出力</td>
            <td class='border border-slate-300 p-1'>t値</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>第二種の過誤</td>
            <td class='border border-slate-300 p-1'>有意水準</td>
            <td class='border border-slate-300 p-1'>P値</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "2",
    explanation: `
      正解は 2 です。<br>
      <br>
      <b>ア：第一種の過誤</b><br>
      実際には帰無仮説が真であるのに、誤ってこれを棄却してしまう「あわてんぼうの誤り」です。<br>
      <br>
      <b>イ：検出力</b><br>
      帰無仮説が偽である（対立仮説が真である）ときに、正しく帰無仮説を棄却できる確率です。第二種の過誤確率\\(\\beta\\)を用いて\\(1 - \\beta\\) と表記されます。<br>
      <br>
      <b>ウ：P値</b><br>
      帰無仮説が正しいと仮定したとき、手元のデータ以上に極端な結果が得られる確率です。この値が小さいほど、その結果は「偶然とは言い難い」と判断されます。
    `
  },
  {
    id: 2,
    category: "仮説検定",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      \\(X_1, \\dots, X_{100}\\) は正規分布 \\(N(\\mu, 25)\\) に従う確率変数とする。<br>
      このとき、標本平均は
      \\begin{equation}
      \\bar{X} = \\displaystyle\\frac{1}{100}\\sum_{i=1}^{100} X_i = 1
      \\end{equation}
      であった。ここで、<br>
      \\[
      H_0 : \\mu = 0 \\quad \\text{vs} \\quad H_1 : \\mu \\neq 0
      \\]
      の仮説検定を行う。なお有意水準は 5% とする。このとき、<br>
      \\begin{equation}
      Z = \\displaystyle\\frac{\\bar{X}-0}{\\sqrt{\\frac{25}{100}}}
      \\end{equation}
      は\\(\\boxed{\\text{(ア)}}\\)に従い、p値と有意水準の大小を比較することで、帰無仮説 \\(H_0\\) は\\(\\boxed{\\text{(イ)}}\\)される。<br>
      <br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>ア</th>
            <th class='border border-slate-300 p-1'>イ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 1)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 1)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 25)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 25)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "1",
    explanation: `
      正解は 1 です。<br>
      <br>
      <b>1. 統計量 Z の分布</b><br>
      標本平均 \\(\\bar{X}\\) は \\(N(\\mu, \\sigma^2/n)\\) に従います。ここでは \\(\\mu=0, \\sigma^2=25, n=100\\) なので、<br>
      \\(\\bar{X} \\sim N(0, 25/100)\\) です。<br>
      これを標準化した \\(Z = \\frac{\\bar{X}-0}{\\sqrt{25/100}}\\) は、標準正規分布 <b>\\(N(0, 1)\\)</b> に従います。<br>
      <br>
      <b>2. 検定の結果</b><br>
      実際に Z の値を計算すると：<br>
      \\(Z = \\frac{1-0}{5/10} = \\frac{1}{0.5} = 2\\)<br>
      有意水準 5% の両側検定における棄却限界値は 1.96 です。<br>
      \\(|Z| = 2 > 1.96\\) であるため、p値は 0.05 より小さくなり、帰無仮説は <b>棄却</b> されます。
    `
  },
  {
    id: 3,
    category: "仮説検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      \\(X_1, \\dots, X_9\\) は \\(N(0, \\sigma^2)\\) に従うとする。このとき、
      \\begin{equation}
      S^2 = \\displaystyle\\frac{1}{9}\\sum_{i=1}^{9} (X_i - \\bar{X})^2 = 6
      \\end{equation}
      であった。ここで、
      \\[
      H_0 : \\sigma^2 = 4 \\quad \\text{vs} \\quad H_1 : \\sigma^2 > 4
      \\]
      の片側検定を行う。ただし、有意水準は 5% とする。このとき、\\(H_0\\) の下で
      \\begin{equation}
      \\chi^2 = \\boxed{\\text{(ア)}}
      \\end{equation}
      は\\(\\boxed{\\text{(イ)}}\\)に従い、p値と有意水準を比べることによって、帰無仮説は\\(\\boxed{\\text{(ウ)}}\\)される。<br>
      <br>
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
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{9S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(9)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{8S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(8)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{9S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(9)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{8S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(8)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "4",
    explanation: `
      正解は 4 です。<br>
      <br>
      <b>1. 検定統計量と分布（ア・イ）</b><br>
      標本分散 \\(S^2\\) と母分散 \\(\\sigma^2\\) の関係について、統計量 \\(\\frac{nS^2}{\\sigma^2}\\) は自由度 \\(n-1\\) のカイ二乗分布に従います。本問では \\(n=9\\) であるため、<br>
      \\[ \\chi^2 = \\frac{9S^2}{\\sigma^2} \\sim \\chi^2(8) \\]<br>
      に従います。<br>
      <br>
      <b>2. 検定の結果（ウ）</b><br>
      \\(H_0: \\sigma^2=4\\) の下で具体的な値を計算すると：<br>
      \\[ \\chi^2 = \\frac{9 \\times 6}{4} = \\frac{54}{4} = 13.5 \\]<br>
      自由度 8 のカイ二乗分布における上側 5% 点の値は統計数値表より 15.507 です。<br>
      \\(13.5 < 15.507\\) であるため、検定統計量は棄却域に入りません。したがって、p値は 0.05 より大きく、帰無仮説は採択されます。
    `
  },
  {
    id: 4,
    category: "仮説検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある飲料の表示内容量は 200mL である。この表示の正当性を確かめるため、統計的仮説検定を行う。<br>
      記述統計表は以下の通りであった。
      <table class='w-full border-collapse border border-slate-300 text-center text-sm my-2'>
        <tr class='bg-slate-100'>
          <th class='border border-slate-300 p-1'></th>
          <th class='border border-slate-300 p-1'>サンプル数</th>
          <th class='border border-slate-300 p-1'>平均値</th>
          <th class='border border-slate-300 p-1'>不偏分散</th>
        </tr>
        <tr>
          <td class='border border-slate-300 p-1 bg-slate-50'>内容量</td>
          <td class='border border-slate-300 p-1'>25</td>
          <td class='border border-slate-300 p-1'>199.2</td>
          <td class='border border-slate-300 p-1'>1.96</td>
        </tr>
      </table>
      この飲料の内容量は平均 \\(\\mu\\), 分散 \\(\\sigma^2\\) の正規分布に従うとする。このとき、仮説は
      \\[
      H_0 : \\mu = 200 \\quad \\text{vs} \\quad H_1 : \\mu \\neq 200
      \\]
      である。ここで、標本平均 \\(\\bar{X}\\), 標本不偏分散 \\(s^2\\), サンプル数 \\(n\\) を用いて、
      \\begin{equation}
      t = \\boxed{\\text{(ア)}}
      \\end{equation}
      は帰無仮説\\(H_0\\)の下で\\(\\boxed{\\text{(イ)}}\\)に従う。ゆえに、\\(t\\)値はおよそ\\(\\boxed{\\text{(ウ)}}\\)と計算でき、分布表を見ることにより帰無仮説 \\(H_0\\) は棄却される。
      <br><br>
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
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{\\sqrt{s^2/n}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n-1)\\)</td>
            <td class='border border-slate-300 p-1'>-2.85</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{\\sqrt{s^2/n}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n)\\)</td>
            <td class='border border-slate-300 p-1'>-2.85</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{s^2/\\sqrt{n-1}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n)\\)</td>
            <td class='border border-slate-300 p-1'>-2.91</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{s^2/\\sqrt{n-1}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n-1)\\)</td>
            <td class='border border-slate-300 p-1'>-2.91</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "1",
    explanation: `
      正解は 1 です。<br>
      <br>
      <b>1. 統計量の形と分布（ア・イ）</b><br>
      母分散が未知で、不偏分散 \\(s^2\\) を用いる場合、検定統計量は以下の形になります。
      \\[ t = \\frac{\\bar{X} - \\mu}{\\sqrt{s^2 / n}} \\]
      この統計量は、自由度 \\(n-1\\) の \\(t\\) 分布に従います。サンプル数が 25 なので、自由度は 24 です。<br>
      <br>
      <b>2. 計算値の確認（ウ）</b><br>
      与えられた数値を代入します：<br>
      ・\\(\\bar{X} - \\mu = 199.2 - 200 = -0.8\\)<br>
      ・\\(\\sqrt{s^2 / n} = \\sqrt{1.96 / 25} = \\frac{1.4}{5} = 0.28\\)<br>
      よって、\\(t = -0.8 / 0.28 \\approx -2.857\\) となり、選択肢の「-2.85」と一致します。<br>
      <br>
      <b>3. 判定</b><br>
      自由度 24 の \\(t\\) 分布において、両側 5% の棄却限界値は約 2.064 です。計算された \\(|-2.857|\\) はこれより大きいため、帰無仮説は棄却されます。
    `
  }
];