<script lang="ts">
	import '../app.css';
	import { fade, scale } from 'svelte/transition';
	import { Icon, Bars3, XMark } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	import Instagram from '$lib/svg/instagram.svelte';
	import Facebook from '$lib/svg/facebook.svelte';

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
		class='size-38 md:size-48 h-16 md:h-20 my-auto ml-7 md:ml-10 mt-2 px-1 hover:bg-neutral/10 rounded-sm'>
		<img src='/img/logo-title.png'
			class=''
			alt={'The Way'}
		/>
	</a>
{/snippet}

{#snippet title_button(text: string, href: string)}
	<a {href} class='my-auto btn btn-primary btn-ghost text-primary-content'>
		{text}
	</a>
{/snippet}

{#snippet dropdown_button(name: string)}
<details class='dropdown my-auto'>
	<summary class=' btn btn-primary btn-ghost text-primary-content'>
		{name}
	</summary>
	<ul class='menu dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm'>
		{#each paths1 as {name, href}}
			<li>
				<a {href}>{name}</a>
			</li>
		{/each}
	</ul>	
</details>
{/snippet}

{#snippet sidebar()}
	<div id='sidebar'
		class='md:hidden w-full h-full fixed bg-primary flex flex-col z-50'
		transition:slide={{axis: 'x'}}
	>
		<div id='sidebar-header' class='flex justify-between relative w-full mt-2 h-fit'>
			<img src='/img/logo-title.png'
				class='h-18 mx-auto'
				alt={'The Way'}
			/>

			<button id='sidebar-close-btn' onclick={() => sidebarOpen = false}
				class='absolute right-0 inset-y-0 size-10 mr-5 my-auto btn btn-primary btn-ghost btn-square p-1'
			>
				<Icon src={XMark} class='stroke-primary-content'/>
			</button>
		</div>
		<div id='sidebar-body' class='flex h-full'>
			<div id='sidebar-links' class='mt-14 mx-auto flex flex-col gap-8 text-center'>
				{#each paths2 as {name, href}}
				<a {href}
					onclick={() => sidebarOpen = false}
					class='mx-auto text-3xl text-primary-content hover:text-primary-content/70'
				>
					{name}
				</a>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

{#if sidebarOpen}
	{@render sidebar()}
{/if}

<main class='flex-1'>

<nav id='tw-header-bar' class='flex w-full justify-between content-center bg-primary'>
	{@render logo_link()}
	<div class='flex-1'></div>
	<div class='not-md:hidden flex justify-around mr-8'>
		{@render dropdown_button('Learn More')}
		{@render title_button('Watch', '/watch')}
		{@render title_button('Contact Us', '/contact')}
			<a href='/give'
			class='my-auto btn btn-secondary ml-2'>
			Give
		</a>
	</div>

	<button onclick={() => sidebarOpen = true}
		class='md:hidden mr-7 my-auto btn btn-primary btn-ghost btn-square p-2 size-12'
	>
		<Icon src={Bars3} class='stroke-primary-content'/>
	</button>
</nav>

{@render children()}

</main>

<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
	<div>
		<h6 class='footer-title'>The Way</h6>
		<div class='link link-hover'>
			3704 Benson Road
			<br>
			Garner, NC, 27529
		</div>
	</div>
	<nav>
		<h6 class='footer-title'>Contact Us</h6>
		<div>Phone: 919.722.0761</div>
		<a href='mailto:info@the-way.chuch' class='link link-hover'>
			info@the-way.church
		</a>
	</nav>
	<nav>
		<h6 class='footer-title'>Socials</h6>
		<div class='flex gap-4'>
			<a href='/' class=''>
				<Facebook class='size-8 fill-white hover:fill-gray-200'/>
			</a>
			<a href='/' class=''>
				<Instagram class='size-8 fill-white hover:fill-gray-200'/>
			</a>
		</div>
	</nav>
	
</footer>
<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
	&copy; 2025 The Way. All Rights Reserved.
</footer>
