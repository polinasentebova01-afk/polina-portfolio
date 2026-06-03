<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=900">
<title>Прототип 2 — Органика</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    background: #e9ebef;
    background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0);
    background-size: 24px 24px;
    min-height: 100vh;
    padding: 40px 30px;
  }

  .board-header {
    max-width: 880px;
    margin: 0 auto 32px;
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .board-header h1 {
    font-size: 20px;
    font-weight: 700;
    color: #1e1e1e;
    letter-spacing: -0.3px;
  }

  .board-header .pill {
    background: #fff;
    border: 1px solid #e3e4e8;
    border-radius: 18px;
    padding: 6px 12px;
    font-size: 12px;
    color: #4a4a4a;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .board-header .pill::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #14ae5c;
  }

  .board-header .hint {
    margin-left: auto;
    font-size: 12px;
    color: #6e6e73;
    display: inline-flex; align-items: center; gap: 6px;
  }

  .hint-pin {
    display: inline-flex;
    align-items: center; justify-content: center;
    width: 18px; height: 18px;
    border-radius: 50%;
    background: #fff;
    border: 1.5px solid #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    color: #d4537e;
    font-weight: 700;
    font-size: 9px;
    position: relative;
  }
  .hint-pin::after {
    content: '';
    position: absolute;
    top: -1px; right: -1px;
    width: 6px; height: 6px;
    background: #ff3b30;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  .canvas {
    position: relative;
    max-width: 880px;
    margin: 0 auto;
    min-height: 720px;
    padding: 20px 0;
  }

  .iphone {
    width: 290px;
    height: 620px;
    background: #1c1c1e;
    border-radius: 46px;
    padding: 8px;
    box-shadow:
      0 0 0 1px #3a3a3c,
      0 30px 60px rgba(0,0,0,0.18),
      0 8px 20px rgba(0,0,0,0.12);
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  .iphone-inner {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 38px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px 6px;
    font-size: 11px;
    color: #000;
    flex-shrink: 0;
    background: #fff;
    position: relative;
    z-index: 10;
  }

  .status-time { font-size: 14px; font-weight: 600; font-family: -apple-system, sans-serif; }
  .status-icons { display: flex; align-items: center; gap: 5px; }

  .dynamic-island {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 92px;
    height: 26px;
    background: #000;
    border-radius: 20px;
    z-index: 20;
  }

  .signal-bars { display: flex; gap: 2px; align-items: flex-end; }
  .signal-bars span { width: 3px; background: #000; border-radius: 1px; }
  .signal-bars span:nth-child(1) { height: 4px; }
  .signal-bars span:nth-child(2) { height: 6px; }
  .signal-bars span:nth-child(3) { height: 8px; }
  .signal-bars span:nth-child(4) { height: 10px; }

  .battery-icon {
    width: 22px; height: 11px;
    border: 1.2px solid #000; border-radius: 2.5px;
    position: relative; padding: 1px;
  }
  .battery-icon::after {
    content: ''; position: absolute; right: -3.5px; top: 50%;
    transform: translateY(-50%); width: 2px; height: 5px;
    background: #000; border-radius: 0 1px 1px 0;
  }
  .battery-fill { background: #000; height: 100%; width: 85%; border-radius: 1px; }

  .app-nav-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    flex-shrink: 0;
    background: #fff;
    position: relative;
  }

  .nav-back {
    position: absolute; left: 18px; color: #1e1e1e;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    width: 28px; height: 28px;
  }

  .nav-title { font-size: 15px; font-weight: 600; color: #000; font-family: -apple-system, sans-serif; }

  .app-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,0.15) transparent;
  }
  .app-content::-webkit-scrollbar { width: 4px; }
  .app-content::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }

  .article-hero { width: 100%; height: 160px; object-fit: cover; display: block; }
  .article-body { padding: 16px 16px 24px; font-family: -apple-system, sans-serif; }

  .article-h1 {
    font-size: 19px; font-weight: 700; color: #000;
    margin: 0 0 12px; line-height: 1.25; letter-spacing: -0.3px;
  }

  .article-h2 {
    font-size: 14.5px; font-weight: 700; color: #000;
    margin: 18px 0 8px; line-height: 1.3;
  }

  .article-p {
    font-size: 13.5px; color: #1c1c1e; line-height: 1.55;
    margin: 0 0 10px;
  }

  .article-highlight {
    font-size: 13.5px; font-weight: 700; color: #000;
    line-height: 1.45; margin: 0 0 10px;
  }

  .article-img-rounded {
    width: 100%; height: 140px; object-fit: cover;
    border-radius: 10px; margin: 14px 0 6px;
    display: block;
  }

  .bottom-tabs {
    display: flex;
    border-top: 0.5px solid #e5e5e5;
    padding: 8px 0 12px;
    background: #fff;
    flex-shrink: 0;
  }

  .tab-item { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; }
  .tab-icon { width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; }
  .tab-label { font-size: 9.5px; font-family: -apple-system, sans-serif; color: #888; }
  .tab-label.active { color: #d32f2f; }
  .tab-svg { width: 22px; height: 22px; }

  .home-indicator {
    height: 22px;
    display: flex; align-items: center; justify-content: center;
    background: #fff; flex-shrink: 0; padding-bottom: 5px;
  }
  .home-bar { width: 110px; height: 4.5px; background: #111; border-radius: 3px; }

  .phone-side-btn { position: absolute; background: #2c2c2e; border-radius: 2px; }
  .volume-up { right: -3px; top: 100px; width: 3px; height: 32px; }
  .volume-down { right: -3px; top: 144px; width: 3px; height: 52px; }
  .power { left: -3px; top: 122px; width: 3px; height: 60px; }

  /* ==== FIGMA PIN — now sits ON top of text inside the phone ==== */
  .pin {
    position: absolute;
    width: 28px; height: 28px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #fff;
    box-shadow:
      0 2px 8px rgba(0,0,0,0.22),
      0 0 0 0.5px rgba(0,0,0,0.06);
    display: flex; align-items: center; justify-content: center;
    color: #d4537e;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    z-index: 50;
    font-family: 'Inter', sans-serif;
    user-select: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .pin::after {
    content: '';
    position: absolute;
    top: -2px; right: -2px;
    width: 10px; height: 10px;
    background: #ff3b30;
    border-radius: 50%;
    border: 1.5px solid #fff;
  }
  .pin:hover {
    transform: scale(1.1);
    box-shadow:
      0 4px 14px rgba(0,0,0,0.3),
      0 0 0 0.5px rgba(0,0,0,0.08);
  }
  .pin.is-open {
    transform: scale(1.08);
    background: #fef0f6;
  }
  .pin.is-open::after {
    background: #888;
  }

  /* Comment card — lives outside phone, positioned dynamically next to clicked pin */
  .comment-card {
    position: absolute;
    background: #fff;
    border-radius: 12px;
    padding: 14px 14px 14px;
    width: 230px;
    box-shadow:
      0 1px 2px rgba(0,0,0,0.06),
      0 12px 32px rgba(0,0,0,0.18),
      0 0 0 0.5px rgba(0,0,0,0.05);
    z-index: 200;
    font-family: 'Inter', -apple-system, sans-serif;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.92) translateY(-4px);
    transform-origin: top left;
    transition: opacity 0.18s ease, transform 0.18s ease;
    left: 0; top: 0;
  }
  .comment-card.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1) translateY(0);
  }

  .comment-head {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 10px;
  }

  .avatar {
    width: 26px; height: 26px;
    border-radius: 50%;
    background: #fff;
    color: #d4537e;
    font-weight: 700; font-size: 12px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.1);
    position: relative;
  }
  .avatar::after {
    content: '';
    position: absolute;
    top: -1px; right: -1px;
    width: 8px; height: 8px;
    background: #ff3b30;
    border-radius: 50%;
    border: 1.5px solid #fff;
  }

  .comment-name { font-size: 13px; font-weight: 600; color: #1e1e1e; }
  .comment-time { font-size: 11px; color: #8e8e93; margin-left: 2px; font-weight: 400; }
  .comment-body { font-size: 12.5px; color: #3c3c43; line-height: 1.5; }

  .comment-close {
    position: absolute;
    top: 8px; right: 8px;
    width: 22px; height: 22px;
    border-radius: 4px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #8e8e93;
    background: transparent;
    border: none;
    font-size: 14px;
  }
  .comment-close:hover { background: #f0f0f3; color: #1e1e1e; }
</style>
</head>
<body>

<div class="board-header">
  <h1>Прототип 2 — Статья «Органика»</h1>
  <span class="pill">2 комментария</span>
  <span class="hint">Кликни на <span class="hint-pin">P</span> чтобы раскрыть</span>
</div>

<div class="canvas">

  
    <div class="iphone">
      <div class="phone-side-btn volume-up"></div>
      <div class="phone-side-btn volume-down"></div>
      <div class="phone-side-btn power"></div>
      <div class="iphone-inner">
        <div class="dynamic-island"></div>
        
        <div class="status-bar">
          <span class="status-time">13:59</span>
          <div class="status-icons">
            <div class="signal-bars"><span></span><span></span><span></span><span></span></div>
            <svg width="14" height="10" viewBox="0 0 14 10"><path d="M7 2.5C8.8 2.5 10.4 3.2 11.6 4.3L13 2.9C11.4 1.4 9.3 0.5 7 0.5C4.7 0.5 2.6 1.4 1 2.9L2.4 4.3C3.6 3.2 5.2 2.5 7 2.5Z" fill="#000"/><path d="M7 5.5C8.1 5.5 9.1 5.9 9.8 6.6L11.2 5.2C10.1 4.2 8.6 3.5 7 3.5C5.4 3.5 3.9 4.2 2.8 5.2L4.2 6.6C4.9 5.9 5.9 5.5 7 5.5Z" fill="#000"/><circle cx="7" cy="9" r="1.5" fill="#000"/></svg>
            <div class="battery-icon"><div class="battery-fill"></div></div>
          </div>
        </div>
        
        <div class="app-nav-bar">
          <div class="nav-back">
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M8 2L2 8L8 14" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          </div>
          <span class="nav-title">Статья</span>
        </div>

        <div class="app-content">
          <img class="article-hero" src="data:image/jpeg;base64,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" alt="Золотая Россия" style="height:140px;">
          <div class="article-body">
            <div class="article-h1" style="position:relative;">
              Органический выбор: почему всё больше россиян обращаются к натуральным продуктам
              <div class="pin" data-comment="p2-1" style="top: -6px; right: -6px;">P</div>
            </div>
            <div class="article-p">Российский потребитель всё чаще делает выбор в пользу натуральных и экологически чистых продуктов. По данным исследовательских компаний, рынок органических товаров в России за последние годы показывает устойчивый рост: покупатели всё чаще обращают внимание не только на вкус, но и на происхождение ингредиентов, экологичность упаковки, отсутствие искусственных добавок.</div>
            <div class="article-p">Этот тренд особенно заметен в сегменте продуктов питания и напитков. Растёт спрос на органическое мясо, овощи, молочные продукты и даже алкоголь. Современные покупатели ценят прозрачность происхождения продукции и стремятся к осознанному потреблению, где качество и забота о здоровье выходят на первый план.</div>

            <div class="article-p" style="background:rgba(212,83,126,0.10); padding:8px 10px; border-radius:6px; border-left:3px solid #d4537e; margin-top:14px; position:relative;">
              Водка «Золотая Россия» создана на основе органического спирта из экологически чистой пшеницы, а также кристальной воды и настоя отборных зерен редкой дикой спельты — прародительницы твердых сортов пшеницы. Именно спельта придает «Золотой России» благородный, мягкий и чистый вкус, делая её особенной на фоне других премиальных водок.
              <div class="pin" data-comment="p2-2" style="top: -8px; right: -6px;">P</div>
            </div>

            <div class="article-p">Уникальная бутылка «Золотой России» сама по себе является произведением искусства, символизируя гордость и величие нашей страны. Золотая нижняя часть стекла украшена орнаментом со знаковыми архитектурными ансамблями России.</div>

            <div class="article-p">Водка «Золотая Россия» сертифицирована по стандартам органического производства и выпускается на ультрасовременном заводе «Русский Стандарт» в Санкт-Петербурге.</div>

            <div class="article-p">Природная чистота, заложенная в «Золотой России», отражает глубину русской души — открытую, искреннюю и щедрую.</div>
          </div>
        </div>

        
        <div class="bottom-tabs">
          <div class="tab-item">
            <div class="tab-icon"><svg class="tab-svg" viewBox="0 0 24 24"><path d="M3 12L12 4L21 12V20C21 20.6 20.6 21 20 21H15V16H9V21H4C3.4 21 3 20.6 3 20V12Z" fill="#d32f2f"/></svg></div>
            <span class="tab-label active">Главная</span>
          </div>
          <div class="tab-item">
            <div class="tab-icon"><svg class="tab-svg" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="2" rx="1" fill="#888"/><rect x="3" y="11" width="14" height="2" rx="1" fill="#888"/><rect x="3" y="16" width="18" height="2" rx="1" fill="#888"/><circle cx="18" cy="17" r="3" fill="#fff" stroke="#888" stroke-width="1.5"/><line x1="20.5" y1="19.5" x2="22" y2="21" stroke="#888" stroke-width="1.5" stroke-linecap="round"/></svg></div>
            <span class="tab-label">Каталог</span>
          </div>
          <div class="tab-item">
            <div class="tab-icon"><svg class="tab-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#888" stroke-width="1.5" fill="none"/><path d="M12 8C13.1 8 14 8.9 14 10C14 11.7 12 13 12 13" stroke="#888" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="12" cy="16" r="0.8" fill="#888"/></svg></div>
            <span class="tab-label">Апельсин</span>
          </div>
          <div class="tab-item">
            <div class="tab-icon"><svg class="tab-svg" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" stroke="#888" stroke-width="1.5" fill="none"/><path d="M5 20C5 17.2 8.1 15 12 15C15.9 15 19 17.2 19 20" stroke="#888" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg></div>
            <span class="tab-label">Профиль</span>
          </div>
        </div>
        <div class="home-indicator"><div class="home-bar"></div></div>
  
      </div>
    </div>

  
    <div id="card-p2-1" class="comment-card">
      <button class="comment-close" aria-label="Закрыть">✕</button>
      <div class="comment-head">
        <div class="avatar">P</div>
        <span class="comment-name">Polina S.</span>
        <span class="comment-time">сейчас</span>
      </div>
      <div class="comment-body">Заголовок занимает слишком много места и давит на экран — стоит сократить или разбить.</div>
    </div>
  
    <div id="card-p2-2" class="comment-card">
      <button class="comment-close" aria-label="Закрыть">✕</button>
      <div class="comment-head">
        <div class="avatar">P</div>
        <span class="comment-name">Polina S.</span>
        <span class="comment-time">сейчас</span>
      </div>
      <div class="comment-body">Ненативная реклама — после общего пассажа об органике резко начинается рассказ про конкретный бренд водки. Читатель ощущает обман.</div>
    </div>

</div>

<script>
(function(){
  const canvas = document.querySelector('.canvas');

  function closeAll() {
    document.querySelectorAll('.pin.is-open').forEach(p => p.classList.remove('is-open'));
    document.querySelectorAll('.comment-card.is-open').forEach(c => c.classList.remove('is-open'));
  }

  function positionCard(pin, card) {
    const pinRect = pin.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const phone = document.querySelector('.iphone');
    const phoneRect = phone.getBoundingClientRect();
    const cardWidth = 230;
    const gap = 16;

    // Card x = right edge of phone + gap (canvas coordinates)
    let cardLeft = (phoneRect.right - canvasRect.left) + gap;
    // Embedded in a narrow frame there's no room right of the phone — clamp the
    // card so it stays inside the canvas instead of spilling out and clipping.
    const maxLeft = canvasRect.width - cardWidth - 12;
    if (cardLeft > maxLeft) cardLeft = Math.max(12, maxLeft);

    // Card y = align with pin (canvas coordinates)
    let cardTop = pinRect.top - canvasRect.top - 4;

    // Clamp so card stays inside canvas/visible area
    if (cardTop < 20) cardTop = 20;

    card.style.left = cardLeft + 'px';
    card.style.top = cardTop + 'px';
  }

  document.querySelectorAll('.pin').forEach(pin => {
    pin.addEventListener('click', e => {
      e.stopPropagation();
      const id = pin.dataset.comment;
      const card = document.getElementById('card-' + id);
      const wasOpen = pin.classList.contains('is-open');
      closeAll();
      if (!wasOpen) {
        pin.classList.add('is-open');
        if (card) {
          positionCard(pin, card);
          card.classList.add('is-open');
        }
      }
    });
  });

  document.querySelectorAll('.comment-close').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeAll();
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.comment-card') && !e.target.closest('.pin')) {
      closeAll();
    }
  });

  // Reposition open card if user scrolls inside the phone content
  document.querySelectorAll('.app-content').forEach(sc => {
    sc.addEventListener('scroll', () => {
      const openPin = document.querySelector('.pin.is-open');
      if (openPin) {
        const card = document.getElementById('card-' + openPin.dataset.comment);
        if (card) positionCard(openPin, card);
      }
    });
  });
  window.addEventListener('resize', () => {
    const openPin = document.querySelector('.pin.is-open');
    if (openPin) {
      const card = document.getElementById('card-' + openPin.dataset.comment);
      if (card) positionCard(openPin, card);
    }
  });
})();
</script>
</body>
</html>