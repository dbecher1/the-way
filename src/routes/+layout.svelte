<script lang="ts">
	import '../app.css';

	let { children } = $props();
	let aboutOpen = $state(false);
	import Menu, { type MenuLink } from '$lib/menu.svelte';
	import { scale } from 'svelte/transition';
</script>

{#snippet title_button(text: string, href: string)}
	<a {href} class='my-auto px-4 py-3 text-white hover:text-tw-gray-100 hover:bg-black/5 rounded-md'>
		{text}
	</a>
{/snippet}

{#snippet parent_button(name: string, open: boolean, links: MenuLink[])}
	<button
		onmousedown={() => aboutOpen = true}
		class='my-auto px-4 py-3 text-white hover:text-tw-gray-100 hover:bg-black/5 rounded-md relative'
	>
		{name}
		<Menu {links} {open} />
	</button>
{/snippet}

<nav id='tw-header-bar' class='flex justify-between bg-tw-blue-100/80'>
	<a href='/'
		class='size-48 h-20 my-auto ml-10 mt-2 px-1 hover:bg-black/10 rounded-sm'>
		<img src='/img/logo-title.png'
			class=''
			alt={'The Way'}
		/>
	</a>
	<div class='flex justify-around gap-8 mr-10 text-lg font-semibold'>
			{@render parent_button(
				'Learn More', aboutOpen, [
					{name: 'About Us', path: '/about'},
					{name: 'Ministries', path: '/ministries'}
				],
			)}
			{@render title_button('Watch', '/watch')}
			{@render title_button('Contact Us', '/contact')}
			 <a href='/give'
				transition:scale={{}}
			 	class='bg-tw-orange h-8 text-xl px-4 my-auto
				rounded-md text-white hover:text-tw-gray-100 hover:drop-shadow-sm hover:scale-105 hover:bg-tw-orange'
			 >
			 Give
			</a>
		</div>
</nav>

{@render children()}

<div
	id='tw-footer'
	class='w-screen h-fit py-8 px-48 bg-tw-blue-100 flex flex-col cotent-between text-lg text-gray-200 text-shadow-sm text-shadow-black/20 gap-10 mt-12'
>
	<div
		class='flex justify-between'
	>
		<div>
			<div>The Way</div>
			<div class='-mb-1'>3704 Benson Road</div>
			<div>Garner, NC, 27529</div>
		</div>
		<div>
			<div>Phone: 919.722.0761</div>
			<div>
				Email: 
				<a href='mailto:info@the-way.church'>
					info@the-way.church
				</a>
			</div>
		</div>
		<div class='mr-8'>
			<div>
				Socials:
			</div>
			<div>
				TODO
			</div>
		</div>
	</div>
	<div class='text-sm'>
		&copy; 2025 The Way. All Rights Reserved.
	</div>
</div>