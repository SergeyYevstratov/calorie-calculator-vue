<template>
  <div class="aboutPage">

    <!-- Заголовок -->
    <section class="card hero">
      <h1>Про проєкт</h1>
      <p>
        Даний веб-додаток розроблено як курсова робота з метою створення
        зручного інструменту для розрахунку добової потреби в калоріях
        та макроелементах (білки, жири, вуглеводи).
      </p>
    </section>

    <!-- Мета -->
    <section class="card">
      <h2>Мета розробки</h2>
      <p>
        Основною метою є створення простого та зрозумілого калькулятора,
        який дозволяє користувачу швидко отримати індивідуальні показники
        харчування з урахуванням фізіологічних параметрів та рівня активності.
      </p>
    </section>

    <!-- Функції -->
    <section class="card">
      <h2>Основні функції</h2>
      <ul class="list">
        <li>введення параметрів користувача (стать, вік, зріст, вага);</li>
        <li>розрахунок BMR, BMI та TDEE;</li>
        <li>вибір цілі: схуднення, підтримка або набір маси;</li>
        <li>автоматичний розрахунок макронутрієнтів;</li>
        <li>візуалізація результатів у вигляді діаграми;</li>
        <li>збереження даних користувача через LocalStorage;</li>
        <li>підтримка світлої та темної теми інтерфейсу.</li>
      </ul>
    </section>

    <!-- Як працює -->
    <section class="card">
      <h2>Принцип роботи</h2>
      <p>
        Користувач вводить свої дані, після чого система розраховує
        базальний обмін речовин (BMR), індекс маси тіла (BMI)
        та добову потребу в калоріях (TDEE).
      </p>

      <p>
        Далі, залежно від обраної цілі, отримане значення калорій
        коригується та розподіляється між білками, жирами
        і вуглеводами.
      </p>
    </section>

    <!-- Технології -->
    <section class="card">
      <h2>Використані технології</h2>

      <div class="techGrid">
        <div class="tech">Vue 3</div>
        <div class="tech">Vite</div>
        <div class="tech">JavaScript</div>
        <div class="tech">HTML</div>
        <div class="tech">CSS</div>
      </div>
    </section>

    <!-- Висновок -->
    <section class="card">
      <h2>Висновок</h2>
      <p>
        У результаті виконання курсової роботи було розроблено
        функціональний веб-додаток, який дозволяє проводити
        базові розрахунки харчування та може використовуватись
        як допоміжний інструмент для контролю раціону.
      </p>
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
.aboutPage{
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
  font-size:30px;
  font-weight:900;
}

.hero p{
  margin:0;
  color:var(--muted);
  line-height:1.6;
}

h2{
  margin:0 0 12px 0;
  font-size:20px;
}

p{
  margin:0 0 10px 0;
  line-height:1.6;
}

.list{
  margin:0;
  padding-left:20px;
  line-height:1.8;
}

.techGrid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.tech{
  padding:12px;
  border-radius:14px;
  background:var(--btn);
  border:1px solid var(--line);
  text-align:center;
  font-weight:700;
}

@media (max-width: 800px){
  .techGrid{
    grid-template-columns:1fr 1fr;
  }
}

@media (max-width: 500px){
  .techGrid{
    grid-template-columns:1fr;
  }
}
</style>