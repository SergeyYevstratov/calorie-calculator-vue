<template>
<div class="page">
  <h1>Про проєкт</h1>

  <section class="card">
    <p>
      Цей веб-додаток розроблено як курсова робота. Мета — створити зручний інструмент для розрахунку
      добової потреби в калоріях та макроелементах (білки/жири/вуглеводи) з сучасним інтерфейсом.
    </p>

    <p><b>Функції:</b></p>
    <ul>
      <li>Логін користувача (локально через LocalStorage)</li>
      <li>Розрахунок BMR, BMI та TDEE</li>
      <li>Вибір цілі: схуднення / підтримка / набір</li>
      <li>Розрахунок макросів і діаграма</li>
      <li>Світла/темна тема</li>
    </ul>

    <p><b>Технології:
      Vue 3, Vite, HTML, CSS, JavaScript, </b> Vue 3, Vite, HTML, CSS, JavaScript, </p>
    </b> Vue 3, Vite, HTML, CSS, JavaScript, </p>
  </section>
</div>
</template>

<style scoped>
.page{width:100%;margin:0;padding:0 2px}
h1{margin:0 0 14px 0}
.sep{border:none;border-top:1px solid var(--line);margin:14px 0}

.card{
  background:var(--card);border:1px solid var(--line);
  border-radius:20px;padding:18px;box-shadow:var(--shadow)
}

@media (max-width:720px){
  .page{padding:0 2px}
  h1{font-size:28px}
}
</style>