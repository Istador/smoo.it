<template>
  <span
    v-b-tooltip.html.topright="() => title()"
    :class="{ 'state-component': true, [ state ]: true }"
  >
    <b-icon
      v-if="(!result || typeof result !== 'object' || !players || state != 'online') && icon != 'skull'"
      :icon="icon"
      :animation="animation"
    />

    <font-awesome-icon v-if="(!result || typeof result !== 'object' || !players || state != 'online') && icon == 'skull'"  icon="fa-solid fa-skull"/>

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
      @show="hasStages && stages.fetch()"
    >
      <template #modal-title>
        Players on <code>{{ name }}</code>
      </template>

      <b-overlay :show="state == 'loading'" variant="transparent">
        <table class="table table-striped table-borderless table-sm mb-0 smoo-server-players">
          <thead>
            <tr>
              <th>Player</th>
              <th v-if="hasLocations">Location</th>
              <th v-if="hasCostumes">Costume</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, idx) of players" :key="name + ';' + idx + ';' + player.Name">
              <td>{{ player.Name || '#' + (idx + 1) }}</td>
              <td v-if="hasLocations">
                <b-overlay :show="player.Stage && stages.loading" variant="transparent">
                  <div class="location-kingdom" v-if="player.Kingdom || (player.Stage && stages.initialized)">
                    {{ player2kingdom(player) }}
                  </div>
                  <div class="location-stage" v-if="player.Stage">
                    <span v-b-tooltip="{boundary:'viewport',placement:'bottom'}" :title="player.Stage">
                      {{ player2stage(player) || 'Unknown Stage' }}
                    </span>
                  </div>
                </b-overlay>
              </td>
              <td v-if="hasCostumes" class="costume">
                <div
                  v-if="player.Costume && player.Costume.Cap"
                  class="costume-cap"
                  :title="player.Costume.Cap"
                  v-b-tooltip="{boundary:'viewport',placement:'top'}"
                >
                  {{ costumes.Cap[player.Costume.Cap] || 'Unknown'  }}
                </div>
                <div
                  v-if="player.Costume && player.Costume.Body"
                  class="costume-body"
                  :title="player.Costume.Body"
                  v-b-tooltip="{boundary:'viewport',placement:'bottom'}"
                >
                  {{ costumes.Body[player.Costume.Body] || 'Unknown' }}
                </div>
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
  &.dead { color: grey; }
}
.smoo-server-players {
  .costume-cap::before { content: 'Cap: '; opacity: 0.5; }
  .costume-body::before { content: 'Body: '; opacity: 0.5; }
  .location-kingdom + .location-stage { opacity: 0.5; }
}
</style>

<script lang="ts" src="./SmooServerState.ts"/>
