<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="yuzu"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Play with the <code>Yuzu</code> emulator</template>

    <!-- Warnings and Notices -->
    <h5>Warnings and Notices</h5>
    <p>
      This section of tutorial assumes that you have already hacked your switch and properly have installed and configured Yuzu.
      If you haven't, please check
      <a-ext href="https://yuzu-emu.org/help/quickstart/">Yuzu's quick guide</a-ext>
      to get started.
    </p>
    <p>
      Only Release builds above 1.0.0 and the Dev builds are currently working on emulator.
      Make sure you download the
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases">proper build</a-ext>
      before installing the mod.
    </p>
    <p>
      Make sure you have the latest version of <a-ext href="https://yuzu-emu.org/downloads/">Yuzu</a-ext> installed.
    </p>
    <br>

    <!-- Installing the mod -->
    <h5>Installing the mod</h5>
    <p>
      <ins>Step 1</ins>:
      Download the mod from
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases">Github</a-ext>.
    </p>
    <p>
      <ins>Step 2</ins>:
      Enable the Network Interface on Yuzu to allow connection to the internet.
      To do so, do the following:
      In Yuzu, on the top left corner, click on <code>Emulation => Configure</code>.
      Then in the new window, click <code>System</code> and select the <code>Network</code> tab.
      You should now be able to select a type of Network interface from a drop down-menu.
      Select <code>Ethernet</code>
      <b-icon icon="info-circle-fill" id="Ethernet"/>
      <b-tooltip target="Ethernet" triggers="hover">
        "Ethernet" may have a number following it.
        If you are using a wifi connection, there's also a possibility that your Network interface is named something else.
      </b-tooltip>.
    </p>
    <p>
      <ins>Step 3</ins>:
      Open Super Mario Odyssey's mod folder.
      This can be done from Yuzu by right-clicking on the game and then clicking on "Open Mod Data Location".
      Then, create a folder named however you like.
    </p>
    <p>
      <ins>Step 4</ins>:
      From the <code>.zip<b-icon icon="file-zip-fill" id="zip"/></code> file that you've obtained from Github,
      extract the "exefs" and "romfs" folder into the folder created on Step 3.
      Then, extract the <code>.ips</code> patch file in the "exefs" folder that was previously extracted.
    </p>
    <p>
      From there, the mod should be properly installed.
    </p>
    <br>

    <!-- Test that it works -->
    <play-test/>
  </smoo-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PlayTest from './test.vue'
@Component({
  components: {
    PlayTest,
  },
})
export default class PlayYuzu extends Vue {}
</script>
