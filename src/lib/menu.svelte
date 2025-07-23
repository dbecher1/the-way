<script lang="ts">
    export interface MenuLink {
        name: string,
        path: string,
    }
    interface MenuProps {
        links: MenuLink[];
        open: boolean;
    }
    let { links, open }: MenuProps = $props();
    import { clickOut } from "./click_actions";
    import { fade } from "svelte/transition";
</script>

{#if open}
    <div
        role='navigation'
        transition:fade={{duration: 150}}
        onmouseleave={() => open = false}
        class='absolute bg-white text-black w-parent flex flex-col rounded-md top-13 left-0.5 overflow-hidden gap-0 drop-shadow-sm'
    >
        {#each links as link}
            <div
                class='hover:bg-tw-gray-100 py-2'
            >
                <a href={link.path}
                   class='px-4 mx-1' 
                >
                    {link.name}
                </a>
            </div>
        {/each}
    </div>
    
{/if}