import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const IMG_HERO = 'https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/6b78e395-3714-4ed5-be53-9db9f06a2aa4.jpg';
const IMG_GARAGE = 'https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/ac079f35-94b2-44fe-92af-69ef7d9c41ad.jpg';
const IMG_DRAWING = 'https://cdn.poehali.dev/projects/38be9ffc-e908-478b-8eea-05c38aec9937/bucket/47776086-c453-4bb6-96ce-3f3398af581c.jpg';

const heroStats = [
  { value: '2 700', unit: 'кг', label: 'Грузоподъёмность' },
  { value: '2 100', unit: 'мм', label: 'Высота подъёма' },
  { value: '60', unit: 'сек', label: 'Время подъёма' },
  { value: '1', unit: 'цилиндр', label: 'Гидропривод' },
];

const advantages = [
  { icon: 'Cylinder', title: 'Один гидроцилиндр', text: 'Революционная конструкция вместо двух цилиндров: проще монтаж, выше скорость парковки, ниже затраты на оборудование и обслуживание.' },
  { icon: 'Zap', title: 'Высокая скорость', text: 'Более быстрый подъём и опускание платформы по сравнению с классической двухцилиндровой конструкцией TP-270.' },
  { icon: 'ShieldCheck', title: 'Максимальная безопасность', text: 'Механические запирающие устройства, система против раскачивания, защита от перегрузки и кнопки аварийной остановки.' },
  { icon: 'Ruler', title: 'Экономия пространства', text: 'Ширина 2,55 м умещается в типовое машиноместо. До трёх подъёмников в шаг колонн 7,5 м с общими опорами.' },
  { icon: 'Wrench', title: 'Простой монтаж', text: 'Предварительно собранные детали и встроенный блок управления. Лёгкая разборка и перемещение конструкции.' },
  { icon: 'Snowflake', title: 'Уличное исполнение', text: 'Опциональная комплектация для эксплуатации на придомовых территориях в диапазоне температур −30…+40 °C.' },
];

const features = [
  'Стандартная грузоподъёмность 2700 кг для двух больших внедорожников',
  'Конструкция с одним цилиндром для повышения производительности',
  'Более высокая скорость подъёма по сравнению с двухцилиндровой конструкцией',
  'Предварительно собранные детали для удобства монтажа',
  'Совместное использование — экономия стоимости и пространства',
  'Простая разборка и перемещение',
  'Встроенный блок управления для удобства подключения',
  'Несколько высот парковки',
  'Контроллер защитного ключа-переключателя',
  'Противоскользящий пандус и платформа',
  'Антикоррозийное гладкое порошковое покрытие',
  'Усиленные антикоррозийные оцинкованные пластины',
];

const specs = [
  ['Производитель, марка', 'КНР, TP-270H'],
  ['Вид привода', 'Гидравлический (один цилиндр)'],
  ['Грузоподъёмность, кг', '≤ 2700'],
  ['Высота подъёма платформы, мм', '2100'],
  ['Ширина платформы, мм', '2100'],
  ['Габариты ДхШхВ, мм', '4163 × 2550 × 3210'],
  ['Габариты с гидростанцией, мм', '4163 × 2550 × 3445'],
  ['Платформа', 'Прямая'],
  ['Время подъёма/опускания, сек', '60 / 45'],
  ['Электропитание', '3Ф, 380 В, 50 Гц'],
  ['Вес установки, кг', '1050'],
  ['Потребляемая мощность, кВт', '2,2'],
  ['Установка', 'В помещении (+0…+45 °C)'],
  ['Управление', 'Индивидуальный блок с ключом на выносной штанге'],
];

const options = [
  'Удлинитель задней части платформы — 834 мм',
  'Ширина платформы/подъёмника — 2200/2655 мм',
  'Ширина платформы/подъёмника — 2300/2755 мм',
  'Управление подъёмником с брелока',
  'Дополнительный кодовый замок / чип-карта',
  'Установка блока управления на бетонную колонну/стену',
  'Уличное исполнение (−30…+40 °C)',
  'Алюминиевый бак под гидравлическое масло',
  'Кожухи от пыли, влаги и снега для узлов',
  'Дополнительная антикоррозийная покраска ламелей',
  'Магнитные концевые выключатели в крайних точках',
  'Гидравлическое масло HVLP для перепадов температур',
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
              <Icon name="ParkingSquare" size={22} className="text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-600 uppercase tracking-wide">ИТЦ Сибири</div>
              <div className="text-[11px] uppercase tracking-widest text-primary-foreground/60">Парковочные системы</div>
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Icon name="Phone" size={18} className="text-accent" />
            <span className="font-display text-lg font-500">8 (800) 511-06-55</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground grid-texture">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Коммерческое предложение · ИТЦ Сибири
            </div>
            <h1 className="font-display text-5xl font-700 uppercase leading-none md:text-7xl">
              Подъёмник<br />
              <span className="text-accent">TP-270H</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/70">
              Одноцилиндровый двухстоечный гидравлический парковочный подъёмник. Два автомобиля — одно машиноместо.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="FileText" size={18} className="mr-2" /> Запросить расчёт
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Phone" size={18} className="mr-2" /> Связаться
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
              <img src={IMG_HERO} alt="Парковочный подъёмник TP-270H с двумя автомобилями" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-primary-foreground/10 bg-primary/60">
          <div className="container grid grid-cols-2 divide-x divide-primary-foreground/10 md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center">
                <div className="font-display text-3xl font-700 text-accent md:text-4xl">
                  {s.value} <span className="text-base font-400 text-primary-foreground/60">{s.unit}</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="text-sm uppercase tracking-widest text-accent">О продукте</div>
            <h2 className="mt-3 font-display text-4xl font-600 uppercase leading-tight">Инженерное решение нового поколения</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-500 text-foreground">TP-270H</span> разработан на основе стандартного двухцилиндрового подъёмника TP-270. Вместо двух цилиндров инженеры сконструировали <span className="font-500 text-foreground">один цилиндр</span> — это упрощает установку, повышает скорость парковки и снижает затраты на оборудование и обслуживание.
            </p>
            <p>
              Несмотря на облегчённую конструкцию, подъёмник сохраняет грузоподъёмность <span className="font-500 text-foreground">2,7 тонны</span> и регулируемую высоту подъёма до <span className="font-500 text-foreground">2,1 метра</span>. Требуемая высота помещения: седан/джип — от 3,5 м, внедорожник — от 4,0 м.
            </p>
            <p>
              Модель <span className="font-500 text-foreground">TP-230H</span> отличается только меньшей грузоподъёмностью — 2,3 тонны. Поставку и монтаж выполняет <span className="font-500 text-foreground">ИТЦ Сибири</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-widest text-accent">Наши установки</div>
            <h2 className="mt-3 font-display text-4xl font-600 uppercase">Оборудование в эксплуатации</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="group overflow-hidden rounded-xl border border-primary-foreground/10">
              <img src={IMG_GARAGE} alt="Ряд подъёмников в подземном паркинге" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-96" />
            </div>
            <div className="group overflow-hidden rounded-xl border border-primary-foreground/10">
              <img src={IMG_HERO} alt="Два автомобиля на подъёмнике TP-270H" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-secondary/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="text-sm uppercase tracking-widest text-accent">Преимущества</div>
            <h2 className="mt-3 font-display text-4xl font-600 uppercase">Почему выбирают TP-270H</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.title} className="group rounded-xl border border-border bg-card p-7 transition-all hover:border-accent hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary transition-colors group-hover:bg-accent">
                  <Icon name={a.icon} size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-600 uppercase">{a.title}</h3>
                <p className="mt-3 text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features list */}
      <section className="container py-20">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-widest text-accent">Особенности</div>
          <h2 className="mt-3 font-display text-4xl font-600 uppercase">Что входит в конструкцию</h2>
        </div>
        <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-3 border-b border-border pb-4">
              <Icon name="CheckCircle2" size={20} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-foreground">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Drawing */}
      <section className="bg-secondary/50 py-20">
        <div className="container">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-widest text-accent">Чертёж</div>
            <h2 className="mt-3 font-display text-4xl font-600 uppercase">Габаритные размеры</h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm md:p-8">
            <img src={IMG_DRAWING} alt="Чертёж подъёмника TP-270H с размерами" className="mx-auto w-full max-w-4xl" />
          </div>
        </div>
      </section>

      {/* Specs + Options */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-widest text-accent">Спецификация</div>
            <h2 className="mt-3 font-display text-4xl font-600 uppercase">Технические характеристики</h2>
            <div className="mt-8 overflow-hidden rounded-xl border border-primary-foreground/10">
              {specs.map(([k, v], i) => (
                <div key={k} className={`grid grid-cols-2 gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-primary-foreground/5' : ''}`}>
                  <span className="text-primary-foreground/60">{k}</span>
                  <span className="text-right font-500">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-accent">Опции</div>
            <h2 className="mt-3 font-display text-4xl font-600 uppercase">Дополнительная комплектация</h2>
            <p className="mt-2 text-sm text-primary-foreground/50">Отдельная стоимость. Уточняйте у специалистов ИТЦ Сибири.</p>
            <div className="mt-8 space-y-3">
              {options.map((o) => (
                <div key={o} className="flex items-start gap-3 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3">
                  <Icon name="Plus" size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container py-20">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="font-display text-4xl font-600 uppercase leading-tight">Готовы обсудить проект?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ИТЦ Сибири рассчитает комплектацию под ваше помещение, подберёт количество подъёмников и подготовит коммерческое предложение.
              </p>
              <div className="mt-8 space-y-4">
                <a href="tel:88005110655" className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent"><Icon name="Phone" size={20} className="text-accent-foreground" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Телефон</div>
                    <div className="font-display text-xl font-500 group-hover:text-accent">8 (800) 511-06-55</div>
                  </div>
                </a>
                <a href="mailto:info@itc-sibiri.ru" className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent"><Icon name="Mail" size={20} className="text-accent-foreground" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-display text-xl font-500 group-hover:text-accent">info@itc-sibiri.ru</div>
                  </div>
                </a>
                <a href="https://itc-sibiri.ru" className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent"><Icon name="Globe" size={20} className="text-accent-foreground" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Сайт</div>
                    <div className="font-display text-xl font-500 group-hover:text-accent">itc-sibiri.ru</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-primary p-8 text-primary-foreground">
              <Icon name="Headset" size={40} className="text-accent" />
              <h3 className="mt-5 font-display text-2xl font-600 uppercase">Индивидуальный расчёт</h3>
              <p className="mt-3 text-primary-foreground/70">Оставьте заявку — специалист ИТЦ Сибири свяжется с вами и подготовит предложение под ваши задачи.</p>
              <Button size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="Send" size={18} className="mr-2" /> Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-accent">
              <Icon name="ParkingSquare" size={20} className="text-accent-foreground" />
            </div>
            <span className="font-display text-lg font-600 uppercase tracking-wide">ИТЦ Сибири</span>
          </div>
          <div className="text-sm text-primary-foreground/50">
            Производитель оставляет за собой право вносить незначительные изменения. Расхождение габаритов ±50 мм.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
