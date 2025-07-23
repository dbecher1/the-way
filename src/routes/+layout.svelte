<script lang="ts">
	import '../app.css';

	let { children } = $props();
	let aboutOpen = $state(false);
	import Menu, { type MenuLink } from '$lib/menu.svelte';
	import { scale } from 'svelte/transition';
</script>

{#snippet title_button(name: any)}
	<a
		href={name.toLowerCase()}
		class='my-auto px-4 py-3 text-white hover:text-tw-gray-100 hover:bg-black/5 rounded-md'
	>
		{name}
	</a>
{/snippet}

{#snippet parent_button(name: string, links: MenuLink[])}
	<button
		onmousedown={() => aboutOpen = true}
		class='my-auto px-4 py-3 text-white hover:text-tw-gray-100 hover:bg-black/5 rounded-md relative'
	>
		{name}
		<Menu
			links={links}
			open={aboutOpen}
		/>
	</button>
{/snippet}

<nav class='flex justify-between bg-tw-blue-100'>
	<a href='/'
		class='size-48 h-20 my-auto ml-10 mt-2 px-1 hover:bg-black/10 rounded-sm'>
		<img src='/logo-title.png'
			class=''
			alt={'The Way'}
		/>
	</a>
	<div class='flex justify-around gap-8 mr-10 text-lg font-semibold'>
			{@render parent_button(
				'Learn More', [
					{name: 'About Us', path: '/about'},
					{name: 'Ministries', path: '/ministries'}
				]
			)}
			{@render title_button('Watch')}
			{@render title_button('Contact Us')}
			 <a href='/give'
				transition:scale={{}}
			 	class='bg-tw-orange h-8 text-lg px-4 my-auto
				rounded-md text-white hover:text-tw-gray-100 hover:drop-shadow-sm'
				
			 >
			 	Give
			</a>
		</div>
</nav>
{@render children()}

