<template>
  <span
    v-b-tooltip.html.topright="() => title()"
    :class="{ 'state-component': true, [ state ]: true }"
  >
    <b-icon
      v-if="!result || typeof result !== 'object'"
      :icon="icon"
      :animation="animation"
    />

    <b-btn
      v-if="result && typeof result === 'object'"
      size="sm"
      :variant="(tooOld ? 'outline-success' : 'success')"
      v-b-modal="'smoo-server-state-players-' + _uid"
      :disabled="!players.length"
    >
      <b-icon icon="person-circle"/>
      {{ players.length }} / {{ currentSettings.MaxPlayers }}
    </b-btn>

    <b-modal
      v-if="players && players.length"
      :id="'smoo-server-state-players-' + _uid"
      lazy
      hide-footer
    >
      <template #modal-title>
        Players on <code>{{ name }}</code>
      </template>

      <table class="table table-striped table-borderless table-sm mb-0">
        <thead>
          <tr>
            <th>Player</th>
            <th>Stage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, idx) of players" :key="name + ';' + idx + ';' + player.Name">
            <td>{{ player.Name }}</td>
            <td>{{ stages[player.Stage] || 'unknown' }}</td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </span>
</template>

<style lang="scss">
.state-component {
  .btn { font-size: 0.8em; white-space: nowrap; }
  &.loading { color: orange; }
  &.offline { color: red; }
  &.online { color: green; }
  &.unknown { color: black; }
}
</style>

<script lang="ts" src="./SmooServerState.ts"/>
