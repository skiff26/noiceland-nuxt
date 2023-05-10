<template>
	<div class="footer__name">
		<div class="footer__logo"><a href="">Noiceland</a></div>
		<div class="footer__copy f-title">© {{ year }} Noiceland™, all rights reserved</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>