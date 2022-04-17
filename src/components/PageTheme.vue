<template>
    <div class="page">
        <div class="title">Theme</div>
        <div class="grid">
            <div class="surfaces">
                <div class="surface surface-1">--surface-1</div>
                <div class="surface surface-2">--surface-2</div>
                <div class="surface surface-3">--surface-3</div>
                <div class="surface surface-4">--surface-4</div>
            </div>
            <div class="colors">
                <div class="color brand">
                    <div class="bubble"></div>
                    <div>--brand</div>
                </div>
                <div class="color text-1">
                    <div class="bubble"></div>
                    <div>--text-1</div>
                </div>
                <div class="color text-2">
                    <div class="bubble"></div>
                    <div>--text-2</div>
                </div>
                <div class="color text-on-brand">
                    <div class="bubble"></div>
                    <div>--text-on-brand</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.page {
    padding: 1rem;
    background-color: var(--surface-1);
    color: var(--text-1);
    width: min(100%, 600px);
    margin-inline: auto;
}

.title {
    font-size: 3.4rem;
    padding-block: 1rem 2rem;
}

.surfaces {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
}

.surface {
    padding: 3rem;
    display: inline-block;
    box-shadow: 0px 0px 3px 1px #0000007c;
    border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
}

.surface-1 {
    background-color: var(--surface-1);
}

.surface-2 {
    background-color: var(--surface-2);
}

.surface-3 {
    background-color: var(--surface-3);
}

.surface-4 {
    background-color: var(--surface-4);
}

.color {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
}

.bubble {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 3px #0000007c;
}

.brand {
    color: var(--brand)
}

.brand > .bubble {
    background-color: var(--brand);
}

.text-1 {
    color: var(--text-1)
}

.text-1 > .bubble {
    background-color: var(--text-1);
}

.text-2 {
    color: var(--text-2)
}

.text-2 > .bubble {
    background-color: var(--text-2);
}

.text-on-brand {
    color: var(--text-on-brand)
}

.text-on-brand > .bubble {
    background-color: var(--text-on-brand);
}
</style>