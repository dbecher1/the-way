<script lang="ts">
    import { fade } from 'svelte/transition';
    import { cubicIn } from 'svelte/easing';
    import ChurchSVG from '$lib/svg/church.svelte';
    import PursueSVG from '$lib/svg/pursue.svelte';
    import intersection from '$lib/actions/intersection';
    import makevisible from '$lib/actions/makevisible';

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

    let intersecting = $state(false);
</script>

<svelte:head>
    <title>The Way - Home</title>
</svelte:head>

<div
	id='bg'
	class="bg-[url(/img/the-way-bg1.jpg)] w-full h-full bg-center bg-no-repeat bg-local absolute -top-30 left-0 -z-50 bg-cover blur-[4px] brightness-50 contrast-125 opacity-75"
>
</div>

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
        <span class='text-tw-blue-100 -ml-10'>
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
        <div class='text-tw-orange -mt-15' in:fade={textTransition}>
            {@render fancy_text('pursue')}
        </div>
        {/if}
    {/if}
{/snippet}

{#snippet home_info_button(id: string, href: string, text: string)}
    <a
        {href}
        {id}
        class='hover:bg-tw-blue-100 bg-tw-blue-200 text-xl py-1 px-4 rounded-xl text-shadow-none text-gray-300 hover:text-gray-400 font-semibold tracking-tight hover:shadow-md shadow-sm hover:scale-105 border-2 border-black/40'
    >
        <span class='scale-100'>{text}</span>
    </a>
{/snippet}

<div class='h-fit flex flex-col'>

    <div id='logo' class='mx-auto mt-32 md:mt-50 mb-30 uppercase text-gray-100 text-5xl md:text-8xl text-shadow-sm text-shadow-black/50 text-center tracking-tight'>

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

    <div id='home-info-mobile'
        class='md:hidden bg-white w-7/8 h-full'
    >

    </div>

    <div id='home-info-web'
        class='hidden flex mx-auto w-5/8 text-gray-50 text-shadow-md text-shadow-tw-black text-4xl justify-between'
        use:intersection={{
            cb: () => intersecting = true
        }} 
    >
        
        <div class='my-auto flex flex-col gap-8 invisible' use:makevisible={{show: intersecting, slide: 'Left', noTransitions}}>
            <div
                id='home-info-addr-service-times'
                class='text-center flex flex-col gap-7'
            >
                <div>
                    <div class='font-script text-8xl -mb-7 text-tw-orange'>
                        Join us at
                    </div>
                    <div id='home-info-service-times'>
                        Sunday mornings at 10:30AM
                    </div>
                </div>
                <div id='home-info-addr'>
                    <div>
                        3704 Benson Road
                    </div>
                    <div>
                        Garner, NC, 27529
                    </div>
                </div>
            </div>
            <div id='home-info-btns' class='flex justify-evenly'>
                {@render home_info_button('plan-visit-btn', '/', 'Plan Your Visit')}
                {@render home_info_button('watch-btn', '/watch', 'Watch Now')}
            </div>
        </div>
        
        <div class='w-lg opacity-0 invisible' use:makevisible={{show: intersecting, slide: 'Right', noTransitions}}>
            <img
                src='/img/the-way-home-1.jpg'
                alt='Join us today'
                class='object-scale-down mask-x-from-80% mask-x-to-100% mask-y-from-80% mask-y-to-95% mask-radial-from-60% mask-radial-to-95%'
            />
        </div>
        
    </div>
    
</div>