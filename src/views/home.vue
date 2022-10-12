<template>
  <b-card-group
    columns
    class="home-view"
    v-if="initialized"
    v-show="visible"
  >
    <div style="">
      <div class="yt-embed">
        <iframe
          src="https://www.youtube-nocookie.com/embed/nXxnhvP_LEI"
          title="SMOO Trailer"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          v-show="$route.name === 'home'"
        />
      </div>
    </div>

    <b-card header="Super Mario Odyssey: Online">
     <p>SMOO is an unofficial multiplayer mod for Super Mario Odyssey on the Nintendo Switch.</p>

      <p>
        Features:
        <br/>
        <ul>
          <li>Explore kingdoms together with up to 10 people</li>
          <li>Almost every capture in the game is synced between players</li>
          <li>Full 2D and costume models syncing</li>
          <li>Moon collection is shared between all players</li>
          <li>Custom configuration menu</li>
          <li>Support for custom game modes (WIP)</li>
        </ul>
      </p>

      <p>
        Available game modes:
        <br/>
        <ul>
          <li>Hide &amp; Seek</li>
        </ul>
      </p>
    </b-card>
  </b-card-group>
</template>

<style lang="scss" src="./home.scss"/>

<script lang="ts" src="./home.ts"/>
