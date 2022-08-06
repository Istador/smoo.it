<template>
  <div class="play-view">

    <b-card-group columns deck>

      <b-card header="Requirements" class="mb-4">
        <ul>
          <li>Hacked Nintendo Switch</li>
          <li>Super Mario Odyssey version 1.0.0</li>
          <li>Internet connection</li>
        </ul>
      </b-card>

      <b-card header="Links" class="mb-4">
        <b-btn-group
          vertical
          style="width: 100%;"
        >
          <b-btn
            class="extern"
            variant="outline-secondary"
            href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline"
            target="_blank"
          >Mod GitHub [Official]</b-btn>

          <b-btn
            class="extern"
            variant="outline-secondary"
            href="https://gamebanana.com/mods/384214"
            target="_blank"
          >Gamebanana</b-btn>
        </b-btn-group>
      </b-card>

    </b-card-group>

    <play-hide-and-seek class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'hide-and-seek'"/>
    <play-switch        class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'switch'"/>
    <play-ryujinx       class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'ryujinx'"/>
    <play-yuzu                       @show="show($event)" @hidden="hidden($event)" :visible="id === 'yuzu'"/>
  </div>
</template>

<script lang="ts" src="./play.ts"/>
