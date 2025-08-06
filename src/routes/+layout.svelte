<script lang="ts">
	import '../app.css';
	import Instagram from '$lib/svg/instagram.svelte';
	import Facebook from '$lib/svg/facebook.svelte';

	let { children } = $props();

	const paths = [
		{text: 'Give', href:'/'},
	];
</script>

{#snippet logo_link()}
	<a href='/'
		class='size-30 sm:size-38 md:size-48 h-12 sm:h-16 md:h-20 my-auto mt-2 px-1 hover:bg-neutral/10 rounded-sm'>
		<img src='/img/logo-title.png'
			class=''
			alt={'The Way'}
		/>
	</a>
{/snippet}

{#snippet title_button(text: string, href: string)}
	{#if text == 'Give'}
		<a {href} class='my-auto btn btn-secondary btn-sm lg:btn-md btn-wide mx-1 md:mx-4'>{text}</a>
	{:else}
		<a {href} class='my-auto btn btn-primary btn-ghost text-primary-content'>{text}</a>
	{/if}
{/snippet}

{#snippet navbar()}
<nav id='tw-header-bar' class='flex w-full justify-between content-center bg-primary px-6 sm:px-7 md:px-10 lg:px-13'>
	{@render logo_link()}
	<div class='flex-1'></div>
	<div class='flex justify-around'>
		{#each paths as {text, href}}
			{@render title_button(text, href)}
		{/each}
	</div>

</nav>
{/snippet}

{#snippet footer()}
<div class='bg-neutral text-neutral-content'>
	<div class="footer footer-horizontal not-md:text-[10pt] p-6 md:p-10">
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
			<div>
				Email: 
				<a href='mailto:info@the-way.chuch' class='link link-hover'>
					info@the-way.church
				</a>
			</div>
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
	<aside class="p-6 md:px-10 text-[8pt] sm:text-[10pt] space-y-1.5 sm:space-y-0">
		<div>
			&copy; 2025 The Way. All Rights Reserved.
		</div>
		<div>
			Website by Ministry Brands.
		</div>
	</aside>
</div>
{/snippet}

<!-- CONTENTS HERE -->
 <div class='fixed inset-0 w-dvw bg-[url("/img/bg-mask-scaled.png")] bg-fixed brightness-25 bg-center bg-cover mix-blend-multiply opacity-90'>

</div>
<div class='w-full max-w-[100rem] min-w-[320px] mx-auto flex flex-col flex-1 z-1'>
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

