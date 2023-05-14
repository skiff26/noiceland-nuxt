<template>
	<nav class="header__nav">
		<ul class="header__items">
			<li class="header__item" v-for="{ link, label } in links" :key="label">
				<NuxtLink :to="link">{{ label }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
<script setup lang="ts">
import { IBase } from '~/interfaces';
const links: Array<IBase> = [
	{
		link: '/',
		label: 'Home'
	},
	{
		link: '#latest',
		label: 'Latest'
	},
	{
		link: '#featured',
		label: 'About'
	}
]
</script>