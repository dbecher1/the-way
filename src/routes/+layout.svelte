<script lang="ts">
	import '../app.css';
	import { Icon, Bars3, XMark } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	import Instagram from '$lib/svg/instagram.svelte';
	import Facebook from '$lib/svg/facebook.svelte';

	let { children } = $props();

	let sidebarOpen = $state(false);

	const paths = [
		{text: 'About Us', href: '/'},
		{text: 'Ministries', href: '/'},
		{text: 'Watch', href:'/'},
		{text: 'Give', href:'/'},
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
	{#if text == 'Give'}
		<a {href} class='my-auto btn btn-secondary ml-2'>{text}</a>
	{:else}
		<a {href} class='my-auto btn btn-primary btn-ghost text-primary-content'>{text}</a>
	{/if}
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
				{#each [{text: 'Home', href: '/'}, ...paths] as {text, href}}
				<a {href}
					onclick={() => sidebarOpen = false}
					class='mx-auto text-3xl text-primary-content hover:text-primary-content/70'
				>
					{text}
				</a>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

{#if sidebarOpen}
	{@render sidebar()}
{/if}

{#snippet navbar()}
<nav id='tw-header-bar' class='flex w-full justify-between content-center bg-primary'>
	{@render logo_link()}
	<div class='flex-1'></div>
	<div class='not-md:hidden flex justify-around mr-8'>
		{#each paths as {text, href}}
			{@render title_button(text, href)}
		{/each}
	</div>
	<button onclick={() => sidebarOpen = true}
		class='md:hidden mr-7 my-auto btn btn-primary btn-ghost btn-square p-2 size-12'
	>
		<Icon src={Bars3} class='stroke-primary-content'/>
	</button>
</nav>
{/snippet}

{#snippet footer()}
<div class='bg-neutral text-neutral-content'>
	<div class="footer sm:footer-horizontal p-10">
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
	</div>
	<aside class="footer sm:footer-horizontal p-10">
		&copy; 2025 The Way. All Rights Reserved.
	</aside>
</div>
{/snippet}

<div class='fixed inset-0 w-dvw bg-[url("/img/bg-mask.jpg")] bg-fixed brightness-25 bg-center bg-cover mix-blend-multiply opacity-90'>

</div>

<!-- CONTENTS HERE -->
<div class='w-full max-w-[100rem] min-w-sm mx-auto flex flex-col flex-1 z-1'>
<header>
	{@render navbar()}
</header>
<main class='flex-1'>
	{@render children()}
</main>
<footer>
	{@render footer()}
</footer>

</div>

