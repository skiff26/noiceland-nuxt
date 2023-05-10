<template>
	<div class="footer__first-block">
		<div class="footer__categories">
			<div class="footer__categories-title f-title">Categories</div>
			<ul class="footer__categories-list">
				<div class="categories_1">
					<li class="footer__categories-item" v-for="{ link, label } in first" :key="label">
						<a :href="link" class="footer__categories-link f-link">{{ label }}</a>
					</li>
				</div>
				<div class="categories_2">
					<li class="footer__categories-item" v-for="{ link, label } in second" :key="label">
						<a :href="link" class="footer__categories-link f-link">{{ label }}</a>
					</li>
				</div>
				<div class="categories_3">
					<li class="footer__categories-item" v-for="{ link, label } in third" :key="label">
						<a :href="link" class="footer__categories-link f-link">{{ label }}</a>
					</li>
				</div>
				<div class="categories_4">
					<li class="footer__categories-item" v-for="{ link, label } in fourth" :key="label">
						<a :href="link" class="footer__categories-link f-link">{{ label }}</a>
					</li>
				</div>
			</ul>
		</div>
		<TheFooterForm />
	</div>
</template>
<script setup lang="ts">
import { IBase } from '~/interfaces';
const first: Array<IBase> = [
	{
		link: '',
		label: 'Animation'
	},
	{
		link: '',
		label: 'Interactive Design'
	},
]
const second: Array<IBase> = [
	{
		link: '',
		label: 'Architecture'
	},
	{
		link: '',
		label: 'Miscellaneous'
	}
]
const third: Array<IBase> = [
	{
		link: '',
		label: 'Graphic Design'
	},
	{
		link: '',
		label: 'Photography'
	}
]
const fourth: Array<IBase> = [
	{
		link: '',
		label: 'Illustration'
	},
	{
		link: '',
		label: 'Product Design'
	}
]
</script>