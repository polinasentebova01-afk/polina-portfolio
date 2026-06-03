<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Анонс Writer — GPT-агент для Food.ru · Кейс</title>
<link rel="stylesheet" href="../styles.css">
<link rel="stylesheet" href="../cases.css">
</head>
<body data-screen-label="Кейс 02 — Анонс Writer">

<nav class="nav">
  <div class="nav-inner">
    <a href="../index.html" class="brand"><span class="dot"></span>Полина</a>
    <div class="nav-links">
      <a href="../index.html#work">Кейсы</a>
      <a href="../index.html#contact">Контакты</a>
    </div>
    <a href="../index.html#contact" class="nav-cta">Связаться →</a>
  </div>
</nav>

<div class="case-wrap">

  <div class="case-top">
    <a href="../index.html#work" class="back">← Все кейсы</a>
    <span class="case-index">Кейс 02 / 04</span>
  </div>

  <!-- HERO -->
  <header class="case-hero" data-reveal>
    <div class="eyebrow">Кастомный GPT-агент · Food.ru</div>
    <h1>Анонс Writer</h1>
    <p class="tagline">GPT-агент, который пишет анонсы по брифам и пресс-релизам в стилистике Food.ru — и берёт на себя не только текст, но и <em>редакторский этап</em>: сбор недостающих вводных.</p>
    <div class="case-meta">
      <div class="m"><div class="k">Роль</div><div class="v">Продукт · промптинг · редактура</div></div>
      <div class="m"><div class="k">Тип</div><div class="v">Кастомный GPT-агент · личный проект</div></div>
      <div class="m"><div class="k">Медиа</div><div class="v">Food.ru</div></div>
      <div class="m"><div class="k">Жанры</div><div class="v">Анонсы и новости</div></div>
    </div>
  </header>

  <!-- SHOWCASE -->
  <section class="case-section" style="padding-top:20px;" data-reveal>
    <div class="proto-canvas bare" style="height:680px;">
      <div class="embed" data-src="../proto/mobile.html" data-vw="430" data-vh="840" data-preset="dark" data-mode="contain" data-interactive="true"></div>
    </div>
    <div class="proto-cap"><span class="live" style="color:oklch(0.7 0.16 150);font-weight:700;">● LIVE</span> Прототип агента — пришли бриф в любом формате, агент задаёт вопросы и пишет анонс. Играет на цикле.</div>
  </section>

  <!-- PROBLEM -->
  <section class="case-section">
    <div data-reveal>
      <span class="sec-tag"><span class="no">01</span>Задача</span>
      <h2 class="sec-title">Анонс готовится 1–2 дня, и виноваты не тексты — а брифы.</h2>
      <p class="sec-intro">Основная проблема — неполные брифы. Авторам приходилось уточнять вводные у редактора, редактору — у заказчика. Много времени уходило на сбор информации и редактуру ещё до того, как начиналось написание.</p>
    </div>
    <div class="bento">
      <div class="cell c5 dark" data-reveal>
        <div class="ckey">Цена проблемы</div>
        <div class="metric">1–2 дня</div>
        <div class="metric-lbl">на один анонс — большая часть времени уходила на уточнения и сбор вводных</div>
      </div>
      <div class="cell c7" data-reveal>
        <div class="ckey">Цепочка уточнений</div>
        <ul class="clist">
          <li>Бриф приходит <strong>неполным</strong> — без части ключевых вводных.</li>
          <li>Автор <strong>уточняет у редактора</strong>, чего не хватает.</li>
          <li>Редактор <strong>уточняет у заказчика</strong> — и ждёт ответа.</li>
          <li>Только потом — написание и <strong>несколько кругов редактуры</strong>.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="case-section">
    <div data-reveal>
      <span class="sec-tag blue"><span class="no">02</span>Процесс</span>
      <h2 class="sec-title">Три редакторские функции в одном инструменте.</h2>
      <p class="sec-intro">Я собрала кастомного GPT-агента, заточенного под жанры Food.ru. Он закрывает весь путь от сырого брифа до готового текста — в одном чате, без отдельного ТЗ.</p>
    </div>
    <div class="bento">
      <div class="cell c4" data-reveal>
        <div class="ckey">Функция 01</div>
        <div class="ch">Анализ брифа</div>
        <p class="ct">Агент определяет жанр и выявляет недостающие данные, формируя список уточняющих вопросов. Их можно скопировать и отправить заказчику — набор адаптируется под жанр материала.</p>
      </div>
      <div class="cell c4" data-reveal>
        <div class="ckey">Функция 02</div>
        <div class="ch">Написание</div>
        <p class="ct">После уточнений агент генерирует анонс в стиле Food.ru. Отдельно прописывать ТЗ больше не нужно.</p>
      </div>
      <div class="cell c4 blue" data-reveal>
        <div class="ckey">Функция 03</div>
        <div class="ch">Редактура в canvas</div>
        <p class="ct">Доработка текста в режиме canvas — правки вносятся прямо в чате, без переноса в другие инструменты.</p>
      </div>
      <div class="cell c12 paper flush" data-reveal style="padding:30px;">
        <div class="ckey">Как это работает — шаг за шагом</div>
        <div class="ba" style="margin-top:6px;">
          <div class="cell c6" style="grid-column:auto;"><ul class="clist">
            <li>Агент получает бриф в <strong>любом формате</strong>;</li>
            <li>анализирует его, определяет <strong>жанр</strong> и каких данных не хватает;</li>
            <li>формирует список <strong>уточняющих вопросов</strong>.</li>
          </ul></div>
          <div class="cell c6" style="grid-column:auto;"><ul class="clist">
            <li>После уточнений генерирует <strong>анонс в стиле Food.ru</strong>;</li>
            <li>дорабатывает текст в <strong>canvas</strong>;</li>
            <li>отдельное ТЗ <strong>больше не требуется</strong>.</li>
          </ul></div>
        </div>
        <p class="ct" style="margin-top:8px;">По сути мы автоматизировали не только написание текста, но и редакторский этап — сбор недостающих вводных.</p>
      </div>
    </div>
  </section>

  <!-- RESOLUTION / WHY -->
  <section class="case-section">
    <div data-reveal>
      <span class="sec-tag mint"><span class="no">03</span>Подход</span>
      <h2 class="sec-title">Жанровая специализация вместо универсальности.</h2>
      <p class="sec-intro">Главное отличие от универсальных «умных редакторов» — агент заточен под конкретные жанры конкретного медиа. За счёт этого нужен минимум вводных, ниже риск галлюцинаций и проще держать редполитику.</p>
    </div>
    <div class="bento">
      <div class="cell c6" data-reveal>
        <div class="ckey">Чем отличается от универсальных решений</div>
        <ul class="clist">
          <li><strong>Жанровая специализация</strong> под Food.ru — минимум вводных.</li>
          <li>Бриф можно прислать в любом виде — агент <strong>сам задаёт вопросы</strong>.</li>
          <li>Меньше галлюцинаций, легче держать <strong>нужный стиль</strong>.</li>
          <li>Весь функционал в одном чате, включая редактуру.</li>
        </ul>
      </div>
      <div class="cell c6 blue" data-reveal>
        <div class="ckey">Почему именно анонсы и новости</div>
        <p class="ct" style="max-width:44ch;">Это востребованный жанр — в среднем <strong>10–20 материалов в месяц</strong>, чаще всего анонсы спецпроектов, поэтому поток стабильный. В этих форматах меньше выражен авторский голос, тексты структурированные и жанровые — с ними проще работать модели и ниже риск галлюцинаций.</p>
      </div>
    </div>
  </section>

  <!-- RESULTS -->
  <section class="case-section">
    <div data-reveal>
      <span class="sec-tag"><span class="no">04</span>Импакт</span>
      <h2 class="sec-title">С 1–2 дней до часа.</h2>
    </div>
    <div class="bento">
      <div class="cell c4 blue" data-reveal><div class="ckey">Время на анонс</div><div class="metric sm">~10–60 мин</div><div class="metric-lbl">готовый текст, включая редактуру — вместо 1–2 дней</div></div>
      <div class="cell c4" data-reveal><div class="ckey">Команда</div><div class="ch" style="font-size:22px;">Без доп. авторов</div><div class="metric-lbl">редактор готовит анонс самостоятельно с помощью агента</div></div>
      <div class="cell c4 dark" data-reveal><div class="ckey">Что закрывает AI</div><div class="ch" style="font-size:22px;">Вводные · текст · правки</div><div class="metric-lbl">сбор недостающих данных, написание и редактура</div></div>
    </div>
    <div class="bento" style="margin-top:18px;">
      <div class="cell c12 mint" data-reveal>
        <div class="ckey">Признание</div>
        <p class="ct" style="font-size:18px;max-width:62ch;">Агент был представлен на конференции Сбера директором по контенту Х5 Media — как пример прикладного редакционного AI.</p>
      </div>
    </div>
  </section>

  <!-- NEXT -->
  <section class="case-section" style="padding-top:6px;">
    <a class="next-card" href="editorial.html" data-reveal>
      <div>
        <div class="nk-k">Следующий кейс · 03</div>
        <div class="nk-t">Тематические клубы «Пятёрочки» →</div>
      </div>
      <span class="nk-arrow">↗</span>
    </a>
  </section>

</div>

<footer class="foot case-wrap">
  <div class="foot-inner">
    <span>© 2026 Полина Сентебова</span>
    <span><a href="../index.html" style="color:var(--ink);font-weight:600;">На главную ↑</a></span>
  </div>
</footer>

<script src="../embed.js"></script>
<script src="../reveal.js"></script>
</body>
</html>
