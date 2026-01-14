<template>
  <svg
    class="logoMark"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Логотип"
    role="img"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- 4 rounded squares -->
      <rect x="4" y="4" width="26" height="26" rx="6" />
      <rect x="34" y="4" width="26" height="26" rx="6" />
      <rect x="4" y="34" width="26" height="26" rx="6" />
      <rect x="34" y="34" width="26" height="26" rx="6" />

      <!-- plus -->
      <path d="M17 11v12" />
      <path d="M11 17h12" />

      <!-- minus -->
      <path d="M41 17h12" />

      <!-- multiply -->
      <path d="M12 42l10 10" />
      <path d="M22 42L12 52" />

      <!-- equals -->
      <path d="M41 46h12" />
      <path d="M41 52h12" />
    </g>
  </svg>
</template>

<style scoped>
.logoMark{
  width: var(--logoSize, 42px);
  height: var(--logoSize, 42px);
  display: block;
}
</style>
