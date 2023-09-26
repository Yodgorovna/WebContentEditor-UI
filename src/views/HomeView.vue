<template>
    <div id="editor" />
</template>
  
<script lang="ts">
// @ts-ignore
import Wangeditor from "wangeditor";
import { defineComponent } from 'vue'


export default defineComponent({
    name: "Vue2WangEditor",
    model: {
        prop: "value",
        event: "change",
    },
    props: {
        value: {
            type: String,
            default: undefined,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        focus: {
            type: Boolean,
            default: false,
        },
        height: {
            type: Number,
            default: 300,
        },
        placeholder: {
            type: String,
            default: "",
        },
        zIndex: {
            type: Number,
            default: 500,
        },
        showFullScreen: {
            type: Boolean,
            default: true,
        },
        showMenuTooltips: {
            type: Boolean,
            default: true,
        },
        menuTooltipPosition: {
            type: String,
            default: "up",
        },
        menus: {
            type: Array,
            default: undefined,
        },
        colors: {
            type: Array,
            default: undefined,
        },
        fontNames: {
            type: Array,
            default: undefined,
        },
        fontSizes: {
            type: Array,
            default: undefined,
        },
        lineHeights: {
            type: Array,
            default: undefined,
        },
        emotions: {
            type: Array,
            default: undefined,
        },
        languageType: {
            type: Array,
            default: undefined,
        },
        highlight: {
            type: Object,
            default: undefined,
        },
        onfocus: {
            type: Function,
            default: undefined,
        },
        onblur: {
            type: Function,
            default: undefined,
        },
    },
    data() {
        return {
            editor: null as any,
            editorValue: null,
        };
    },
    watch: {
        disabled(value) {
            if (value) {
                // @ts-ignore
                this.editor.disable();
            } else {
                // @ts-ignore
                this.editor.enable();
            }
        },
        value(value) {
            if (value !== this.editorValue) {
                this.writeValue(value);
            }
        },
    },
    mounted() {
        this.initEditor();
    },
    beforeDestroy() {
        // @ts-ignore
        this.editor.destroy();
        this.editor = null;
    },
    methods: {
        /**
         * 初始化编辑器
         */
        initEditor() {
            const editor: any = new Wangeditor(this.$el);

            // config
            for (const [key, value] of Object.entries(this.$props)) {
                if (value !== undefined) {
                    editor.config[key] = value;
                }
            }
            editor.highlight = this.highlight;
            editor.create();
            this.editor = editor;

            if (this.disabled) {
                editor.disable();
            }

            if (this.value) {
                this.writeValue(this.value);
            }

            setTimeout(() => {
                editor.config.onchange = (html: any) => {
                    this.editorValue = html;
                    this.$emit("change", html);
                };
            }, 200);
        },


        writeValue(value: any) {
            // @ts-ignore
            this.editor?.txt.html(value || "");
        },
    },
})
</script>
  