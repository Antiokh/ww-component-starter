export default {
    options: {
        autoByContent: false,
        linkable: true,
    },
    editor: {
        label: {
            en: 'Starter Component',
        },
        icon: 'box',
    },
    triggerEvents: [{ name: 'click', label: { en: 'On click' }, event: null }],
    properties: {
        title: {
            label: { en: 'Title' },
            type: 'Text',
            defaultValue: { en: 'Starter component' },
            bindable: true,
        },
        subtitle: {
            label: { en: 'Subtitle' },
            type: 'Text',
            defaultValue: { en: 'Edit this component and adapt the schema.' },
            bindable: true,
        },
        centered: {
            label: { en: 'Centered' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
        },
    },
};
