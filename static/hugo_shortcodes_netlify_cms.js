CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    fields: [{
        name: "id",
        label: "Youtube Video ID",
        widget: "string"
    }],
    pattern: /{{< youtube\s+(?<id>[A-Za-z0-9\-]+)\s+>}}/,
    fromBlock: function(match) {
        return {
            id: match[1],
        };
    },
    toBlock: function(obj) {
        if (obj.id.includes('https://youtu.be/')) {
            obj.id = obj.id.replace('https://youtu.be/', '');
        }
        return `{{< youtube ${obj.id.trim()} >}}`;
    },
    toPreview: function(obj) {
        return `<img src="https://i3.ytimg.com/vi/${obj.id}/hqdefault.jpg" alt="Youtube Video"/>`;
    },
});