<template>
  <b-modal :id="$attrs.id" hide-footer>
    <template #modal-title><kbd>&lt;stage&gt;</kbd> alias values for <kbd>send</kbd> and <kbd>sendall</kbd></template>
    <p>
      These are short memorable alias values known by the server to quickly reference the overworld stage
      of a kingdom for the <kbd>send</kbd> and <kbd>sendall</kbd> commands.
    </p>
    <table class="table table-striped table-borderless table-sm mb-0">
      <thead>
        <tr> <th>Alias</th> <th>Kingdom</th> </tr>
      </thead>
      <tbody>
        <tr v-for="(v, k) in kingdoms" :key="k">
          <th><kbd>{{ k }}</kbd></th>
          <td>{{ v }}</td>
        </tr>
      </tbody>
    </table>
  </b-modal>
</template>

<script lang="ts" src="./stages-alias-modal.ts"/>
