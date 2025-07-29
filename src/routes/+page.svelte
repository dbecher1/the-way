<script lang="ts">
    import { fade } from 'svelte/transition';
    import { cubicIn } from 'svelte/easing';
    import ChurchSVG from '$lib/svg/church.svelte';
    import PursueSVG from '$lib/svg/pursue.svelte';
    import {Clock, Icon} from 'svelte-hero-icons';

    const noTransitions = true;
    const useSvg = true;

    let showText1 = $state(noTransitions);
    let showText2 = $state(noTransitions);
    let showText3 = $state(noTransitions);
    let showText4 = $state(noTransitions);

    $effect(() => {
        if (!showText1) {
            showText1 = true;
        }
    })

    let textTransition = {
        duration: useSvg ? 500 : 900,
        y: 50,
        easing: cubicIn
    };

    const carouselContents = [
        {
            src: '/img/community-1.jpg',
            contentText: 'Our DNA',
            buttonText: 'Learn More',
            href: '/about'
        },
        {
            src: '/img/building-1.jpg',
            contentText: 'Support Us',
            buttonText: 'Give Today',
            href: '/give'
        },
        {
            src: '/img/prayer-1.jpg',
            contentText: 'Need Prayer?',
            buttonText: "Okay",
            href: '/about'
        },
        {
            src: '/img/preaching-1.jpg',
            contentText: 'Dive Into the Word',
            buttonText: 'Watch Now',
            href: '/watch'
        },
    ]
</script>

<svelte:head>
    <title>The Way - Home</title>
</svelte:head>

{#snippet fancy_text(text: string)}
    <span
        class='normal-case font-script text-9xl/12 tracking-normal'
    >
        {text}
    </span>
{/snippet}

{#snippet Church()}
    {#if useSvg}
    <ChurchSVG show={showText2} onIntroEnd={() => showText3 = true}/>
    {:else}
        {#if showText1}
        <span class='text-primary -ml-10'>
        {@render fancy_text('Church')}
        </span>
        {/if}
    {/if}
{/snippet}

{#snippet pursue()}
    {#if useSvg}
    <PursueSVG show={showText4}/>
    {:else}
        {#if showText4}
        <div class='text-secondary -mt-15' in:fade={textTransition}>
            {@render fancy_text('pursue')}
        </div>
        {/if}
    {/if}
{/snippet}

<div id='bg'
	class="bg-[url(/img/the-way-bg1.jpg)] w-dvw h-full bg-center bg-no-repeat bg-local absolute -top-30 left-0 -z-50 bg-cover blur-[4px] brightness-50 contrast-125"
    >
</div>

<div class='h-fit flex flex-col'>

    <div id='logo' class='mx-auto my-24 md:my-32 mb-30 uppercase text-gray-100 text-5xl md:text-8xl text-shadow-sm text-shadow-black/50 text-center tracking-tight'>

        {#if showText1}
        <div
            in:fade={textTransition}
            onintroend={() => {
                if (useSvg) {
                    showText2 = true
                } else {
                    showText3 = true;
                }
            }}
        >
            <div class='-mb-3'>
                A {@render Church()}
            </div>
            to belong to
        </div>
        {/if}
        {#if showText3}
        <div>
            <span
                in:fade={textTransition}
                onintroend={() => showText4 = true}>
                A path to 
            </span>
            {@render pursue()}
        </div>  
        {/if}
    </div>

    <div class='bg-base-100 text-base-content text-center w-dvw'>
        <div class='prose mx-auto px-8 pb-12 pt-6'>
            <h1 class='text-accent p-3'>Welcome to The Way!</h1>
            <div>
                We’re here to help people find their way to God, grow in their faith, and make a real difference in the world.
                At The Way, we’re all about truthful, scripturally sound preaching, worship, and supporting one another, and our community, through prayer and service.
                Whether you’re new to church or have been around for a while, there’s a place for you here. Join us as we step into this new chapter, with a vision to bring hope and light to our community.
            </div>
        </div>
    </div>
    <!--
    prose heading style
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
    roughly these tailwind classes:
    font-extrabold text-4xl mb-3.5 mt-0
    -->
    <div class='bg-primary'>
        <div class='mx-auto px-8 py-12 grid grid-cols-3 text-primary-content text-xl font-semibold gap-4'>
            <div class='font-extrabold text-4xl mb-3.5 mt-0 col-span-2 text-center'>
                Ministries and Services
            </div>
            <div class='col-start-3 row-start-2 text-sec'>
                Sunday Mornings<br>
                <Icon src={Clock} class='size-6 inline my-auto'/>
                <span class='text-lg'>10:30AM</span>
            </div>
            <div class='col-start-3 row-start-3'>
                Wednesday Evenings<br>
                <Icon src={Clock} class='size-6 inline my-auto'/>
                <span class='text-lg'>6PM</span>
            </div>
        </div>
    </div>

    <div class='carousel text-neutral-content text-center text-4xl font-bold text-shadow-sm'>
        {#each carouselContents as {src, contentText, buttonText, href}}
        <div class='carousel-item w-100 relative'>
            <img {src} alt={contentText} class='brightness-50'/>
            <h1 class='absolute left-1/2 top-1/2 translate-[-50%]'>
                {contentText}
            </h1>
            <a {href} class='btn btn-primary btn-lg absolute bottom-0 left-1/2 translate-[-50%]'>{buttonText}</a>
        </div>
        {/each}
    </div>
</div>