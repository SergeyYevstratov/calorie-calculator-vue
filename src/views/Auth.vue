<template>
  <div class="wrap">
    <div class="card">
      <div class="head">
        <LogoMark class="logo" />
        <div>
          <h1>Вхід / Реєстрація</h1>
          <p class="auth-hint">
  Авторизація користувача у веб-додатку.
</p>
        </div>
      </div>

      <div class="tabs">
        <button :class="{active:tab==='login'}" @click="tab='login'">Вхід</button>
        <button :class="{active:tab==='register'}" @click="tab='register'">Реєстрація</button>
      </div>

      <form v-if="tab==='login'" @submit.prevent="doLogin">
        <label>Email</label>
        <input v-model.trim="l.email" type="email" placeholder="name@example.com" required>

        <label>Пароль</label>
        <input v-model="l.password" type="password" placeholder="••••••" required>

        <button class="primary" :disabled="!canLogin">Увійти</button>
      </form>

      <form v-else @submit.prevent="doRegister">
        <label>Імʼя</label>
        <input v-model.trim="r.name" placeholder="Напр. Сергій" required>

        <label>Email</label>
        <input v-model.trim="r.email" type="email" placeholder="name@example.com" required>

        <label>Пароль</label>
        <input v-model="r.password" type="password" minlength="4" placeholder="мін. 4 символи" required>

        <button class="primary" :disabled="!canRegister">Створити акаунт</button>
      </form>

      <div v-if="msg" class="msg">{{ msg }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { login, register } from '../services/auth'
import LogoMark from '../components/LogoMark.vue'

const router = useRouter()
const tab = ref('login')
const msg = ref('')

const l = ref({ email:'', password:'' })
const r = ref({ name:'', email:'', password:'' })

const canLogin = computed(() => l.value.email.includes('@') && l.value.password.length >= 1)
const canRegister = computed(() => r.value.name.length >= 2 && r.value.email.includes('@') && r.value.password.length >= 4)

function doLogin(){
  msg.value=''
  const res = login(l.value)
  if(!res.ok){ msg.value = res.message; return }
  router.push('/')
}
function doRegister(){
  msg.value=''
  const res = register(r.value)
  if(!res.ok){ msg.value = res.message; return }
  router.push('/')
}
</script>

<style scoped>
.wrap{min-height:70vh;display:grid;place-items:center;padding:16px}
.card{
  width:min(540px,100%);
  background:var(--card);border:1px solid var(--line);
  border-radius:22px;padding:18px;box-shadow:var(--shadow)
}
.head{display:flex;gap:12px;align-items:center;margin-bottom:10px}
.logo{--logoSize:44px;display:block;color:var(--text);flex:0 0 auto}
h1{margin:0;font-size:18px}
p{margin:4px 0 0 0;color:var(--muted);font-size:12px}
.tabs{display:flex;gap:10px;margin:14px 0}
.tabs button{
  flex:1;padding:10px;border-radius:14px;border:1px solid var(--line);
  background:var(--btn);font-weight:900;cursor:pointer
}
.tabs button.active{background:var(--accent);border-color:transparent;color:white}
label{display:block;margin-top:10px;color:var(--muted);font-size:13px}
input{
  width:100%;margin-top:6px;padding:12px 12px;border-radius:14px;
  border:1px solid var(--line);background:transparent;color:var(--text)
}
.primary{
  width:100%;margin-top:14px;padding:12px;border-radius:14px;border:none;
  background:var(--accent);color:white;font-weight:950;cursor:pointer
}
.primary:disabled{opacity:.5;cursor:not-allowed}
.msg{margin-top:12px;background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.25);padding:10px;border-radius:14px;color:var(--text)}
</style>
