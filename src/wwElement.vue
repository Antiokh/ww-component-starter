<template>
    <component
        :is="tag"
        class="ww-component-starter"
        :class="{ '-link': hasLink, '-centered': content.centered }"
        v-bind="properties"
        @click="handleClick"
    >
        <div class="ww-component-starter__body">
            <div class="ww-component-starter__title">
                {{ title }}
            </div>
            <div class="ww-component-starter__subtitle">
                {{ subtitle }}
            </div>
        </div>
    </component>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        wwFrontState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ['trigger-event'],
    setup(props) {
        const { hasLink, tag, properties } = wwLib.wwElement.useLink();

        const title = computed(() => wwLib.wwLang.getText(props.content.title));
        const subtitle = computed(() => wwLib.wwLang.getText(props.content.subtitle));

        return {
            hasLink,
            tag,
            properties,
            title,
            subtitle,
        };
    },
    methods: {
        handleClick(event) {
            this.$emit('trigger-event', { name: 'click', event });
        },
    },
};
</script>

<style scoped>
.ww-component-starter {
    display: flex;
    width: 100%;
    min-height: 120px;
    padding: 20px;
    border: 1px solid #d7dce5;
    border-radius: 16px;
    background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
    color: #162033;
}

.ww-component-starter.-link {
    cursor: pointer;
}

.ww-component-starter.-centered {
    justify-content: center;
    text-align: center;
}

.ww-component-starter__body {
    display: grid;
    gap: 8px;
}

.ww-component-starter__title {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
}

.ww-component-starter__subtitle {
    font-size: 14px;
    line-height: 1.4;
    color: #55637a;
}
</style>
