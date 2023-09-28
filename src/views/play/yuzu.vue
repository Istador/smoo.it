<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="yuzu"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Play with the <code>yuzu</code> emulator</template>

    <!-- Introduction -->
    <h5>Introduction</h5>
    <p>
      This guide assumes that you have already
      <a-int name="faq" id="103">hacked your Nintendo Switch</a-int>
      and have properly installed and set up the
      <a-ext href="https://yuzu-emu.org/downloads/">latest</a-ext>
      yuzu version.
      <b-icon icon="info-circle-fill" id="play-yuzu-version"/>
      <b-tooltip target="play-yuzu-version" triggers="hover">
        <p>
          yuzu should be at least at version <code>1114</code> or later for the mod to work.
        </p>
        <p>
          To use DNS hostnames as a server IP yuzu should be at version <code>1499</code> or later.
        </p>
        <p>
          The version is shown in the title of the window.
        </p>
      </b-tooltip>
      If you haven't, then please consult the yuzu
      <a-ext href="https://yuzu-emu.org/help/quickstart/">Quickstart Guide</a-ext>
      first.
    </p>
    <p>
      Version <code>v1.0.0</code> of the mod doesn't work with emulators.
      Use the
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/latest">latest release</a-ext>
      instead.
    </p>
    <p>
      The multiplayer mod does not work with SMO version <code>1.3.0</code>, but requires version <code>1.0.0</code>.
      <br><a-int name="faq" id="104">FAQ: How do I obtain a SMO ROM for emulators?</a-int>
    </p>

    <!-- Configure yuzu -->
    <h5>Configure yuzu</h5>
    <p>
      <ul>
        <li>
          Open the <code>Emulation &gt; Configure...</code> dialog in yuzu.
          On the left side select the <code>System</code> settings and change over to the <code>Network</code> tab.
          By default the network interface <code>None</code> is selected, which means that the emulator has no internet access.
          You instead need to select the network interface of your system that offers internet access.
          <b-icon icon="info-circle-fill" id="play-yuzu-adapter-names"/>
          <b-tooltip target="play-yuzu-adapter-names" triggers="hover">
            <p>
              On <font-awesome-icon icon="fa-brands fa-windows"/> Windows it might be named
              <code>Ethernet</code>,
              <code>Wi-Fi</code>,
              <code>Wi-Fi network</code>,
              <code>Wireless Network Connection</code>,
              <code>Wireless Connection</code>,
              <code>Local Area Connection</code>,
              or something like that.
            </p>
            <p>
              On <font-awesome-icon icon="fa-brands fa-linux"/> GNU/Linux you might encounter
              <code>eth0</code>,
              <code>wlan0</code>,
              <code>ens6</code>,
              <code>wls7</code>,
              or something similar.
            </p>
          </b-tooltip>
        </li>
        <li>
          <b-badge variant="primary">Optional</b-badge>
          While you are still in the <code>System</code> settings, head over to the <code>Profiles</code> tab
          to create a new user with a name you like. The name of the profile will be shown to other players.
          Once the profile is created, simply click on it once to select it as the current user. Otherwise you're displayed with the name <code>yuzu</code>.
        </li>
      </ul>
    </p>

    <b-alert variant="warning" show>
      <b-icon icon="exclamation-triangle" class="text-danger" font-scale="1.5"/>
      If you share your yuzu directory with others, then the previous step is not optional for the other players.
      <b-icon icon="info-circle-fill" id="play-yuzu-profile-id"/>
      <b-tooltip target="play-yuzu-profile-id" triggers="hover">
        <p>
          Every player connected to the same server needs a unique profile ID.
          Renaming the existing profile is not enough, because the profile ID needs to be different.
        </p>
        <p>
          Yuzu automatically generates a random profile ID on the first start.
          But by sharing the whole directory with others, the already generated profile ID is copied too.
        </p>
      </b-tooltip>
    </b-alert>

    <!-- Install the Super Mario Odyssey Online mod -->
    <h5>Install the Super Mario Odyssey Online mod</h5>
    <p>
      <b>Step 1</b>:
      Download the
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/latest">latest release</a-ext>
      of the mod from the assets list.
      The filename you need ends with <code>_for_Emulators.zip</code>.
    </p>
    <p>
      <b>Step 2</b>:
      In yuzu right-click on Super Mario Odyssey and choose <code>Open Mod Data Location</code> to open the mod directory.
      <b-icon icon="info-circle-fill" id="play-yuzu-mod-folder"/>
      <b-tooltip target="play-yuzu-mod-folder" triggers="hover">
        On <font-awesome-icon icon="fa-brands fa-windows"/> Windows it should be located at <code>%appdata%\yuzu\load\0100000000010000</code>.
      </b-tooltip>
    </p>
    <p>
      <b>Step 3</b>:
      Extract the <code>SMOO</code> folder from the <code>.zip</code> file that you downloaded in step 1
      into the mod directory that was opened at step 2.
      Ignore the <code>subsdk1.elf</code> file.
    </p>

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
