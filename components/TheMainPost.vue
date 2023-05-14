<template>
	<section class="page__illustration illustration wow animate__animated animate__fadeIn" id="home">
		<div class="illustration__container">
			<div class="illustration__body">
				<div class="illustration__image">
					<NuxtLink to="/post/0"><img :src="MainPost.path" :alt="MainPost.title"></NuxtLink>
				</div>
				<div class="illustration__description">
					<div class="illustration__ill">{{ MainPost.type }}</div>
					<a href="" class="illustration__title">{{ MainPost.title }}</a>
					<div class="illustration__text" v-html="MainPost.text"></div>
					<a href="" class="illustration__autor">{{ MainPost.author }}</a>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import { MainPost } from '~/posts';
</script>