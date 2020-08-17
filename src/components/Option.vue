<template>
  <div
    class="Option"
    :class="{ active: this.option.toggled }"
    @click="$emit( 'toggle', option.id )"
  >
    <p>{{ option.text }}</p>
  </div>
</template>

<script>
export default {
  name: "Option",
  props: {
    option: Object,
  },
};
</script>

<style scoped>
.Option {
  display: grid;
  place-items: center;
  top: -2px;
  position: relative;
  margin: 0.3em auto;
  width: 8em;
  height: 2.5em;
  border-radius: 6px;
  border-bottom: 2px solid hsl(212, 13%, 27%);
  border-top: 2px solid hsl(211, 13%, 48%);
  /* background-color: var(--base); */
  background-image: linear-gradient(
    hsl(211, 13%, 48%) 0%,
    15%,
    hsl(212, 13%, 39%) 20%,
    90%,
    hsl(212, 13%, 27%) 95%
  );
  transition: 0.05s cubic-bezier(0.18, 1.52, 0.74, 1.69);
}

.Option::before {
  content: "";
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  border-radius: 6px;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 1),
    inset 0 0 10px 3px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.1s cubic-bezier(0.18, 1.52, 0.74, 1.69);
}

.Option:hover {
  transform: scale(1.05);
}

.Option p {
  margin: 0;
  color: hsl(211, 13%, 78%);
  font-family: "Quantico", sans-serif;
}

.active {
  top: 0;
  background-image: linear-gradient(
    hsl(212, 13%, 24%),
    hsl(212, 13%, 34%) 20%,
    85%,
    hsl(212, 13%, 22%) 90%
  );
  border-top: none;
  border-bottom: none;
  transform: scale(0.95);
}

.active::before {
  opacity: 1;
}

.active:hover {
  transform: scale(0.95);
}

.active p {
  text-shadow: 0 0 4px hsl(221, 8%, 90%);
  color: #fff;
}

.active:hover p {
  text-shadow: 0 0 4px hsl(221, 8%, 100%), 2px 3px 8px hsl(200, 8%, 70%);
}
</style>