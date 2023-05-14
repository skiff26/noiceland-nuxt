<template>
	<section class="page__latest-posts latest-posts wow animate__animated animate__fadeIn" id="latest">
		<div class="latest-posts__container">
			<div class="latest-posts__title posts-title">LATEST POSTS</div>
			<div class="posts__items latest-posts__items">
				<div class="posts__item item-posts" v-for="{ type, title, author, path} in LatestPosts" :key="title">
					<div class="item-posts__image"><a href=""><img :src="path" :alt="title"></a></div>
					<div class="item-posts__type">{{ type }}</div>
					<div class="item-posts__title"><a href="">{{ title }}</a></div>
					<div class="item-posts__autor">{{ author }}</div>
				</div>
			</div>
			<TheLatestPostsButton />
		</div>
	</section>
</template>
<script setup lang="ts">
import { LatestPosts } from '~/posts';
const newPosts = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
console.log(newPosts.data.value)
</script>