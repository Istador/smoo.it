<template>
  <b-card-group columns deck class="play-view">

    <b-card header="Requirements">
      <ul>
        <li>Hacked Nintendo Switch</li>
        <li>Super Mario Odyssey version 1.0.0</li>
        <li>Internet connection</li>
      </ul>
    </b-card>

    <b-card header="Links">
      <b-btn-group
        vertical
        style="width: 100%;"
      >
        <b-btn
          class="extern"
          variant="outline-secondary"
          href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline"
          target="_blank"
        >GitHub repository</b-btn>

        <b-btn
          class="extern"
          variant="outline-secondary"
          href="https://gamebanana.com/mods/384214"
          target="_blank"
        >Gamebanana</b-btn>
      </b-btn-group>
    </b-card>

  </b-card-group>
</template>

<script lang="ts" src="./Play.ts"/>
