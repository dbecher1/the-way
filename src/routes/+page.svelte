<script lang="ts">
    import { fade } from 'svelte/transition';
    import { cubicIn } from 'svelte/easing';
    import ChurchSVG from '$lib/svg/church.svelte';
    import PursueSVG from '$lib/svg/pursue.svelte';
    import {Clock, Icon} from 'svelte-hero-icons';

    const noTransitions = true;
    const useSvg = true;

    const onclick = (e: Event) => {
        e.preventDefault();
        const element = e.currentTarget as HTMLAnchorElement;
        const id = new URL(element.href).hash.replace('#', '');
        const targetElement = document.getElementById(id);
        if (targetElement) {
                window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    }

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
            buttonText: "Reach Out",
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

{#snippet clock()}
    <Icon src={Clock} class='size-4 inline my-auto'/>
{/snippet}

<div class='h-fit flex flex-col'>

    <div class='overflow-x-clip relative'>
        <img src='/img/the-way-bg1.jpg' alt='The Way' class="w-screen object-cover absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16/50 -z-1 blur-[4px] brightness-50 contrast-125"/>
    </div>
    <div id='logo' class='mx-auto w-full my-8 md:my-16 uppercase text-gray-100 text-5xl md:text-6xl lg:text-7xl text-shadow-sm text-shadow-black/50 text-center tracking-tight'>
        
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
        <div class='grid grid-cols-2 mx-auto gap-12 pt-2 px-10 lg:p-0'>
            <a href='#learn-more' {onclick} class='md:max-w-50 btn btn-outline btn-primary not-md:max-w-32 btn-sm md:btn-lg lg:btn-xl btn-wide ml-auto'>Learn More</a>
            <a href='/' class='md:max-w-50 btn btn-outline btn-secondary not-md:max-w-32 btn-sm md:btn-lg lg:btn-xl btn-wide mr-auto'>Give</a>
        </div>
    </div>

    <div class='bg-base-100 text-base-content text-center w-full'>
        <div class='mx-auto px-4 py-4 md:py-6 lg:py-8'>
            <h1 class='text-secondary text-shadow-neutral text-shadow-sm/20 pb-4 md:pb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Welcome to The Way!</h1>
            <div class='text-base-content/80 space-y-3 md:space-y-5 sm:max-w-7/8 md:max-w-3/4 lg:max-w-5/8 xl:max-w-1/2 sm:mx-auto pb-2 md:pb-4 text-[10pt] sm:text-sm md:text-md'>
                <div>
                    We&apos;re here to help people find their way to God, grow in their faith, and make a real difference in the world. Here at The Way, we&apos;re all about truthful, scripturally sound preaching, worship, and supporting one another, and our community, through prayer and service.
                </div>
                <div>
                    Whether you&apos;re new to church or have been around for a while, there&apos;s a place for you here. Join us as we step into this new chapter, with a vision to bring hope and light to our community.
                </div>
            </div>
        </div>
    </div>
    <section id='learn-more' class='bg-primary'>
        <div class='sm:max-w-7/8 md:max-w-3/4 lg:max-w-5/8 xl:max-w-1/2 sm:mx-auto py-4 md:py-6 lg:py-8'>
            <div class='mx-auto flex flex-col text-primary-content font-semibold pb-4 sm:pb-6 md:pb-8 lg:pb-12'>
                <div class='font-extrabold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl py-3 sm:py-5 md:py-7 lg:py-10'>
                    Ministries and Services
                </div>
                <!--
                <div class='not-md:hidden row-start-2 col-start-1 col-span-2 row-span-6 mx-auto w-168 overflow-hidden'>
                    <img src='/img/sunday-service.jpg' alt='Sunday Service' class='hidden object-none -translate-y-40  brightness-75 '/>
                </div>
                -->
                <div class='flex justify-center gap-8 sm:gap-12 md:gap-16 text-sm sm:text-base md:text-lg lg:text-xl'>
                    <div class='text-center p-1 whitespace-nowrap '>
                        Sunday Mornings<br class=''>
                        {@render clock()}
                        <span class='text-sm md:text-base lg:text-lg'>10:30AM</span>
                    </div>
                    <div class='text-center p-1 whitespace-nowrap'>
                        Wednesday Evenings<br>
                        {@render clock()}
                        <span class='text-sm md:text-base lg:text-lg'>6PM</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>