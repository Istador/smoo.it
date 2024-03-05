<template>
  <div class="play-view">

    <b-card-group columns deck>

      <b-card header="Requirements" class="mb-4">
        <ul class="ul-icons">
          <li><b-icon icon="tools"/> Hacked Nintendo Switch</li>
          <li><b-icon icon="sd-card"/> Super Mario Odyssey version 1.0.0</li>
          <li><b-icon icon="wifi"/> Internet connection</li>
        </ul>
      </b-card>

      <b-card header="Links" class="mb-4">
        <b-btn-group
          vertical
          style="width: 100%;"
        >
          <b-btn
            variant="outline-secondary"
            href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline"
            target="_blank"
          ><b-icon icon="github"/> Mod GitHub [Official]</b-btn>

          <b-btn
            variant="outline-secondary"
            href="https://gamebanana.com/mods/384214"
            target="_blank"
          ><b-icon icon="joystick"/> Gamebanana</b-btn>
        </b-btn-group>
      </b-card>

    </b-card-group>

    <play-hide-and-seek class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'hide-and-seek'"/>
    <play-switch        class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'switch'"/>
    <play-ryujinx       class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'ryujinx'"/>
    <play-build                      @show="show($event)" @hidden="hidden($event)" :visible="id === 'build'"/>
  </div>
</template>

<script lang="ts" src="./play.ts"/>
