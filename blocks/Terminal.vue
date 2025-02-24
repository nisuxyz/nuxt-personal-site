<template lang="pug">
  Container
    div.terminal
      div.terminal__header
        span.terminal__header__description {{ description ? `// ${description}`: '' }}
      div.terminal__body.flex.flex-col
        div(v-for="command in commands")
          div.terminal__body__prompt
            span.terminal__body__prompt__path {{ command.directory }} »
            span.terminal__body__commands__command__name {{ ' ' + command.command }}
          div.terminal__body__commands
              div.terminal__body__commands__command
                code.terminal__body__commands__command__result(v-html="command.result")
      div.terminal__footer.underline
</template>

<style lang="scss">
.terminal {
  @apply bg-stone-800 text-xs;
  color: #fff;
  font-family: "Fira Code", monospace;
  line-height: 1.5;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

.terminal__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.terminal__header__icon {
  background-color: #ff5f56;
  border-radius: 50%;
  display: inline-block;
  height: 1rem;
  width: 1rem;
}

.terminal__header__description {
  color: gray;
}

.terminal__body {
  margin-bottom: 1rem;
}

.terminal__body__prompt {
  color: #50fa7b;
}

.terminal__body__prompt__host {
  color: #bd93f9;
}

.terminal__body__prompt__path {
  color: #ff79c6;
}

.terminal__body__commands__command {
  display: flex;
  justify-content: space-between;
}

.terminal__footer {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.terminal__footer__icon {
  background-color: #f1fa8c;
  border-radius: 50%;
  display: inline-block;
  height: 1rem;
  width: 1rem;
}
</style>

<script setup lang="ts">
import {
  defineBlock,
  repeaterField,
  textAreaSubfield,
  textField,
  textSubfield,
} from "~/.pruvious";
import Container from "../components/Container.vue";

defineBlock({
  description: "Terminal block",
});

const props = defineProps({
  host: textField({
    description: "hostname in terminal prompt",
  }),
  description: textField({
    description: "description of terminal block",
  }),
  commands: repeaterField({
    description: "commands displayed in terminal",
    subfields: {
      directory: textSubfield({ description: "current directory" }),
      command: textSubfield({ description: "command name", required: true }),
      result: textAreaSubfield({ description: "command result" }),
    },
  }),
});

const { host, commands = [] } = props;
</script>
