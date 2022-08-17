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
        yuzu should be at version <code>1114</code> or later.
        The version is shown in the title of the window.
      </b-tooltip>
      If you haven't, then please consult the yuzu
      <a-ext href="https://yuzu-emu.org/help/quickstart/">Quickstart Guide</a-ext>
      first.
    </p>
    <p>
      The currently latest release build <code>v1.0.0</code> of the mod doesn't work well with emulators.
      Use the latest
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
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
              On Windows it might be named
              <code>Ethernet</code>,
              <code>Wi-Fi</code>,
              <code>Wi-Fi network</code>,
              <code>Wireless Network Connection</code>,
              <code>Wireless Connection</code>,
              <code>Local Area Connection</code>,
              or something like that.
            </p>
            <p>
              On Linux you might encounter
              <code>eth0</code>,
              <code>wlan0</code>,
              <code>ens6</code>,
              <code>wls7</code>,
              or something similar.
            </p>
          </b-tooltip>
        </li>
        <li>
          [Optional] While you are still in the <code>System</code> settings, head over to the <code>Profiles</code> tab
          to create a new user with a name you like. The name of the profile will be shown to other players.
          Once the profile is created, simply click on it once to select it as the current user. Otherwise you're displayed with the name <code>yuzu</code>.
        </li>
      </ul>
    </p>

    <!-- Install the Super Mario Odyssey Online mod -->
    <h5>Install the Super Mario Odyssey Online mod</h5>
    <p>
      <b>Step 1</b>:
      Download the latest
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
      of the mod (not the source code, unless you want to <a-int name="play" id="build">build it yourself</a-int>).
    </p>
    <p>
      <b>Step 2</b>:
      In yuzu right-click on Super Mario Odyssey and choose <code>Open Mod Data Location</code> to open the mod directory.
      <b-icon icon="info-circle-fill" id="play-yuzu-mod-folder"/>
      <b-tooltip target="play-yuzu-mod-folder" triggers="hover">
        On Windows it should be located at <code>%appdata%\yuzu\load\0100000000010000</code>.
      </b-tooltip>
    </p>
    <p>
      <b>Step 3</b>:
      Create a new folder for the mod named however you like to, e.g. name it <code>SMOO</code>.
    </p>
    <p>
      <b>Step 4</b>:
      The file structure of yuzu is a bit different than that of the
      <a-int name="play" id="switch">Nintendo Switch</a-int>
      and
      <a-int name="play" id="ryujinx">Ryujinx</a-int>.
      This means that we manually need to extract the contents from the <code>.zip</code>
      file that was downloaded in step 1 to different locations:
      <ul class="ml-2">
        <li>
          The <code>exefs</code> and <code>romfs</code> folders inside the
          <code>/atmosphere/contents/0100000000010000</code> directory
          go into the new folder that was created with step 3.
        </li>
        <li>
          The <code>3CA12DFAAF9C82DA064D1698DF79CDA1.ips</code> file inside the
          <code>/atmosphere/exefs_patches/StarlightBase</code> directory
          goes into the <code>exefs</code> folder that was extracted before.
        </li>
      </ul>
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
