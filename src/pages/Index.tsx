import Icon from '@/components/ui/icon';

const IMG_HERO = 'https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/6b78e395-3714-4ed5-be53-9db9f06a2aa4.jpg';
const IMG_GARAGE = 'https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/ac079f35-94b2-44fe-92af-69ef7d9c41ad.jpg';
const IMG_DRAWING = 'https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/47776086-c453-4bb6-96ce-3f3398af581c.jpg';

/* ─── константы ──────────────────────────────────────────── */
const NAVY = 'hsl(215,55%,18%)';
const ORANGE = 'hsl(20,90%,52%)';
const LIGHT_BG = 'hsl(210,20%,98%)';

const heroStats = [
  { value: '2 700', unit: 'кг',     label: 'Грузоподъёмность' },
  { value: '2 100', unit: 'мм',     label: 'Высота подъёма'   },
  { value: '60',    unit: 'сек',    label: 'Время подъёма'    },
  { value: '1',     unit: 'цил.',   label: 'Гидропривод'      },
];

const advantages = [
  { icon: 'Cylinder',    title: 'Один гидроцилиндр',      text: 'Вместо двух цилиндров — один: проще монтаж, выше скорость, ниже затраты на обслуживание.' },
  { icon: 'Zap',         title: 'Высокая скорость',        text: 'Быстрее подъём и опускание по сравнению с классической двухцилиндровой конструкцией TP-270.' },
  { icon: 'ShieldCheck', title: 'Максимальная безопасность', text: 'Механические запоры, защита от перегрузки, кнопки аварийной остановки.' },
  { icon: 'Ruler',       title: 'Экономия пространства',  text: 'Ширина 2,55 м. До трёх подъёмников в шаг колонн 7,5 м с общими опорами.' },
  { icon: 'Wrench',      title: 'Простой монтаж',          text: 'Предварительно собранные детали и встроенный блок управления.' },
  { icon: 'Snowflake',   title: 'Уличное исполнение',      text: 'Опция для работы при −30…+40 °C на придомовых территориях.' },
];

const features = [
  'Грузоподъёмность 2700 кг для двух больших внедорожников',
  'Единый гидроцилиндр — повышенная производительность',
  'Более высокая скорость подъёма, чем у двухцилиндровых аналогов',
  'Предварительно собранные детали — быстрый монтаж',
  'Совместные опоры — экономия стоимости и пространства',
  'Встроенный блок управления для удобства подключения',
  'Несколько фиксируемых высот парковки',
  'Контроллер с ключом-переключателем',
  'Противоскользящий пандус и платформа',
  'Антикоррозийное порошковое покрытие',
  'Усиленные оцинкованные пластины',
  'Простая разборка и перемещение конструкции',
];

const specs = [
  ['Вид привода',                    'Гидравлический (1 цилиндр)'],
  ['Грузоподъёмность, кг',           '≤ 2700'],
  ['Высота подъёма платформы, мм',   '2100'],
  ['Ширина платформы, мм',           '2100'],
  ['Габариты ДхШхВ, мм',            '4163 × 2550 × 3210'],
  ['Габариты с гидростанцией, мм',   '4163 × 2550 × 3445'],
  ['Платформа',                      'Прямая'],
  ['Время подъёма / опускания, сек', '60 / 45'],
  ['Электропитание',                 '3Ф, 380 В, 50 Гц'],
  ['Вес установки, кг',              '1050'],
  ['Потребляемая мощность, кВт',     '2,2'],
  ['Установка',                      'В помещении (+0…+45 °C)'],
  ['Управление',                     'Блок с ключом на выносной штанге'],
];

const options = [
  'Удлинитель задней части платформы — 834 мм',
  'Ширина платформы/подъёмника 2200/2655 мм или 2300/2755 мм',
  'Управление с брелока',
  'Кодовый замок / чип-карта',
  'Блок управления на бетонную колонну/стену',
  'Уличное исполнение (−30…+40 °C)',
  'Алюминиевый бак под гидравлическое масло',
  'Кожухи от пыли, влаги и снега',
  'Дополнительная антикоррозийная покраска ламелей',
  'Магнитные концевые выключатели',
  'Гидравлическое масло HVLP для перепадов температур',
];

/* ─── helpers ────────────────────────────────────────────── */
const SectionLabel = ({ children }: { children: string }) => (
  <p style={{ color: ORANGE }} className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-1">
    {children}
  </p>
);

const H2 = ({ children, white }: { children: string; white?: boolean }) => (
  <h2
    className="font-display text-2xl font-bold uppercase leading-tight"
    style={{ color: white ? 'hsl(210,40%,98%)' : NAVY }}
  >
    {children}
  </h2>
);

/* ─── страница 1: обложка ────────────────────────────────── */
const Page1 = () => (
  <div className="brochure-page flex flex-col" style={{ background: NAVY }}>

    {/* шапка */}
    <div className="flex items-center justify-between px-10 pt-10 pb-2 flex-shrink-0">
      <div className="flex items-center gap-3">
        <img
          src="https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/3534ad11-34df-45d6-921d-d25856d512f7.jpg"
          alt="ИТЦ Сибири"
          style={{ height: '56px', width: '56px', objectFit: 'cover', mixBlendMode: 'screen', borderRadius: '50%' }}
        />
        <div className="font-display text-2xl font-bold uppercase tracking-wide text-white">ИТЦ Сибири</div>
      </div>
    </div>

    {/* распорка сверху — картинка чуть выше центра */}
    <div style={{ flex: '0.6' }} />

    {/* картинка */}
    <div className="px-10 flex-shrink-0">
      <div className="overflow-hidden rounded-xl w-full" style={{ border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', height: '340px' }}>
        <img src={IMG_HERO} alt="TP-270H" className="w-full h-full object-cover object-center" style={{ display: 'block' }} />
      </div>
    </div>

    {/* текстовый блок — вплотную под картинкой */}
    <div className="px-10 pt-5 pb-4 flex-shrink-0">
      {/* бейдж */}
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-4 w-fit"
        style={{ borderColor: `${ORANGE}50`, background: `${ORANGE}18`, color: ORANGE }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: ORANGE }} />
        <span className="text-[9px] uppercase tracking-widest font-semibold">Коммерческое предложение</span>
      </div>

      <p className="mb-1 text-sm font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>Парковочные системы</p>
      <h1 className="font-display font-bold uppercase leading-none" style={{ color: 'white', fontSize: '58px' }}>
        Подъёмник<br />
        <span style={{ color: ORANGE }}>TP-270H</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '380px' }}>
        Одноцилиндровый двухстоечный гидравлический парковочный подъёмник. Два автомобиля — одно машиноместо.
      </p>
    </div>

    {/* распорка — прижимает полосу к самому низу */}
    <div style={{ flex: '1' }} />

    {/* полоса низа */}
    <div className="px-10 py-3 flex items-center gap-6 flex-shrink-0"
      style={{ background: 'rgba(255,255,255,0.05)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <span className="font-display text-sm font-bold" style={{ color: ORANGE }}>itc-siberia.ru</span>
      <div className="flex items-center gap-2">
        <Icon name="Phone" size={13} style={{ color: 'rgba(255,255,255,0.5)' }} />
        <span className="font-display text-sm font-semibold text-white">8-905-975-58-88</span>
      </div>
    </div>
  </div>
);

/* ─── страница 2: описание + галерея ─────────────────────── */
const Page2 = () => (
  <div className="brochure-page flex flex-col" style={{ background: LIGHT_BG }}>
    {/* верхний акцент */}
    <div className="h-1.5 w-full" style={{ background: ORANGE }} />

    <div className="flex-1 px-10 py-8 flex flex-col gap-7">
      {/* описание */}
      <div className="grid grid-cols-[1fr_1.4fr] gap-8 items-start">
        <div>
          <SectionLabel>О продукте</SectionLabel>
          <H2>Инженерное решение нового поколения</H2>
        </div>
        <div className="text-sm leading-relaxed" style={{ color: 'hsl(215,16%,42%)' }}>
          <p className="mb-3">
            <strong style={{ color: NAVY }}>TP-270H</strong> разработан на основе стандартного TP-270. Вместо двух цилиндров —{' '}
            <strong style={{ color: NAVY }}>один</strong>: упрощён монтаж, выше скорость парковки, ниже затраты на обслуживание.
          </p>
          <p className="mb-3">
            Грузоподъёмность <strong style={{ color: NAVY }}>2,7 тонны</strong>, высота подъёма до{' '}
            <strong style={{ color: NAVY }}>2,1 м</strong>. Высота помещения: от 3,5 м (седан), от 4,0 м (внедорожник).
          </p>
          <p>
            Поставку и монтаж выполняет <strong style={{ color: NAVY }}>ИТЦ Сибири</strong>.
          </p>
        </div>
      </div>

      {/* галерея */}
      <div>
        <SectionLabel>Наши установки</SectionLabel>
        <H2>Оборудование в эксплуатации</H2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="overflow-hidden rounded-xl" style={{ border: '1px solid hsl(214,32%,88%)' }}>
            <img src="https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/d5144d73-c0a4-4be8-95a7-7ef4d7c64215.jpg" alt="Подъёмники в паркинге" className="w-full object-cover" style={{ height: '190px' }} />
          </div>
          <div className="overflow-hidden rounded-xl" style={{ border: '1px solid hsl(214,32%,88%)' }}>
            <img src="https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/111b17da-538f-45c7-88bd-9ee1585faa46.jpg" alt="TP-270H в эксплуатации" className="w-full object-cover" style={{ height: '190px' }} />
          </div>
        </div>
      </div>

      {/* фичи */}
      <div>
        <SectionLabel>Особенности</SectionLabel>
        <H2>Что входит в конструкцию</H2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4">
          {features.map(f => (
            <div key={f} className="flex items-start gap-2 border-b pb-2" style={{ borderColor: 'hsl(214,32%,88%)' }}>
              <Icon name="CheckCircle2" size={14} className="mt-0.5 shrink-0" style={{ color: ORANGE }} />
              <span className="text-[13px] leading-snug" style={{ color: NAVY }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* футер страницы */}
    <div className="px-10 py-3 flex items-center justify-between"
      style={{ background: NAVY, borderTop: `3px solid ${ORANGE}` }}>
      <span className="font-display text-xs font-bold uppercase tracking-wide text-white">ИТЦ Сибири</span>
      <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>2 / 4</span>
    </div>
  </div>
);

/* ─── страница 3: преимущества + чертёж ─────────────────── */
const Page3 = () => (
  <div className="brochure-page flex flex-col" style={{ background: LIGHT_BG }}>
    <div className="h-1.5 w-full" style={{ background: ORANGE }} />

    <div className="flex-1 px-10 py-8 flex flex-col gap-7">
      {/* преимущества */}
      <div>
        <SectionLabel>Преимущества</SectionLabel>
        <H2>Почему выбирают TP-270H</H2>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {advantages.map(a => (
            <div key={a.title} className="rounded-xl p-4"
              style={{ border: '1px solid hsl(214,32%,88%)', background: 'white' }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg mb-3"
                style={{ background: NAVY }}>
                <Icon name={a.icon} size={18} className="text-white" />
              </div>
              <div className="font-display text-[12px] font-bold uppercase mb-1" style={{ color: NAVY }}>{a.title}</div>
              <p className="text-[11px] leading-relaxed" style={{ color: 'hsl(215,16%,42%)' }}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* чертёж */}
      <div className="flex-1">
        <SectionLabel>Чертёж</SectionLabel>
        <H2>Габаритные размеры</H2>
        <div className="rounded-xl overflow-hidden mt-4 flex items-center justify-center bg-white"
          style={{ border: '1px solid hsl(214,32%,88%)', padding: '12px' }}>
          <img src="https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/b01dd942-992f-4d4f-aeb2-8d989dc06dc7.jpg" alt="Чертёж TP-270H" className="w-full object-contain" style={{ maxHeight: '340px' }} />
        </div>
      </div>
    </div>

    <div className="px-10 py-3 flex items-center justify-between"
      style={{ background: NAVY, borderTop: `3px solid ${ORANGE}` }}>
      <span className="font-display text-xs font-bold uppercase tracking-wide text-white">ИТЦ Сибири</span>
      <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>3 / 4</span>
    </div>
  </div>
);

/* ─── страница 4: хар-ки + опции + контакты ─────────────── */
const Page4 = () => (
  <div className="brochure-page flex flex-col" style={{ background: NAVY }}>
    <div className="h-1.5 w-full" style={{ background: ORANGE }} />

    <div className="flex-1 px-10 py-8 grid grid-cols-2 gap-8">
      {/* левая колонка: характеристики + стоимость */}
      <div className="flex flex-col">
        <div>
          <SectionLabel>Спецификация</SectionLabel>
          <H2 white>Технические характеристики</H2>
          <div className="mt-4 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            {specs.map(([k, v], i) => (
              <div key={k}
                className="grid grid-cols-2 gap-2 px-3 py-2 text-[10px]"
                style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{k}</span>
                <span className="text-right font-semibold text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* распорка — прижимает блок стоимости к низу */}
        <div className="flex-1" />

        {/* стоимость — выровнена по низу с блоком контактов */}
        <div className="rounded-xl p-5 flex items-center gap-4" style={{ background: ORANGE }}>
          <div>
            <div className="text-[10px] uppercase tracking-widest font-semibold text-white opacity-80 mb-1">Стоимость</div>
            <div className="font-display text-3xl font-bold text-white leading-none">от 450 000 ₽</div>
            <div className="text-[11px] text-white opacity-75 mt-1">с учётом НДС</div>
          </div>
          <div className="ml-auto flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.2)' }}>
            <Icon name="Tag" size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* правая колонка: опции + контакты */}
      <div className="flex flex-col">
        <div className="flex-1">
          <SectionLabel>Опции</SectionLabel>
          <H2 white>Дополнительная комплектация</H2>
          <p className="text-[9px] mt-0.5 mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Стоимость уточняйте у специалистов</p>
          <div className="space-y-1.5">
            {options.map(o => (
              <div key={o} className="flex items-start gap-2 rounded-lg px-3 py-2"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
                <Icon name="Plus" size={12} className="mt-0.5 shrink-0" style={{ color: ORANGE }} />
                <span className="text-[10px] leading-tight text-white">{o}</span>
              </div>
            ))}
          </div>
        </div>

        {/* контакты — оранжевый стиль как у блока стоимости */}
        <div className="rounded-xl p-5 flex items-center gap-4 mt-5" style={{ background: ORANGE }}>
          <div className="flex-1">
            <div className="text-[10px] uppercase tracking-widest font-semibold text-white opacity-80 mb-3">Связаться с нами</div>
            <div className="space-y-2">
              {[
                { icon: 'Phone', label: 'Телефон', val: '8-905-975-58-88'   },
                { icon: 'Mail',  label: 'Email',   val: 'itc2555888@mail.ru' },
                { icon: 'Globe', label: 'Сайт',    val: 'itc-siberia.ru'     },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <Icon name={c.icon} size={13} className="text-white" />
                  </div>
                  <div className="font-display text-[12px] font-bold text-white">{c.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* подвал обложки */}
    <div className="px-10 py-4 flex items-center justify-between"
      style={{ background: 'rgba(0,0,0,0.25)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <span className="font-display text-sm font-bold uppercase tracking-wide text-white">ИТЦ Сибири</span>
      <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>4 / 4</span>
    </div>
  </div>
);

/* ─── главный компонент ──────────────────────────────────── */
const Index = () => {
  const handlePrint = () => window.print();

  return (
    <>
      {/* кнопка печати — только на экране */}
      <div className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: NAVY, borderBottom: `2px solid ${ORANGE}` }}>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded" style={{ background: ORANGE }}>
            <Icon name="ParkingSquare" size={18} className="text-white" />
          </div>
          <span className="font-display text-base font-bold uppercase tracking-wide text-white">ИТЦ Сибири</span>
          <span className="text-[10px] uppercase tracking-widest ml-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Брошюра · TP-270H
          </span>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ background: ORANGE }}>
          <Icon name="Printer" size={16} className="text-white" />
          Распечатать / Сохранить PDF
        </button>
      </div>

      {/* обёртка брошюры */}
      <div className="brochure-wrapper">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    </>
  );
};

export default Index;