<template>
  <div
    class="alert animate__animated animate__fadeInDown"
    :class="type"
    role="alert"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: ['type', 'text'],
};
</script>

<style></style>
