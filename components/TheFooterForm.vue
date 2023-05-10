<template>
	<div class="footer__email">
		<div class="footer__email-title f-title">Subscribe to newsletter</div>
		<form action="#">
			<input type="email" placeholder="Email address">
			<button type="submit" @click.prevent="submit">Send</button>
		</form>
	</div>
</template>
<script setup lang="ts">
const submit = () => {
	alert("Email submit.")
}
</script>