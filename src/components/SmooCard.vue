<template>
  <b-card
    class="smoo-card"
    no-body
  >
    <b-card-header
      header-tag="header"
      v-b-toggle="'collapse-' + _uid"
      style="padding-right: 2.5em;"
    >
      <slot name="header">{{ $attrs.header }}</slot>
    </b-card-header>
    <b-collapse
      :id="'collapse-' + _uid"
      :visible="$attrs.visible"
      :accordion="$attrs.accordion"
      @show="$emit('show', $vnode.key)"
      @hidden="$emit('hidden', $vnode.key)"
    >
      <b-card-body>
        <slot/>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
