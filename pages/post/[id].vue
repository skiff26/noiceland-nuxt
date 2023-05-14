<template>
	<main class="page">
		<div class="page__container">
			<h1 class="page__title">{{ post.title }}</h1>
			<div class="page__content">
				<div class="page__image"><img :src="post.path" :alt="post.title"></div>
				<div class="page__text">
					<p v-html="post.text"></p>
				</div>
				<div class="page__author">{{ post.author }}</div>
			</div>
		</div>
	</main>
</template>
<script setup lang="ts">
import { MainPost } from '~/posts';
import { IPost } from '~/interfaces';
import { useRoute } from 'vue-router';
const route = useRoute();
useHead({
  title: `Noiceland | Post №${route.params.id}`,
})
let post: IPost;
if (+route.params.id === 0) {
	post = MainPost;
}
</script>