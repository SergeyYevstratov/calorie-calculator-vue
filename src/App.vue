<template>
  <div :class="['app', theme]">
    <!-- HEADER -->
    <header class="header">
      <div class="container headerRow">
        <div class="left">
          <!-- Лого + назва = посилання на головну -->
          <RouterLink to="/" class="brandLink">
            <LogoMark class="logoImg" />
            <div class="brand brandStack">
              <div class="title">FIERY</div>
              <div class="subtitle">CALORIE</div>
            </div>
          </RouterLink>
        </div>

        <!-- desktop/tablet nav -->
        <nav class="nav desktopNav">
          <RouterLink to="/auth" class="navbtn" v-if="!user">Увійти</RouterLink>
          <RouterLink to="/" class="navbtn">Калькулятор</RouterLink>
          <RouterLink to="/info" class="navbtn">Довідка</RouterLink>

          <button
            class="navbtn icon"
            @click="toggleTheme"
            :title="theme==='light' ? 'Темна тема' : 'Світла тема'"
          >
            {{ theme === 'light' ? '🌙' : '☀️' }}
          </button>

          <div class="userChip" v-if="user">
            <span class="dot"></span>
            <span class="name">{{ user.name }}</span>
          </div>

          <button class="navbtn" v-if="user" @click="doLogout">Вийти</button>
        </nav>

        <!-- mobile burger -->
        <button class="burger" @click="mobileOpen = true" aria-label="Меню">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- mobile drawer -->
      <div class="backdrop" v-if="mobileOpen" @click="mobileOpen=false"></div>
      <aside class="drawer" :class="{open: mobileOpen}" @click.stop>
        <div class="drawerHead">
          <!-- Лого + назва = посилання на головну + закриває меню -->
          <RouterLink to="/" class="drawerBrand" @click="mobileOpen=false">
            <LogoMark class="logoSm" />
            <div>
              <div class="dTitle brandStackMobile">FIERY<span>CALORIE</span></div>
              <div class="dSub">Меню</div>
            </div>
          </RouterLink>

          <button class="close" @click="mobileOpen=false" aria-label="Закрити">✕</button>
        </div>

        <div class="drawerLinks">
          <RouterLink to="/" class="dLink" @click="mobileOpen=false">Калькулятор</RouterLink>
          <RouterLink to="/info" class="dLink" @click="mobileOpen=false">Довідка</RouterLink>
          <RouterLink to="/auth" class="dLink" v-if="!user" @click="mobileOpen=false">Увійти / Реєстрація</RouterLink>
          <button class="dLink" v-if="user" @click="doLogout(); mobileOpen=false">Вийти</button>
        </div>

        <div class="drawerActions">
          <button class="dAction" @click="toggleTheme">
            {{ theme === 'light' ? 'Увімкнути темну тему' : 'Увімкнути світлу тему' }}
          </button>
          <div class="who" v-if="user">
            Увійшов: <b>{{ user.name }}</b>
          </div>
        </div>
      </aside>
    </header>

    <!-- CONTENT -->
    <main class="content">
      <div class="container">
        <router-view />
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container footerRow">
        <!-- Як у хедері: лого + назва (одна клікабельна зона) -->
        <RouterLink to="/" class="brandLink brandLinkFooter">
          <LogoMark class="logoSm" />
          <div class="brand brandStack">
            <div class="title">FIERY</div>
            <div class="subtitle">CALORIE</div>
          </div>
        </RouterLink>

        <!-- ПРАВОРУЧ: 2026 -> На головну -> Про проєкт -->
        <div class="footerNav">
          <span class="copy">© 2026</span>
          <RouterLink class="fLink" to="/">Калькулятор</RouterLink>
          <RouterLink class="fLink" to="/about">Про проєкт</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUser, logout } from './services/auth'
import LogoMark from './components/LogoMark.vue'

const router = useRouter()
const theme = ref('light')
const mobileOpen = ref(false)

const user = computed(() => getCurrentUser())

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'light'
})

function toggleTheme(){
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

function doLogout(){
  logout()
  router.push('/auth')
}
</script>

<style>
:root{
  --bg:#f5f6f7; --text:#0f172a; --card:#ffffff; --muted:#64748b;
  --line:#e5e7eb; --shadow: 0 10px 25px rgba(0,0,0,.08);
  --accent:#6cb44e; --btn:#eef2f7;
}
.dark{
  --bg:#0b1220; --text:#e5e7eb; --card:#0f172a; --muted:#94a3b8;
  --line:#1f2937; --shadow: 0 14px 30px rgba(0,0,0,.35);
  --accent:#6cb44e; --btn:#111c2f;
}
*{box-sizing:border-box}
html,body,#app{height:100%;width:100%}
body{margin:0;font-family:system-ui;background:var(--bg);color:var(--text)}
.app{min-height:100vh;background:var(--bg);color:var(--text)}

/* container */
.container{
  max-width:1200px;
  margin:0 auto;
  width:100%;
  padding:0 22px;
}

/* HEADER */
.header{
  position:sticky;top:0;z-index:10;
  background:var(--card);
  border-bottom:1px solid var(--line);
}
.headerRow{
  display:grid;
  grid-template-columns:auto 1fr auto;
  align-items:center;
  gap:14px;
  padding:12px 0;
}
.left{display:flex;align-items:center;gap:12px;min-width:240px}

/* brand link (shared header + footer) */
.brandLink{
  display:flex;
  align-items:center;
  gap:12px;
  text-decoration:none;
  color:inherit;
  cursor:pointer;
}
.brandLink:hover{opacity:.9}

.logoImg{width:42px;height:42px;border-radius:0;display:block;color:var(--text);object-fit:contain;flex-shrink:0;filter:drop-shadow(0 0 6px rgba(255,140,0,.28))}
.logoSm{width:34px;height:34px;border-radius:0;display:block;color:var(--text);object-fit:contain;flex-shrink:0;filter:drop-shadow(0 0 5px rgba(255,140,0,.24))}

.brand .title{font-weight:950;font-size:18px;line-height:1}
.brandStack{display:flex;flex-direction:column;justify-content:center;line-height:1;gap:2px}
.brandStack .title{letter-spacing:.08em;margin:0}
.brandStack .subtitle{font-weight:900;font-size:14px;letter-spacing:.12em;color:var(--muted);margin:0}
.brandStackMobile{display:flex;flex-direction:column;gap:2px;line-height:1;justify-content:center}
.brandStackMobile span{font-size:12px;letter-spacing:.12em;color:var(--muted);margin-top:2px}

/* NAV */
.nav{
  display:flex;
  align-items:center;
  gap:10px;
  justify-content:flex-end;
  flex-wrap:nowrap;
  max-width:100%;
}
@media (max-width:980px){
  .nav{
    width:100%;
    justify-content:flex-start;
    overflow:auto;
    padding-bottom:2px;
    -webkit-overflow-scrolling:touch;
  }
  .nav::-webkit-scrollbar{height:6px}
  .nav::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:999px}
}

.navbtn{
  text-decoration:none;color:var(--text);
  background:var(--btn);border:1px solid var(--line);
  padding:8px 12px;border-radius:12px;font-weight:800;
  white-space:nowrap;
}
.navbtn.router-link-active{outline:2px solid rgba(108,180,78,.35)}
.navbtn.icon{width:40px;display:grid;place-items:center;padding:8px}

.userChip{
  display:flex;align-items:center;gap:8px;
  padding:8px 10px;border:1px solid var(--line);border-radius:999px;
  background:transparent;color:var(--text);font-weight:800;white-space:nowrap;
}
.userChip .dot{width:8px;height:8px;border-radius:50%;background:var(--accent);display:inline-block}
.userChip .name{max-width:160px;overflow:hidden;text-overflow:ellipsis}

/* CONTENT */
.content{padding:22px 0}

/* burger + drawer */
.burger{
  display:none;
  border:1px solid var(--line);
  background:var(--btn);
  border-radius:12px;
  padding:10px;
  cursor:pointer;
  justify-self:end;
  margin-left:auto
}
.burger span{display:block; width:18px; height:2px; background:var(--text); margin:3px 0; border-radius:999px}
.desktopNav{display:flex}
.backdrop{position:fixed; inset:0; background:rgba(0,0,0,.35); z-index:19}
.drawer{
  position:fixed; top:0; right:-320px;
  width:320px; max-width:88vw; height:100vh;
  background:var(--card); border-left:1px solid var(--line);
  z-index:20; box-shadow:var(--shadow);
  transition:right .2s ease;
  display:flex; flex-direction:column
}
.drawer.open{right:0}
.drawerHead{display:flex; align-items:center; gap:10px; padding:14px; border-bottom:1px solid var(--line)}
.drawerBrand{
  display:flex;
  align-items:center;
  gap:10px;
  text-decoration:none;
  color:inherit;
  cursor:pointer;
  min-width:0;
}
.drawerBrand:hover{opacity:.9}
.dTitle{font-weight:950}
.dSub{font-size:12px; color:var(--muted); margin-top:2px}
.close{margin-left:auto; border:1px solid var(--line); background:var(--btn); border-radius:12px; padding:8px 10px; cursor:pointer}
.drawerLinks{padding:12px; display:flex; flex-direction:column; gap:10px}
.dLink{
  width:100%;
  text-align:left;
  text-decoration:none;
  color:var(--text);
  background:var(--btn);
  border:1px solid var(--line);
  padding:12px;
  border-radius:14px;
  font-weight:900;
  cursor:pointer
}
.drawerActions{margin-top:auto; padding:12px; border-top:1px solid var(--line)}
.dAction{width:100%; padding:12px; border-radius:14px; border:none; background:var(--accent); color:white; font-weight:950; cursor:pointer}
.who{margin-top:10px; color:var(--muted); font-size:13px}

/* FOOTER */
.footer{
  background:var(--card);
  border-top:1px solid var(--line);
}
.footerRow{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  padding:12px 0;
}

/* footer brand: same as header but smaller title */
.brandLinkFooter .brand .title{font-size:16px}
.brandLinkFooter .brandStack .subtitle{font-size:12px}

/* right footer nav */
.footerNav{
  display:flex;
  align-items:center;
  gap:14px;
  margin-left:auto;
  justify-content:flex-end;
  color:var(--muted);
  font-weight:700;
}
.copy{color:var(--muted)}

.fLink{
  color:var(--muted);
  text-decoration:none;
  font-weight:700;
  white-space:nowrap;
}
.fLink:hover{text-decoration:underline}

/* RESPONSIVE */
@media (min-width:1600px){
  .container{padding:0 28px}
}

@media (max-width:980px){
  .headerRow{grid-template-columns:1fr;align-items:flex-start}
  .left{width:100%}
}

@media (max-width:720px){
  .desktopNav{display:none}
  .burger{display:block}
  .headerRow{grid-template-columns:auto 1fr auto; align-items:center}
  .burger{justify-self:end}

  .container{padding:0 14px}
  .brand .title{font-size:16px}
  .left{min-width:auto}
  .content{padding:14px 0}

  /* footer: brand on top, links below, aligned right */
  .footerRow{flex-wrap:wrap;align-items:flex-start}
  .footerNav{width:100%;justify-content:flex-end;flex-wrap:wrap;gap:10px}
}
</style>
