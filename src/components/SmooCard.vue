<template>
  <b-card
    class="smoo-card"
    no-body
  >
    <b-card-header
      header-tag="header"
      v-b-toggle="'collapse-' + _uid"
      style="padding-left: 2.5em; padding-right: 2.5em;"
    >
      <span v-if="$attrs.link" @click.stop style="position: absolute; left: 1em; font-size: 1.25em;" title="Permalink">
        <router-link :to="$attrs.link" style="outline: none;">
          <b-icon icon="link45deg"/>
        </router-link>
      </span>
      <slot name="header">{{ $attrs.header }}</slot>
    </b-card-header>
    <b-collapse
      :id="'collapse-' + _uid"
      :visible="$attrs.visible"
      :accordion="$attrs.accordion"
      @show="$emit('show', $event)"
      @hidden="$emit('hidden', $event)"
    >
      <b-card-body>
        <slot/>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
