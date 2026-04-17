<template>
  <div class="infoPage">
    <section class="hero card">
      <h1>Довідка</h1>
      <p>
        Тут коротко пояснюється, як працює калькулятор калорій, які формули
        використовуються та як визначається добова норма калорій і
        макронутрієнтів.
      </p>
    </section>

    <section class="card">
      <h2>Як працює калькулятор калорій</h2>
      <p>
        Калькулятор визначає, скільки енергії потрібно організму на добу,
        враховуючи стать, вік, вагу, зріст, рівень активності та ціль
        користувача.
      </p>
    </section>

    <section class="card">
      <h2>Базальний обмін речовин (BMR)</h2>
      <p>
        Базальний обмін речовин — це кількість енергії, яку організм витрачає
        у стані спокою для підтримки життєво важливих функцій: дихання,
        кровообігу, роботи мозку та інших процесів.
      </p>

      <div class="formulaBox">
        <p><b>Формула Міфліна – Сан Жеора:</b></p>
        <p>Для чоловіків: BMR = 10 × W + 6.25 × H − 5 × A + 5</p>
        <p>Для жінок: BMR = 10 × W + 6.25 × H − 5 × A − 161</p>
        <p class="note">W — вага (кг), H — ріст (см), A — вік (роки)</p>
      </div>
    </section>

    <section class="card">
      <h2>Індекс маси тіла (BMI)</h2>
      <p>
        BMI — це показник, який допомагає оцінити співвідношення ваги до росту
        та визначити, чи є вага недостатньою, нормальною або надлишковою.
      </p>

      <div class="formulaBox">
        <p><b>Формула:</b> BMI = W / H²</p>
        <p class="note">H у формулі береться в метрах.</p>
      </div>

      <ul class="list">
        <li>&lt; 18.5 — недостатня вага</li>
        <li>18.5–24.9 — норма</li>
        <li>25–29.9 — зайва вага</li>
        <li>≥ 30 — ожиріння</li>
      </ul>
    </section>

    <section class="card">
      <h2>Добова потреба (TDEE)</h2>
      <p>
        Добова потреба в калоріях визначається на основі базального обміну
        речовин та коефіцієнта фізичної активності.
      </p>

      <div class="formulaBox">
        <p><b>Формула:</b> TDEE = BMR × коефіцієнт активності</p>
      </div>

      <ul class="list">
        <li>Легка активність — 1.2</li>
        <li>Середня активність — 1.55</li>
        <li>Висока активність — 1.75</li>
      </ul>
    </section>

    <section class="card">
      <h2>Ціль користувача</h2>
      <p>
        Після розрахунку добової потреби калькулятор враховує обрану ціль
        користувача.
      </p>

      <ul class="list">
        <li><b>Схуднути</b> — від загальної норми віднімається 15%</li>
        <li><b>Форма</b> — значення не змінюється</li>
        <li><b>Набір маси</b> — до загальної норми додається 10%</li>
      </ul>
    </section>

    <section class="card">
      <h2>Макронутрієнти</h2>
      <p>
        Отримані калорії розподіляються між основними макронутрієнтами:
        білками, жирами та вуглеводами.
      </p>

      <div class="macroGrid">
        <div class="macroBox">
          <h3>Схуднення</h3>
          <p>Білки — 28%</p>
          <p>Вуглеводи — 43%</p>
          <p>Жири — 29%</p>
        </div>

        <div class="macroBox">
          <h3>Форма</h3>
          <p>Білки — 25%</p>
          <p>Вуглеводи — 47%</p>
          <p>Жири — 28%</p>
        </div>

        <div class="macroBox">
          <h3>Набір маси</h3>
          <p>Білки — 25%</p>
          <p>Вуглеводи — 49%</p>
          <p>Жири — 26%</p>
        </div>
      </div>

      <p class="note">
        Для розрахунку грамів використовується правило:
        1 г білків = 4 ккал, 1 г вуглеводів = 4 ккал, 1 г жирів = 9 ккал.
      </p>
    </section>

    <section class="card">
      <h2>F.A.Q</h2>

      <div class="faqItem">
        <h3>Наскільки точні результати калькулятора?</h3>
        <p>
          Результати є орієнтовними, але базуються на поширених формулах і
          підходять для загального розрахунку добової потреби в калоріях.
        </p>
      </div>

      <div class="faqItem">
        <h3>Скільки калорій потрібно їсти щодня?</h3>
        <p>
          Орієнтуватися потрібно на розраховану добову норму. Далі її можна
          коригувати залежно від самопочуття, активності та отриманого
          результату.
        </p>
      </div>

      <div class="faqItem">
        <h3>Що таке дефіцит калорій?</h3>
        <p>
          Дефіцит калорій — це стан, коли організм витрачає більше енергії, ніж
          отримує з їжі. Саме це є основою для зниження ваги.
        </p>
      </div>

      <div class="faqItem">
        <h3>Що таке профіцит калорій?</h3>
        <p>
          Профіцит калорій — це стан, коли організм отримує більше енергії, ніж
          витрачає. Це потрібно для набору маси.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.infoPage{
  display:grid;
  gap:18px;
}

.card{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:20px;
  padding:20px;
  box-shadow:var(--shadow);
}

.hero h1{
  margin:0 0 10px 0;
  font-size:32px;
  font-weight:900;
}

.hero p{
  margin:0;
  color:var(--muted);
  line-height:1.6;
}

h2{
  margin:0 0 12px 0;
  font-size:22px;
}

h3{
  margin:0 0 8px 0;
  font-size:17px;
}

p{
  margin:0 0 10px 0;
  line-height:1.65;
}

.formulaBox{
  margin-top:12px;
  padding:14px;
  border-radius:16px;
  background:var(--btn);
  border:1px solid var(--line);
}

.note{
  margin-top:10px;
  color:var(--muted);
  font-size:14px;
}

.list{
  margin:12px 0 0 0;
  padding-left:20px;
  line-height:1.8;
}

.macroGrid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
  margin-top:12px;
}

.macroBox{
  background:var(--btn);
  border:1px solid var(--line);
  border-radius:16px;
  padding:14px;
}

.faqItem{
  padding:14px 0;
  border-bottom:1px solid var(--line);
}

.faqItem:last-child{
  border-bottom:none;
  padding-bottom:0;
}

@media (max-width: 900px){
  .macroGrid{
    grid-template-columns:1fr;
  }
}

@media (max-width: 600px){
  .card{
    padding:16px;
  }

  .hero h1{
    font-size:26px;
  }

  h2{
    font-size:20px;
  }
}
</style>