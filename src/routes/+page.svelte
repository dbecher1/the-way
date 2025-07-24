<script lang="ts">
    import { fade } from 'svelte/transition';
    import { cubicIn } from 'svelte/easing';
    import ChurchSVG from '$lib/svg/church.svelte';
    import PursueSVG from '$lib/svg/pursue.svelte';

    const noTransitions = false;
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
</script>

<div
	id='bg'
	class="bg-[url(/the-way-bg1.jpg)] w-full h-full bg-center bg-no-repeat bg-local absolute -top-30 left-0 -z-50 bg-cover blur-[4px] brightness-50 contrast-125 opacity-75"
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

<div class='h-screen flex flex-col'>

    <div class='mx-auto my-50 uppercase text-gray-100 text-8xl text-shadow-sm text-shadow-black/50 text-center tracking-tight'>

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
        <div
        >
            <span
                in:fade={textTransition}
                onintroend={() => showText4 = true}>
                A path to 
            </span>
            {@render pursue()}
        </div>  
        {/if}
        
    </div>

    <div class='mx-auto uppercase text-tw-blue-100 text-8xl text-shadow-sm text-shadow-black/50 text-center tracking-tight invisible'>
        Our Vision
    </div>

</div>