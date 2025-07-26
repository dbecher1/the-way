<script lang="ts">
	import '../app.css';
	import { fade, scale } from 'svelte/transition';
	import { Icon, Bars3, XMark } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';

	let { children } = $props();

	let aboutOpen = $state(false);
	let sidebarOpen = $state(false);

	const paths1 = [
		{name: 'About Us', href: '/about'},
		{name: 'Ministries', href: '/ministries'}
	];
	const paths2 = [
		{name: 'Home', href:'/'},
		{name: 'Watch', href:'/watch'},
		{name: 'Give', href:'/give'},
		...paths1
	];
</script>

{#snippet logo_link()}
	<a href='/'
		class='size-38 md:size-48 h-16 md:h-20 my-auto ml-7 md:ml-10 mt-2 px-1 hover:bg-black/10 rounded-sm'>
		<img src='/img/logo-title.png'
			class=''
			alt={'The Way'}
		/>
	</a>
{/snippet}

{#snippet dropdown_menu()}
<div
	role='navigation'
	transition:fade={{duration: 150}}
	onmouseleave={() => aboutOpen = false}
	class='absolute bg-white text-black w-parent flex flex-col rounded-md top-13 left-0.5 overflow-hidden gap-0 drop-shadow-sm'
>
	{#each paths1 as {name, href}}
		<div class='hover:bg-tw-gray-100 py-2'>
			<a {href} class='px-4 mx-1' >
				{name}
			</a>
		</div>
	{/each}
</div>
{/snippet}

{#snippet title_button(text: string, href: string)}
	<a {href} class='my-auto px-4 py-3 text-white hover:text-tw-gray-100 hover:bg-black/5 rounded-md'>
		{text}
	</a>
{/snippet}

{#snippet parent_button(name: string)}
	<button
		onmousedown={() => aboutOpen = !aboutOpen}
		class='my-auto px-4 py-3 text-white hover:text-tw-gray-100 hover:bg-black/5 rounded-md relative'
	>
		{name}
		{#if aboutOpen}
			{@render dropdown_menu()}
		{/if}
	</button>
{/snippet}

{#snippet sidebar()}
	<div id='sidebar'
		class='md:hidden w-full h-full fixed bg-tw-blue-200 flex flex-col z-50'
		transition:slide={{axis: 'x'}}
	>
		<div id='sidebar-header' class='flex justify-between relative w-full mt-2 h-fit'>
			<img src='/img/logo-title.png'
				class='h-18 mx-auto'
				alt={'The Way'}
			/>

			<button id='sidebar-close-btn' onclick={() => sidebarOpen = false}
				class='absolute right-0 inset-y-0 size-9 mr-5 my-auto cursor-pointer hover:bg-tw-gray-400/50 rounded-sm'
			>
				<Icon src={XMark} class='stroke-white'/>
			</button>
		</div>
		<div id='sidebar-body' class='flex h-full'>
			<div id='sidebar-links' class='mt-14 mx-auto flex flex-col gap-8 text-center'>
				{#each paths2 as {name, href}}
				<div>
					<a {href}
						class='mx-auto text-3xl text-tw-gray-100 hover:text-white'
					>
						{name}
					</a>
					<div class='invisible hover:visible h-[1px] w-7/8 mt-2 bg-white'></div>
				</div>
					
				{/each}
			</div>
		</div>
	</div>
{/snippet}

{#if sidebarOpen}
	{@render sidebar()}
{/if}

<main class='flex-1'>

<nav id='tw-header-bar' class='flex w-full justify-between content-center bg-tw-blue-100/80'>
	{@render logo_link()}
	<div class='not-md:hidden flex justify-around lg:gap-8 mr-10 lg:text-lg font-semibold flex-1 max-w-1/2'>
		{@render parent_button('Learn More')}
		{@render title_button('Watch', '/watch')}
		{@render title_button('Contact Us', '/contact')}
			<a href='/give'
			class='bg-tw-orange h-7 lg:h-8 text-lg lg:text-xl px-4 my-auto
			rounded-md text-white hover:text-tw-gray-100 hover:drop-shadow-sm hover:scale-105 hover:bg-tw-orange'>
			Give
		</a>
	</div>

	<button onclick={() => sidebarOpen = true}
		class='md:hidden mr-7 size-12 cursor-pointer p-2 my-auto hover:bg-tw-gray-400/50 rounded-sm'
	>
		<Icon src={Bars3} class='stroke-tw-gray-100'/>
	</button>
</nav>

{@render children()}

</main>

<footer id='tw-footer' class='w-full h-fit bg-tw-blue-100'>
	<div class='md:px-24 px-8 py-8 flex flex-col content-between text-sm md:text-lg text-white text-shadow-sm text-shadow-black/10 gap-10'>
		<div class='flex justify-between flex-1 flex-wrap gap-4'>
			<div>
				<div>The Way</div>
				<div class='-mb-1'>3704 Benson Road</div>
				<div>Garner, NC, 27529</div>
			</div>
			<div class='not-md:text-right'>
				<div>Phone: 919.722.0761</div>
				<div>
					Email: 
					<a href='mailto:info@the-way.church'>
						info@the-way.church
					</a>
				</div>
			</div>
			<div>
				<div>
					Socials: TODO
				</div>
			</div>
		</div>
		<div class='md:text-sm text-[8pt] '>
			&copy; 2025 The Way. All Rights Reserved.
		</div>
	</div>
</footer>