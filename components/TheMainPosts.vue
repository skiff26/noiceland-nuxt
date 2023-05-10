<template>
	<section class="page__posts posts wow animate__animated animate__fadeIn">
		<div class="posts__container">
			<div class="posts__items true">
				<div class="posts__item item-posts" v-for="{ type, path, title, author } in Posts" :key="title">
					<div class="item-posts__image"><a href=""><img :src="path" :alt="title"></a></div>
					<div class="item-posts__type">{{ type }}</div>
					<div class="item-posts__title"><a href="" v-html="title"></a></div>
					<div class="item-posts__autor">{{ author }}</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import { Posts } from '~/posts';
</script>