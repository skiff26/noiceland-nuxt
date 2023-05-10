<template>
	<section class="page__featured-posts featured-posts wow animate__animated animate__fadeIn" id="featured">
		<div class="posts__container">
			<h2 class="featured-posts__title posts-title">featured posts</h2>
			<div class="posts__items featured-posts__items">
				<div class="posts__item item-posts featured-posts__item" v-for="{ type, title, path, author } in FeaturedPosts" :key="title">
					<div class="item-posts__image">
						<a href="" class="featured-link"><img :src="path" :alt="title"></a>
					</div>
					<div class="item-posts__type">{{ type }}</div>
					<div class="item-posts__title"><a href="" v-html="title"></a></div>
					<div class="item-posts__autor">{{ author }}</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import { FeaturedPosts } from '~/posts';
</script>