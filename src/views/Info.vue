<template>
<div class="page">
  <h1>Пояснення</h1>

  <section class="card">
    <h2>Базальний обмін речовин (BMR)</h2>
    <p>
      BMR — це кількість енергії, яку організм витрачає у стані спокою для підтримки життєво важливих функцій.
      У додатку використовується формула Міфліна – Сан Жеора.
    </p>
    <p class="mono"><b>Чоловіки:</b> BMR = 10×W + 6.25×H − 5×A + 5</p>
    <p class="mono"><b>Жінки:</b> BMR = 10×W + 6.25×H − 5×A − 161</p>
    <p class="muted">W — вага (кг), H — ріст (см), A — вік (роки).</p>
  </section>

  <section class="card">
    <h2>Індекс маси тіла (BMI)</h2>
    <p>BMI показує співвідношення ваги до росту і допомагає оцінити стан маси тіла.</p>
    <p class="mono"><b>Формула:</b> BMI = W / (H²), де H — ріст у метрах.</p>
    <ul>
      <li>&lt; 18.5 — недостатня вага</li>
      <li>18.5–24.9 — норма</li>
      <li>25–29.9 — зайва вага</li>
      <li>≥ 30 — ожиріння</li>
    </ul>
  </section>

  <section class="card">
    <h2>Добова потреба (TDEE)</h2>
    <p>Добова потреба в калоріях визначається з урахуванням активності:</p>
    <p class="mono"><b>TDEE = BMR × коефіцієнт активності</b></p>
    <div class="table">
      <div><b>Легка</b> 1.2</div>
      <div><b>Середня</b> 1.55</div>
      <div><b>Висока</b> 1.75</div>
    </div>
  </section>

  <section class="card">
    <h2>Ціль і макроелементи</h2>
    <p>
      Для цілі “Схуднути” застосовується дефіцит 15%, для “Набір” — надлишок 10%, для “Форма” — без змін.
      Далі калорії розподіляються на макроси (білки/жири/вуглеводи) у відсотках.
    </p>
  </section>
</div>
</template>

<style scoped>
.page{width:100%;margin:0;padding:0 2px}
h1{margin:0 0 14px 0}
.card{
  background:var(--card);border:1px solid var(--line);
  border-radius:20px;padding:18px;box-shadow:var(--shadow);margin-bottom:14px
}
h2{margin:0 0 8px 0;font-size:18px}
.muted{color:var(--muted)}
.mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}
.table{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px}
.table div{background:var(--btn);border:1px solid var(--line);border-radius:14px;padding:10px}
@media (max-width:700px){.table{grid-template-columns:1fr}}
</style>
