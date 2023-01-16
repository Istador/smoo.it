<template>
  <span
    v-b-tooltip.html.topright="() => title()"
    :class="{ 'state-component': true, [ state ]: true }"
  >
    <b-icon
      v-if="!result || typeof result !== 'object' || !players || state != 'online'"
      :icon="icon"
      :animation="animation"
    />

    <b-btn
      v-if="result && typeof result === 'object' && players && state == 'online'"
      size="sm"
      :variant="(tooOld ? 'outline-success' : 'success')"
      v-b-modal="'smoo-server-state-players-' + _uid"
      :disabled="!playersVisible"
    >
      <b-icon icon="person-circle"/>
      {{ players.length + (MaxPlayers ? ' / ' + MaxPlayers : '') }}
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

      <b-overlay :show="state == 'loading'">
        <table class="table table-striped table-borderless table-sm mb-0 smoo-server-players">
          <thead>
            <tr>
              <th>Player</th>
              <th>Stage</th>
              <th>Costume</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, idx) of players" :key="name + ';' + idx + ';' + player.Name">
              <td>{{ player.Name || '?' }}</td>
              <td>{{ kingdoms[player.Stage] || player.Stage || '' }}</td>
              <td class="costume">
                <div class="costume-cap"  v-if="player.Costume && player.Costume.Cap">{{ player.Costume.Cap }}</div>
                <div class="costume-body" v-if="player.Costume && player.Costume.Body">{{ player.Costume.Body }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </b-overlay>
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
.smoo-server-players {
  .costume-cap::before { content: 'Cap: '; opacity: 0.5; }
  .costume-body::before { content: 'Body: '; opacity: 0.5; }
}
</style>

<script lang="ts" src="./SmooServerState.ts"/>
