<script lang="ts">
    const pillars = [
        ['Unapologetic', 'preaching'],
        ['Unashamed', 'adoration'],
        ['Unceasing', 'prayer'],
        ['Unafraid', 'witness']
    ]
</script>
<svelte:head>
    <title>The Way - About Us</title>
</svelte:head>

<!--
<div class='mx-auto uppercase text-tw-blue-100 text-8xl text-shadow-sm text-shadow-black/50 text-center tracking-tight'>
    Our Vision
</div>
-->
<div class='bg-secondary text-secondary-content'>
    <div class='grid grid-cols-3 px-12 pt-6 pb-10 gap-2 md:gap-4 text-2xl md:text-4xl font-extrabold'>
        <div class='col-span-3'>
            Our 4 Pillars
        </div>
        {#each pillars as [text1, text2]}
        <div class='col-span-2 text-right lowercase'>
            {text1}
        </div>
        <div class='capitalize'>
            {text2}
        </div>
        {/each}
    </div>
</div>

<div class='w-dvw bg-base-100 text-base-content pb-12'>
    <div class='prose text-center mx-auto md:p-0 px-12'>
        <div>
            <h2 class='mb-2'>UNAPOLOGETIC PREACHING</h2>
            <h4>2 Tim 4:2, 1 Corinthians 2:1-2</h4>
        </div>

    We will fearlessly proclaim the truth about God and His Gospel by preaching the Scriptures in context, with a dependence on the Holy Spirit to bring eternal life change. We will accomplish this through exposition that has a robust focus on application.

    <div>
        <h2  class='mb-2'>UNASHAMED ADORATION</h2>
        <h4>John 4:24</h4>
    </div>

    We will join our voices and lives with worshipers from every tribe, tongue, and people to exalt Jesus Christ, responding to His matchless name. We will accomplish this through a commitment to worship that is in spirit and in truth.

    <div>
        <h2 class='mb-2'>UNCEASING PRAYER</h2>
        <h4>Ephesians 6:18</h4>
    </div>

    We will seek the Lord, His will, and His way with hearts humble before Him and confident in His plan. We will hold to an unrelenting commitment to consistent and fervent prayer.

    <div>
        <h2 class='mb-2'>UNAFRAID WITNESS</h2>
        <h4>Matthew 9:36-38</h4>
    </div>

    We will invade the darkness of a lost world by proclaiming the truth about Jesus and demonstrating His compassion.

    We will do this through both our words and deeds.
    </div>
</div>
