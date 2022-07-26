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

<style lang="scss" src="./Home.scss"/>

<script lang="ts" src="./Home.ts"/>
