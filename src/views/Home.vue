<template>
  <b-card-group columns class="home-view">
    <div style="">
      <div class="yt-embed">
        <iframe
          src="https://www.youtube.com/embed/nXxnhvP_LEI"
          title="SMOO Trailer"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>

    <b-card header="Super Mario Odyssey: Online">
     <p>SMOO is an inofficial multiplayer mod for Super Mario Odyssey on the Nintendo Switch.</p>

      <p>
        Features:
        <br/>
        <ul>
          <li>Explore Kingdoms together with up to 10 People</li>
          <li>Almost every capture in the game is synced between players</li>
          <li>Full 2D and Costume models syncing</li>
          <li>Moon Collection is shared between all players</li>
          <li>Custom Configuration Menu</li>
          <li>Support for custom gamemodes (WIP)</li>
        </ul>
      </p>

      <p>
        Available Gamemodes:
        <br/>
        <ul>
          <li>Hide and Seek</li>
        </ul>
      </p>
    </b-card>
  </b-card-group>
</template>

<style lang="scss">
.home-view {
  -moz-column-count: 1 !important;
  column-count: 1 !important;
  -moz-row-gap: 1.25rem;
  row-gap: 1.25rem;
  @media (min-width: 800px) {
    -moz-column-count: 2 !important;
    column-count: 2 !important;
  }

  .yt-embed {
    margin-bottom: 15px;
    iframe {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
    @supports not (aspect-ratio: 1) {
      position: relative;
      padding-bottom: 56.25%;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>
