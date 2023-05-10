<template>
	<div class="footer__second-block">
		<div class="footer__info">
			<div class="footer__info-title f-title">Information</div>
			<ul class="footer__info-list">
				<li class="footer__info-item" v-for="{ link, label } in informationLinks" :key="label">
					<a :href="link" class="footer__info-link f-link">{{ label }}</a>
				</li>
			</ul>
		</div>
		<div class="footer__follow">
			<div class="footer__follow-title f-title">follow us</div>
			<ul class="footer__follow-list" v-for="{ link, label } in mediaLinks" :key="label">
				<li class="footer__follow-item">
					<a :href="link" class="footer__follow-link f-link">{{ label }}</a>
				</li>
			</ul>
		</div>
		<div class="footer__template">
			<div class="footer__template-title f-title">Template</div>
			<ul class="footer__template-list">
				<li class="footer__template-item f-link">Image License Info</li>
				<li class="footer__template-item f-link">Powered by Webflow</li>
			</ul>
		</div>
	</div>
</template>
<script setup lang="ts">
import { IBase } from '~/interfaces';
const informationLinks: Array<IBase> = [
	{
		link: '',
		label: 'about'
	},
	{
		link: '',
		label: 'contact'
	},
	{
		link: '',
		label: 'terms'
	}
]
const mediaLinks: Array<IBase> = [
	{
		link: '',
		label: 'instagram'
	},
	{
		link: '',
		label: 'facebook'
	},
	{
		link: '',
		label: 'twitter'
	},
]
</script>