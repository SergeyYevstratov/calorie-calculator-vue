<template>
<div class="grid">

  <!-- 1 -->
  <section class="card">
    <h2><span class="step">1</span> Запиши свої дані</h2>

    <div class="segmented">
      <button :class="{active:form.gender==='female'}" @click="form.gender='female'">Жінка</button>
      <button :class="{active:form.gender==='male'}" @click="form.gender='male'">Чоловік</button>
    </div>

    <div class="row2">
      <div>
        <label>Вік</label>
        <input type="number" v-model.number="form.age" min="10" max="99">
      </div>
      <div>
        <label>Активність</label>
        <select v-model.number="form.activity">
          <option :value="1.2">Легка</option>
          <option :value="1.55">Середня</option>
          <option :value="1.75">Висока</option>
        </select>
      </div>
    </div>

    <div class="row2">
      <div>
        <label>Ріст (см)</label>
        <input type="number" v-model.number="form.height" min="120" max="220">
      </div>
      <div>
        <label>Вага (кг)</label>
        <input type="number" v-model.number="form.weight" min="30" max="250">
      </div>
    </div>

    <label>Ціль</label>
    <div class="segmented">
      <button :class="{active:form.goal==='lose'}" @click="form.goal='lose'">Схуднути</button>
      <button :class="{active:form.goal==='keep'}" @click="form.goal='keep'">Форма</button>
      <button :class="{active:form.goal==='gain'}" @click="form.goal='gain'">Набір</button>
    </div>


    <button class="primary" @click="apply">{{ justUpdated ? 'Оновлено ✅' : 'Оновити результати' }}</button>
    <p class="hint">Порада: натисни “Пояснення”, щоб подивитись формули.</p>
  </section>

  <!-- 2 -->
  <section class="card">
    <h2 class="rowTitle">
      <span><span class="step">2</span> Твої результати</span>
      <RouterLink class="link" to="/info">Пояснення</RouterLink>
    </h2>

    <div class="kpi">
      <div class="kpiRow">
        <div class="kpiTitle">Базальний обмін речовин (BMR)</div>
        <div class="kpiValue">{{ bmr }} ккал/день</div>
      </div>

      <div class="kpiRow">
        <div class="kpiTitle">Індекс маси тіла (BMI)</div>
        <div class="kpiValue">{{ bmi }}</div>
      </div>

      <div class="tag">{{ bmiLabel }}</div>
    </div>

    <div class="divider"></div>

    <div class="kpiRow">
</div>
  </section>

  <!-- 3 -->
  <section class="card">
    <h2><span class="step">3</span> Твоя ціль</h2>

    <div class="goalBox">
      <div class="goalTitle">Рекомендована добова норма</div>
      <div class="goalValue">{{ tdee }} ккал</div>
      <div class="goalSub">Ціль: {{ goalText }}</div>
    </div>

    <div class="chart">
      <svg width="170" height="170" viewBox="0 0 180 180" aria-label="Діаграма макросів">
        <circle cx="90" cy="90" r="60" fill="none" stroke="rgba(0,0,0,.08)" stroke-width="22" />
        <circle cx="90" cy="90" r="60" fill="none" :stroke="colors.p" stroke-width="22"
          :stroke-dasharray="dashP" stroke-dashoffset="0" transform="rotate(-90 90 90)" stroke-linecap="round"/>
        <circle cx="90" cy="90" r="60" fill="none" :stroke="colors.c" stroke-width="22"
          :stroke-dasharray="dashC" :stroke-dashoffset="offC" transform="rotate(-90 90 90)" stroke-linecap="round"/>
        <circle cx="90" cy="90" r="60" fill="none" :stroke="colors.f" stroke-width="22"
          :stroke-dasharray="dashF" :stroke-dashoffset="offF" transform="rotate(-90 90 90)" stroke-linecap="round"/>
        
      </svg>

      <div class="legend">
        <div><span class="dot" :style="{background:colors.p}"></span> Білки: <b>{{ pG }} г</b> ({{ pctP }}%)</div>
        <div><span class="dot" :style="{background:colors.c}"></span> Вуглеводи: <b>{{ cG }} г</b> ({{ pctC }}%)</div>
        <div><span class="dot" :style="{background:colors.f}"></span> Жири: <b>{{ fG }} г</b> ({{ pctF }}%)</div>
      </div>
    </div>
  </section>

</div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'

// Чернетка (те, що вводить користувач у формах)
const form = reactive({
  gender: 'male',
  age: 20,
  height: 170,
  weight: 70,
  activity: 1.55,
  goal: 'keep'
})

// Застосовані значення (саме з них рахуємо результати)
const applied = reactive({ ...form })

// Підвантажимо останні збережені (як “додаток”)
try{
  const saved = JSON.parse(localStorage.getItem('calorie_form') || 'null')
  if(saved){
    Object.assign(form, saved)
    Object.assign(applied, saved)
  }
}catch(e){}

function apply(){
  Object.assign(applied, JSON.parse(JSON.stringify(form)))
  localStorage.setItem('calorie_form', JSON.stringify(applied))
}

const macroSets = {
  keep: { p: 0.25, c: 0.47, f: 0.28, title: 'Бути у формі' },
  lose: { p: 0.28, c: 0.43, f: 0.29, title: 'Схуднути' },
  gain: { p: 0.25, c: 0.49, f: 0.26, title: 'Набір маси' }
}

const bmr = computed(() => {
  const w = Number(applied.weight) || 0
  const h = Number(applied.height) || 0
  const a = Number(applied.age) || 0
  const val = (applied.gender === 'male')
    ? (10*w + 6.25*h - 5*a + 5)
    : (10*w + 6.25*h - 5*a - 161)
  return Math.round(val)
})

const bmi = computed(() => {
  const w = Number(applied.weight) || 0
  const hm = (Number(applied.height) || 0) / 100
  if(!hm) return '0.00'
  return (w / (hm * hm)).toFixed(2)
})

const bmiLabel = computed(() => {
  const x = parseFloat(bmi.value)
  if (x < 18.5) return 'Недостатня вага'
  if (x < 25) return 'Норма'
  if (x < 30) return 'Зайва вага'
  return 'Ожиріння'
})

const tdee = computed(() => Math.round(bmr.value * (Number(applied.activity) || 1)))

const target = computed(() => {
  let t = tdee.value
  if (applied.goal === 'lose') t = t * 0.85
  if (applied.goal === 'gain') t = t * 1.10
  return Math.round(t)
})

const goalText = computed(() => macroSets[applied.goal]?.title || '—')

const pctP = computed(() => Math.round((macroSets[applied.goal]?.p || 0) * 100))
const pctC = computed(() => Math.round((macroSets[applied.goal]?.c || 0) * 100))
const pctF = computed(() => Math.round((macroSets[applied.goal]?.f || 0) * 100))

const pG = computed(() => Math.round((target.value * (macroSets[applied.goal]?.p || 0)) / 4))
const cG = computed(() => Math.round((target.value * (macroSets[applied.goal]?.c || 0)) / 4))
const fG = computed(() => Math.round((target.value * (macroSets[applied.goal]?.f || 0)) / 9))

const CIRC = 2 * Math.PI * 60
const dashP = computed(() => `${CIRC * (macroSets[applied.goal]?.p || 0)} ${CIRC}`)
const dashC = computed(() => `${CIRC * (macroSets[applied.goal]?.c || 0)} ${CIRC}`)
const dashF = computed(() => `${CIRC * (macroSets[applied.goal]?.f || 0)} ${CIRC}`)
const offC = computed(() => -(CIRC * (macroSets[applied.goal]?.p || 0)))
const offF = computed(() => -(CIRC * ((macroSets[applied.goal]?.p || 0) + (macroSets[applied.goal]?.c || 0))))

const colors = { p: '#ef4444', c: '#3b82f6', f: '#f59e0b' }

// Показуємо користувачу, що кнопка реально “робить дію”
const justUpdated = ref(false)
watch(applied, () => {
  justUpdated.value = true
  setTimeout(()=> justUpdated.value = false, 900)
}, { deep: true })
</script>


<style scoped>
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:start}
@media (max-width: 980px){.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:start}}

.card{
  background:var(--card);border:1px solid var(--line);
  border-radius:20px;padding:18px;box-shadow:var(--shadow)
}
.rowTitle{display:flex;justify-content:space-between;align-items:center;gap:10px}
.link{color:var(--accent);text-decoration:none;font-weight:800;font-size:13px}
h2{margin:0 0 12px 0;font-size:18px}
.step{
  display:inline-grid;place-items:center;
  width:28px;height:28px;border-radius:999px;
  background:rgba(108,180,78,.15);color:var(--accent);
  font-weight:900;margin-right:8px
}
label{display:block;margin-top:10px;color:var(--muted);font-size:13px}
input,select{
  width:100%;margin-top:6px;padding:11px 12px;border-radius:14px;
  border:1px solid var(--line);background:transparent;color:var(--text)
}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@media (max-width: 1100px){
  .grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width: 780px){
  .grid{grid-template-columns:1fr}
}

@media (max-width: 420px){.row2{grid-template-columns:1fr}}

.segmented{display:flex;gap:10px;margin:10px 0}
.segmented button{
  flex:1;padding:10px;border-radius:14px;border:1px solid var(--line);
  background:var(--btn);color:var(--text);font-weight:800;cursor:pointer
}
.segmented button.active{background:var(--accent);border-color:transparent;color:white}
.miniNote{
  margin-top:10px;font-size:12px;color:var(--muted);
  background:var(--btn);border:1px solid var(--line);border-radius:14px;padding:10px
}

.kpi{padding:6px 2px}
.kpiRow{display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-top:10px}
.kpiTitle{color:var(--muted);font-size:13px}
.kpiValue{font-weight:900;font-size:18px}
.tag{
  display:inline-block;margin-top:12px;padding:6px 10px;border-radius:999px;
  background:rgba(108,180,78,.15);color:var(--accent);font-weight:900;font-size:12px
}
.divider{height:1px;background:var(--line);margin:14px 0}

.goalBox{
  background:rgba(108,180,78,.12);
  border:1px solid rgba(108,180,78,.22);
  border-radius:18px;padding:14px;text-align:center
}
.goalTitle{color:var(--muted);font-size:13px}
.goalValue{font-size:32px;font-weight:950;margin-top:6px}
.goalSub{margin-top:6px;color:var(--muted);font-size:13px}

.chart{display:grid;grid-template-columns:200px 1fr;gap:14px;align-items:center;margin-top:10px}
@media (max-width: 1100px){
  .grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width: 780px){
  .grid{grid-template-columns:1fr}
}

@media (max-width: 420px){.chart{grid-template-columns:1fr}
svg{max-width:220px;width:100%;height:auto;margin:0 auto;display:block}
.card{padding:14px}
.segmented{flex-direction:column}
.segmented button{width:100%}
}
.legend{display:grid;gap:10px;font-size:14px}
.dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px}

.primary{
  width:100%;margin-top:12px;padding:12px;border-radius:14px;border:none;
  background:var(--accent);color:white;font-weight:900;cursor:pointer
}
.hint{margin:10px 0 0 0;color:var(--muted);font-size:12px}
</style>
