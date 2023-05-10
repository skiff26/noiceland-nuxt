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
			<div class="latest-posts__more"><a href="" class="latest-posts__link-view-more">view all latest posts</a></div>
		</div>
	</section>
</template>
<script setup lang="ts">
import { LatestPosts } from '~/posts';
</script>