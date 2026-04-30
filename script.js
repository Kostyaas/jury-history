const cases = [
  {
    id: "zasulich",
    title: "Дело Веры Засулич",
    year: "1878",
    place: "Санкт-Петербург",
    tag: "Политический процесс",
    cardText:
      "Засулич стреляла в градоначальника Федора Трепова после истории с жестоким наказанием политического заключенного Боголюбова. Присяжные ее оправдали.",
    summary:
      "Вера Засулич обвинялась в покушении на градоначальника Федора Трепова. Формально факт выстрела был очевиден, но суд столкнулся с вопросом: можно ли оценивать поступок вне общественного контекста?",
    brief: {
      story:
        "Вера Засулич пришла на прием к петербургскому градоначальнику Федору Трепову и выстрелила в него. Поводом стала история с политическим заключенным Боголюбовым, которого наказали розгами после конфликта с Треповым. На суде почти никто не спорил, что выстрел был, но спорили о том, как оценивать поступок: как обычное преступление или как протест против произвола власти.",
      people:
        "Подсудимая - Вера Засулич. Потерпевший - Федор Трепов, петербургский градоначальник. Важная фигура в предыстории - политический заключенный Боголюбов.",
      context:
        "1870-е годы были временем роста революционного движения и недоверия части общества к администрации. Открытый суд присяжных стал площадкой, где конфликт человека и власти увидела вся страна.",
      coreQuestion:
        "Должен ли присяжный смотреть только на сам факт выстрела или обязан учитывать мотив, общественное возмущение и действия власти?"
    },
    prosecution: [
      "Подсудимая сознательно пришла с оружием и совершила выстрел.",
      "Покушение на представителя власти угрожало государственному порядку.",
      "Личные убеждения не отменяют уголовной ответственности."
    ],
    defense: [
      "Поступок был реакцией на произвол власти и унижение человеческого достоинства.",
      "Присяжные должны учитывать моральную сторону дела, а не только формальный факт выстрела.",
      "Общественное сочувствие объяснялось недоверием к действиям администрации."
    ],
    questions: [
      "Следует ли судить только сам факт преступления, если мотив связан с протестом против несправедливости?",
      "Может ли общественное возмущение влиять на решение присяжных?",
      "Где проходит граница между сочувствием и оправданием насилия?"
    ],
    historicalVerdict: "Оправдательный вердикт",
    resultText:
      "Присяжные оправдали Веру Засулич. Этот процесс стал одним из самых известных в истории России и показал, что общественное мнение способно вступать в конфликт с позицией власти.",
    impact:
      "Дело стало символом того, что суд присяжных может выражать моральную оценку общества, а не только сухую юридическую логику.",
    correctVerdict: "not-guilty"
  },
  {
    id: "beilis",
    title: "Дело Менахема Бейлиса",
    year: "1913",
    place: "Киев",
    tag: "Дело о предвзятости",
    cardText:
      "Бейлиса обвиняли в ритуальном убийстве. Несмотря на политическое давление и антисемитскую кампанию, присяжные признали его невиновным.",
    summary:
      "Менахем Бейлис оказался в центре громкого процесса, где обвинение строилось на предрассудках и давлении общественной кампании. Суд стал проверкой способности присяжных сопротивляться предвзятости.",
    brief: {
      story:
        "Менахема Бейлиса обвинили в убийстве мальчика Андрея Ющинского. Дело быстро стало не только уголовным, но и политическим: вокруг него развернулась антисемитская кампания, а версия обвинения опиралась на идею ритуального убийства. Для присяжных главным стало отделить доказательства от слухов, давления прессы и предрассудков.",
      people:
        "Подсудимый - Менахем Бейлис, работник кирпичного завода. Потерпевший - Андрей Ющинский. Вокруг дела действовали следствие, пресса, политики и общественные группы.",
      context:
        "Начало XX века в Российской империи сопровождалось политическим напряжением и ростом национальных конфликтов. Поэтому процесс стал символом борьбы суда с предвзятостью.",
      coreQuestion:
        "Можно ли признать человека виновным, если обвинение держится не на надежных доказательствах, а на страхах и предрассудках общества?"
    },
    prosecution: [
      "Обвинение пыталось связать подсудимого с убийством через косвенные версии.",
      "Власть и часть прессы подталкивали публику к обвинительному выводу.",
      "Процесс подавался как дело особой общественной важности."
    ],
    defense: [
      "Надежных доказательств вины не было.",
      "Дело сопровождалось явной антисемитской кампанией и политическим давлением.",
      "Присяжные должны были отделить факты от общественных страхов и мифов."
    ],
    questions: [
      "Можно ли считать обвинение убедительным, если оно питается общественными предрассудками?",
      "Как присяжным защититься от давления прессы и политики?",
      "Должно ли отсутствие прямых доказательств вести к оправданию?"
    ],
    historicalVerdict: "Оправдательный вердикт",
    resultText:
      "Присяжные оправдали Менахема Бейлиса. Этот вердикт стал важным примером того, как институт присяжных может противостоять политизированному обвинению.",
    impact:
      "Процесс вошел в историю как пример борьбы суда с предвзятостью и давлениями, выходящими за рамки права.",
    correctVerdict: "not-guilty"
  },
  {
    id: "ulyanov",
    title: "Дело о покушении на Александра III",
    year: "1887",
    place: "Санкт-Петербург",
    tag: "Государственное дело",
    cardText:
      "После подготовки покушения на императора по делу Александра Ульянова вопрос о политическом насилии и безопасности государства встал особенно остро.",
    summary:
      "Дело участников заговора против Александра III показывает, как в России обсуждались пределы политического сопротивления и жесткость государственной реакции на революционное насилие.",
    brief: {
      story:
        "Группа молодых революционеров готовила покушение на императора Александра III. Заговор был раскрыт до исполнения, но сама подготовка убийства главы государства рассматривалась как тяжкое преступление. Дело поставило вопрос о границе между политическим протестом и террором.",
      people:
        "Среди обвиняемых был Александр Ульянов. Потенциальной целью покушения был Александр III. На стороне государства выступали следствие и суд, защищавшие безопасность империи.",
      context:
        "После убийства Александра II власть особенно жестко относилась к революционному насилию. Государство видело в таких делах угрозу самому существованию политического порядка.",
      coreQuestion:
        "Может ли политическая цель хоть как-то смягчить подготовку убийства, или для присяжных важнее сам факт заговора?"
    },
    prosecution: [
      "Заговор был направлен против главы государства и угрожал безопасности империи.",
      "Подготовка покушения сама по себе представляла тяжкое преступление.",
      "Политическая цель не смягчает ответственность за насилие."
    ],
    defense: [
      "За действиями стоял политический протест против устройства государства.",
      "Подсудимые считали себя борцами с несправедливой системой.",
      "Судебный процесс поднимал вопрос о причинах радикализации молодежи."
    ],
    questions: [
      "Может ли политическая идея оправдать подготовку убийства?",
      "Должен ли суд учитывать причины, толкнувшие людей к заговору?",
      "Где заканчивается протест и начинается террор?"
    ],
    historicalVerdict: "Обвинительный итог",
    resultText:
      "По делу участников заговора, включая Александра Ульянова, государство выбрало жесткий курс. История этого процесса часто рассматривается как свидетельство того, насколько опасным считалось политическое насилие.",
    impact:
      "Это дело важно для понимания радикализации конца XIX века и конфликта между государством и революционным движением.",
    correctVerdict: "guilty"
  },
  {
    id: "kronenberg",
    title: "Дело Кроненберга",
    year: "1876",
    place: "Санкт-Петербург",
    tag: "Семейное насилие",
    cardText:
      "Станислава Кроненберга обвиняли в жестоком обращении с маленькой дочерью. Несмотря на общественный скандал, присяжные его оправдали.",
    summary:
      "Процесс над Станиславом Кроненбергом стал одним из самых обсуждаемых в Петербурге. Он поднимал болезненный вопрос: где заканчивается родительская власть и начинается уголовно наказуемое насилие?",
    brief: {
      story:
        "Станислава Кроненберга обвиняли в жестоком наказании маленькой дочери. Дело вызвало сильный общественный отклик, потому что речь шла не о политике, а о семейной власти и правах ребенка. В суде спорили, является ли жестокое обращение преступлением или его можно прикрыть словами о воспитании.",
      people:
        "Подсудимый - Станислав Кроненберг. Потерпевшая - его дочь. Важную роль играли адвокаты и публика, обсуждавшая границы родительской власти.",
      context:
        "В XIX веке представления о семье, воспитании и правах ребенка сильно отличались от современных. Поэтому оправдание стало примером того, как суд отражал нормы своего времени.",
      coreQuestion:
        "Должен ли присяжный защищать ребенка от домашнего насилия, даже если общество привыкло считать семью закрытой территорией?"
    },
    prosecution: [
      "Подсудимого обвиняли в систематическом жестоком обращении с дочерью.",
      "Обвинение настаивало, что наказание ребенка превратилось в издевательство.",
      "Суд должен был защитить ребенка, даже если насилие происходило внутри семьи."
    ],
    defense: [
      "Защита строилась вокруг идеи отцовской власти и права воспитывать ребенка.",
      "Адвокат пытался представить происходящее как строгое, но якобы допустимое наказание.",
      "Присяжных подталкивали к мысли, что семейную сферу нельзя оценивать слишком жестко."
    ],
    questions: [
      "Должно ли общество вмешиваться в семейные отношения, если речь идет о насилии над ребенком?",
      "Можно ли оправдать жестокость ссылкой на воспитание и родительское право?",
      "Что важнее для присяжного: традиции эпохи или защита слабого?"
    ],
    historicalVerdict: "Оправдательный вердикт",
    resultText:
      "Присяжные оправдали Кроненберга. Именно поэтому это дело стало символом того, как общественные представления XIX века могли смягчать оценку домашнего насилия.",
    impact:
      "Процесс показывает, что суд присяжных отражал не только закон, но и предрассудки своего времени.",
    correctVerdict: "not-guilty"
  },
  {
    id: "multan",
    title: "Мултанское дело",
    year: "1894-1896",
    place: "Вятская губерния",
    tag: "Дело о предрассудках",
    cardText:
      "Крестьян-удмуртов обвиняли в ритуальном убийстве. После нескольких разбирательств дело стало символом борьбы с обвинением, построенным на этнических предубеждениях.",
    summary:
      "Мултанское дело связано с обвинением группы удмуртских крестьян в ритуальном жертвоприношении. Оно вызвало большой общественный спор о том, как следствие и суд могут попадать под влияние стереотипов.",
    brief: {
      story:
        "Группу удмуртских крестьян из села Старый Мултан обвинили в ритуальном убийстве. Версия обвинения строилась вокруг представлений о чужих и непонятных обычаях. Дело проходило через несколько разбирательств и стало известным примером того, как предрассудки могут влиять на следствие и суд.",
      people:
        "Подсудимые - крестьяне-удмурты. В деле участвовали следователи, эксперты, адвокаты и общественные деятели, которые критиковали версию о ритуальном убийстве.",
      context:
        "Российская империя была многонациональной страной, но отношение к малым народам часто было предвзятым. Поэтому процесс стал спором о фактах, культуре и справедливости.",
      coreQuestion:
        "Может ли суд доверять версии обвинения, если она основана на страхе перед чужой культурой и слабых доказательствах?"
    },
    prosecution: [
      "Следствие утверждало, что убийство было совершено как ритуальное жертвоприношение.",
      "Обвинение строилось на версии о религиозных обычаях и косвенных показаниях.",
      "Подсудимых пытались представить носителями опасной и чуждой традиции."
    ],
    defense: [
      "Защита подчеркивала слабость доказательств и натянутость версии о ритуальном убийстве.",
      "Общественные деятели и юристы говорили о предвзятости следствия к национальному меньшинству.",
      "Сомнения в фактах делали обвинительный вердикт ненадежным."
    ],
    questions: [
      "Можно ли выносить обвинительный вердикт, если дело опирается на культурные стереотипы?",
      "Должны ли присяжные особенно осторожно относиться к косвенным доказательствам?",
      "Как отличить реальные факты от страха перед чужой культурой?"
    ],
    historicalVerdict: "Оправдательный итог после новых разбирательств",
    resultText:
      "Хотя первые разбирательства привели к тяжелым решениям, в итоге обвиняемые были оправданы. Мултанское дело вошло в историю как пример того, как общественная критика может разрушить несправедливую обвинительную схему.",
    impact:
      "Это дело важно как предупреждение о том, насколько опасны этнические и религиозные предрассудки в суде.",
    correctVerdict: "not-guilty"
  },
  {
    id: "mitrofania",
    title: "Дело игуменьи Митрофании",
    year: "1874",
    place: "Москва",
    tag: "Финансовое преступление",
    cardText:
      "Игуменью Митрофанию обвиняли в подлогах, мошенничестве и финансовых махинациях. Громкое дело показало, что известность и высокий статус не гарантируют оправдания.",
    summary:
      "Игуменья Митрофания предстала перед судом по обвинению в подделке документов и финансовых злоупотреблениях. Процесс вызвал особый интерес, потому что затрагивал тему доверия к церковному авторитету.",
    brief: {
      story:
        "Игуменью Митрофанию обвиняли в подделке документов, мошенничестве и финансовых злоупотреблениях. Скандальность дела была в том, что перед судом оказалась религиозная и общественно известная фигура. Присяжные должны были решить, можно ли отделить уважение к статусу человека от доказательств преступления.",
      people:
        "Подсудимая - игуменья Митрофания. В деле фигурировали потерпевшие, финансовые документы, адвокаты и представители общества, внимательно следившие за процессом.",
      context:
        "Для пореформенной России было важно показать, что новый суд способен рассматривать дела публично и применять закон даже к людям с высоким положением.",
      coreQuestion:
        "Должны ли имя, религиозный статус и общественная репутация влиять на вердикт, если документы указывают на преступление?"
    },
    prosecution: [
      "Обвинение утверждало, что подлоги и махинации были сознательными и систематическими.",
      "Высокое положение подсудимой не отменяло факта возможного мошенничества.",
      "Суд должен был показать, что закон одинаков для всех."
    ],
    defense: [
      "Защита могла ссылаться на отсутствие корыстного умысла или на сложность финансовых обстоятельств.",
      "Сторонники подсудимой рассчитывали на уважение к ее общественному положению.",
      "Перед присяжными стоял вопрос, является ли это преступным расчетом или трагическим злоупотреблением доверием."
    ],
    questions: [
      "Должен ли высокий общественный или религиозный статус влиять на решение присяжных?",
      "Можно ли смягчить оценку подлога, если обвиняемый прикрывается благими целями?",
      "Что важнее: репутация человека или доказанность финансового преступления?"
    ],
    historicalVerdict: "Обвинительный вердикт",
    resultText:
      "Присяжные признали игуменью Митрофанию виновной по ключевым пунктам обвинения. Процесс стал важным примером того, что громкое имя и религиозный статус не ставят человека выше закона.",
    impact:
      "Это дело усилило представление о суде присяжных как о пространстве, где публичная репутация сталкивается с необходимостью юридической оценки фактов.",
    correctVerdict: "guilty"
  }
];

const caseGrid = document.getElementById("case-grid");
const jurySelector = document.getElementById("jury-selector");
const juryMeta = document.getElementById("jury-meta");
const juryTitle = document.getElementById("jury-title");
const jurySummary = document.getElementById("jury-summary");
const briefTitle = document.getElementById("brief-title");
const briefStory = document.getElementById("brief-story");
const briefPeople = document.getElementById("brief-people");
const briefContext = document.getElementById("brief-context");
const briefCoreQuestion = document.getElementById("brief-core-question");
const prosecutionList = document.getElementById("prosecution-list");
const defenseList = document.getElementById("defense-list");
const questionList = document.getElementById("question-list");
const fileKicker = document.getElementById("file-kicker");
const fileList = document.getElementById("file-list");
const resultCard = document.getElementById("result-card");
const resultTitle = document.getElementById("result-title");
const resultProfile = document.getElementById("result-profile");
const juryVoteBoard = document.getElementById("jury-vote-board");
const resultText = document.getElementById("result-text");
const resultImpact = document.getElementById("result-impact");
const legalQuestions = document.getElementById("legal-questions");
const verdictPreview = document.getElementById("verdict-preview");
const submitVerdict = document.getElementById("submit-verdict");
const stageButtons = Array.from(document.querySelectorAll(".progress-step"));
const stagePanels = Array.from(document.querySelectorAll(".jury-stage"));
const fileTabs = Array.from(document.querySelectorAll(".file-tab"));
const factorButtons = Array.from(document.querySelectorAll(".factor-button"));
const confidenceSlider = document.getElementById("confidence-slider");
const confidenceLabel = document.getElementById("confidence-label");
const quizProgress = document.getElementById("quiz-progress");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizResult = document.getElementById("quiz-result");
const quizResultTitle = document.getElementById("quiz-result-title");
const quizResultText = document.getElementById("quiz-result-text");
const quizReset = document.getElementById("quiz-reset");

let activeCaseId = cases[0].id;
let activeStage = "case";
let activeTab = "prosecution";
let activeFactor = "facts";
let confidenceValue = Number(confidenceSlider.value);
let legalAnswers = {
  event: null,
  person: null,
  guilt: null
};
let quizIndex = 0;
let quizScores = {
  strict: 0,
  doubt: 0,
  humanist: 0,
  public: 0
};

const tabLabels = {
  prosecution: "Материалы обвинения",
  defense: "Материалы защиты",
  questions: "Вопросы для обсуждения присяжных"
};

const factorProfiles = {
  facts: "Ты голосовал как присяжный, который прежде всего ищет доказательства и проверяет логику обвинения.",
  motive: "Ты голосовал как присяжный, который старается понять мотивы человека и обстоятельства эпохи.",
  doubt: "Ты голосовал как присяжный, для которого главный принцип - нельзя обвинять, если остаются серьезные сомнения.",
  society: "Ты голосовал как присяжный, который видит за делом большой общественный конфликт и настроение времени."
};

const legalQuestionItems = [
  {
    id: "event",
    title: "Доказано ли, что событие преступления было?",
    hint: "Например: было ли покушение, подлог, насилие или другое событие, о котором говорит обвинение."
  },
  {
    id: "person",
    title: "Доказано ли, что это сделал подсудимый?",
    hint: "Присяжный отделяет сам факт события от доказанности участия конкретного человека."
  },
  {
    id: "guilt",
    title: "Доказана ли вина без разумных сомнений?",
    hint: "Если остаются серьезные сомнения, решение должно идти в пользу подсудимого."
  }
];

const quizQuestions = [
  {
    question: "Что для тебя важнее всего в судебном деле?",
    answers: [
      { text: "Четкая логика закона и доказательства", type: "strict" },
      { text: "Есть ли сомнения в версии обвинения", type: "doubt" },
      { text: "Почему человек так поступил", type: "humanist" },
      { text: "Как дело связано с эпохой и обществом", type: "public" }
    ]
  },
  {
    question: "Если доказательства есть, но мотив вызывает сочувствие, ты скорее...",
    answers: [
      { text: "Все равно поставлю закон на первое место", type: "strict" },
      { text: "Буду искать слабые места в обвинении", type: "doubt" },
      { text: "Учту обстоятельства и человеческую сторону", type: "humanist" },
      { text: "Подумаю, почему общество довело до такого конфликта", type: "public" }
    ]
  },
  {
    question: "Газеты и публика активно обсуждают процесс. Твоя реакция?",
    answers: [
      { text: "Не обращать внимания, важны материалы суда", type: "strict" },
      { text: "Проверить, не давит ли пресса на присяжных", type: "doubt" },
      { text: "Понять эмоции людей, но не поддаться им полностью", type: "humanist" },
      { text: "Учесть, что громкое дело показывает настроение времени", type: "public" }
    ]
  },
  {
    question: "Какой вердикт для тебя самый опасный?",
    answers: [
      { text: "Оправдать виновного", type: "strict" },
      { text: "Осудить невиновного", type: "doubt" },
      { text: "Не увидеть живого человека за статьей закона", type: "humanist" },
      { text: "Не заметить политический или общественный смысл дела", type: "public" }
    ]
  },
  {
    question: "Какая фраза тебе ближе?",
    answers: [
      { text: "Справедливость держится на правилах", type: "strict" },
      { text: "Сомнение должно работать в пользу подсудимого", type: "doubt" },
      { text: "Мотивы и обстоятельства нельзя выбрасывать из суда", type: "humanist" },
      { text: "Суд показывает, каким является общество", type: "public" }
    ]
  }
];

const quizTypes = {
  strict: {
    title: "Строгий законник",
    text: "Ты стремишься отделять эмоции от фактов. Для тебя суд присяжных важен потому, что граждане должны защищать порядок и проверять доказательства спокойно и строго."
  },
  doubt: {
    title: "Присяжный сомнения",
    text: "Ты осторожен с обвинением и не любишь поспешных выводов. Твой главный принцип: если остаются серьезные сомнения, обвинительный вердикт опасен."
  },
  humanist: {
    title: "Гуманист",
    text: "Ты смотришь не только на поступок, но и на человека, мотивы и обстоятельства. В истории суда присяжных именно такой взгляд часто объяснял неожиданные оправдания."
  },
  public: {
    title: "Историк общества",
    text: "Ты видишь в суде зеркало эпохи. Для тебя громкое дело важно не только как преступление, но и как спор общества с властью, предрассудками и моралью времени."
  }
};

function renderCaseCards() {
  caseGrid.innerHTML = cases
    .map(
      (item) => `
        <article class="case-card">
          <div class="case-meta">
            <span>${item.year}</span>
            <span>${item.place}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.cardText}</p>
        </article>
      `
    )
    .join("");
}

function renderSelector() {
  jurySelector.innerHTML = cases
    .map(
      (item) => `
        <button class="jury-option ${item.id === activeCaseId ? "active" : ""}" data-case-id="${item.id}">
          <strong>${item.title}</strong>
          <span>${item.year} • ${item.tag}</span>
        </button>
      `
    )
    .join("");

  Array.from(document.querySelectorAll(".jury-option")).forEach((button) => {
    button.addEventListener("click", () => {
      activeCaseId = button.dataset.caseId;
      activeStage = "case";
      activeTab = "prosecution";
      activeFactor = "facts";
      confidenceValue = 60;
      confidenceSlider.value = confidenceValue;
      legalAnswers = {
        event: null,
        person: null,
        guilt: null
      };
      renderSelector();
      renderActiveCase();
    });
  });
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function getActiveCase() {
  return cases.find((item) => item.id === activeCaseId);
}

function updateConfidenceLabel() {
  const mood =
    confidenceValue < 35
      ? "Сильные сомнения"
      : confidenceValue < 70
        ? "Средняя уверенность"
        : "Высокая уверенность";

  confidenceLabel.textContent = `${mood}: ${confidenceValue}%`;
}

function renderFileTab() {
  const currentCase = getActiveCase();
  const itemsByTab = {
    prosecution: currentCase.prosecution,
    defense: currentCase.defense,
    questions: currentCase.questions
  };

  fileTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === activeTab);
  });

  fileKicker.textContent = tabLabels[activeTab];
  renderList(fileList, itemsByTab[activeTab]);
}

function renderFactors() {
  factorButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.factor === activeFactor);
  });
}

function renderBrief() {
  const currentCase = getActiveCase();

  briefTitle.textContent = currentCase.title;
  briefStory.textContent = currentCase.brief.story;
  briefPeople.textContent = currentCase.brief.people;
  briefContext.textContent = currentCase.brief.context;
  briefCoreQuestion.textContent = currentCase.brief.coreQuestion;
}

function renderStage() {
  stageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.stage === activeStage);
  });

  stagePanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.stagePanel === activeStage);
  });
}

function getLegalVerdict() {
  const answers = Object.values(legalAnswers);

  if (answers.some((answer) => answer === null)) {
    return "pending";
  }

  return answers.every(Boolean) ? "guilty" : "not-guilty";
}

function renderLegalQuestions() {
  legalQuestions.innerHTML = legalQuestionItems
    .map(
      (item) => `
        <div class="legal-question">
          <div>
            <strong>${item.title}</strong>
            <span>${item.hint}</span>
          </div>
          <div class="legal-choice-group" aria-label="${item.title}">
            <button class="legal-choice ${legalAnswers[item.id] === true ? "active" : ""}" data-question="${item.id}" data-answer="yes" type="button">Да</button>
            <button class="legal-choice ${legalAnswers[item.id] === false ? "active" : ""}" data-question="${item.id}" data-answer="no" type="button">Нет</button>
          </div>
        </div>
      `
    )
    .join("");

  Array.from(document.querySelectorAll(".legal-choice")).forEach((button) => {
    button.addEventListener("click", () => {
      legalAnswers[button.dataset.question] = button.dataset.answer === "yes";
      renderLegalQuestions();
      updateVerdictPreview();
      resultCard.hidden = true;
    });
  });
}

function updateVerdictPreview() {
  const verdict = getLegalVerdict();

  if (verdict === "pending") {
    verdictPreview.textContent = "Ответь на все вопросы, чтобы увидеть возможный вердикт.";
    return;
  }

  verdictPreview.textContent =
    verdict === "guilty"
      ? "По твоему листу вопросов выходит обвинительный вердикт: виновен."
      : "По твоему листу вопросов выходит оправдательный вердикт: вина не доказана.";
}

function renderJuryVotes() {
  const seats = legalQuestionItems.map((item, index) => {
    const answer = legalAnswers[item.id];
    return {
      className: answer === null ? "vote-missing" : answer ? "vote-guilty" : "vote-not-guilty",
      label: answer === null ? "?" : answer ? "Д" : "Н",
      title: `${index + 1}. ${item.title}`
    };
  });

  juryVoteBoard.innerHTML = seats
    .map(
      (seat) => `
        <span class="jury-seat ${seat.className}" title="${seat.title}">
          ${seat.label}
        </span>
      `
    )
    .join("");
}

function getQuizWinner() {
  return Object.entries(quizScores).sort((first, second) => second[1] - first[1])[0][0];
}

function showQuizResult() {
  const winner = getQuizWinner();
  const result = quizTypes[winner];

  quizProgress.textContent = "Тест завершен";
  quizQuestion.textContent = "Твой стиль принятия решения";
  quizOptions.innerHTML = "";
  quizResultTitle.textContent = result.title;
  quizResultText.textContent = result.text;
  quizResult.hidden = false;
}

function renderQuizQuestion() {
  const currentQuestion = quizQuestions[quizIndex];

  quizProgress.textContent = `Вопрос ${quizIndex + 1} из ${quizQuestions.length}`;
  quizQuestion.textContent = currentQuestion.question;
  quizResult.hidden = true;
  quizOptions.innerHTML = currentQuestion.answers
    .map(
      (answer) => `
        <button class="quiz-option" data-type="${answer.type}" type="button">
          ${answer.text}
        </button>
      `
    )
    .join("");

  Array.from(document.querySelectorAll(".quiz-option")).forEach((button) => {
    button.addEventListener("click", () => {
      quizScores[button.dataset.type] += 1;
      quizIndex += 1;

      if (quizIndex >= quizQuestions.length) {
        showQuizResult();
        return;
      }

      renderQuizQuestion();
    });
  });
}

function resetQuiz() {
  quizIndex = 0;
  quizScores = {
    strict: 0,
    doubt: 0,
    humanist: 0,
    public: 0
  };
  renderQuizQuestion();
}

function renderActiveCase() {
  const currentCase = getActiveCase();

  juryMeta.textContent = `${currentCase.year} • ${currentCase.place} • ${currentCase.tag}`;
  juryTitle.textContent = currentCase.title;
  jurySummary.textContent = currentCase.summary;

  if (prosecutionList && defenseList && questionList) {
    renderList(prosecutionList, currentCase.prosecution);
    renderList(defenseList, currentCase.defense);
    renderList(questionList, currentCase.questions);
  }

  renderBrief();
  renderFileTab();
  renderFactors();
  renderStage();
  renderLegalQuestions();
  updateVerdictPreview();
  updateConfidenceLabel();
  resultCard.hidden = true;
}

function showResult() {
  const userVerdict = getLegalVerdict();

  if (userVerdict === "pending") {
    verdictPreview.textContent = "Сначала ответь на все вопросы листа присяжного.";
    return;
  }

  const currentCase = getActiveCase();
  const matched = userVerdict === currentCase.correctVerdict;
  const confidencePhrase =
    confidenceValue < 35
      ? "Ты вынес решение осторожно, с заметными сомнениями."
      : confidenceValue < 70
        ? "Ты вынес решение без полной уверенности, но с понятной позицией."
        : "Ты вынес решение уверенно и почти без колебаний.";
  const verdictPhrase =
    userVerdict === "guilty"
      ? "По твоим ответам вина доказана."
      : "По твоим ответам вина не доказана, поэтому вердикт оправдательный.";

  resultTitle.textContent = `${currentCase.historicalVerdict}${matched ? " — твой выбор совпал с историческим итогом" : " — твой выбор отличается от исторического итога"}`;
  resultProfile.textContent = `${verdictPhrase} ${factorProfiles[activeFactor]} ${confidencePhrase}`;
  renderJuryVotes();
  resultText.textContent = currentCase.resultText;
  resultImpact.textContent = currentCase.impact;
  resultCard.hidden = false;
}

fileTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    renderFileTab();
  });
});

stageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeStage = button.dataset.stage;
    renderStage();
  });
});

factorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFactor = button.dataset.factor;
    renderFactors();
  });
});

confidenceSlider.addEventListener("input", () => {
  confidenceValue = Number(confidenceSlider.value);
  updateConfidenceLabel();
});

submitVerdict.addEventListener("click", showResult);

quizReset.addEventListener("click", resetQuiz);

renderCaseCards();
renderSelector();
renderActiveCase();
renderQuizQuestion();
