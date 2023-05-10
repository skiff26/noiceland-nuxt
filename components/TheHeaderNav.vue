<template>
	<nav class="header__nav">
		<ul class="header__items">
			<li class="header__item" v-for="{ link, label } in links" :key="label">
				<a :href="link">{{ label }}</a>
			</li>
		</ul>
	</nav>
</template>
<script setup lang="ts">
import { IBase } from '~/interfaces';
const links: Array<IBase> = [
	{
		link: '#home',
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