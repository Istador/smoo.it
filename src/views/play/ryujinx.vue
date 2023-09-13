<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="ryujinx"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Play with the <code>Ryujinx</code> emulator</template>

    <!-- Introduction -->
    <h5>Introduction</h5>
    <p>
      This guide assumes that you have already
      <a-int name="faq" id="103">hacked your Nintendo Switch</a-int>
      and have properly installed and set up the
      <a-ext href="https://ryujinx.org/download">latest</a-ext>
      Ryujinx version.
      If you haven't, then please consult the
      <a-ext href="https://github.com/Ryujinx/Ryujinx/wiki/Ryujinx-Setup-&amp;-Configuration-Guide">Ryujinx Setup &amp; Configuration Guide</a-ext>
      first.
    </p>
    <p>
      Version <code>v1.0.0</code> of the mod doesn't work with emulators.
      Use the latest
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
      instead.
    </p>
    <p>
      The multiplayer mod does not work with SMO version <code>1.3.0</code>, but requires version <code>1.0.0</code>.
      <br><a-int name="faq" id="104">FAQ: How do I obtain a SMO ROM for emulators?</a-int>
    </p>

    <!-- Configure Ryujinx -->
    <h5>Configure Ryujinx</h5>
    <p>
      <ul>
        <li>
          Open the <code>Options &gt; Settings</code> in Ryujinx,
          go to the <code>System</code> tab and check <code>Enable Guest Internet Access</code>
          to allow outgoing connections to the internet by the emulator.
        </li>
        <li>
          Ryujinx's default user profile should not be used with SMOO, because the
          <a-int name="host">server</a-int> uses the profile ID to differentiate between players.
          <b-icon icon="info-circle-fill" id="play-ryujinx-profile-id"/>
          <b-tooltip target="play-ryujinx-profile-id" triggers="hover">
            The ID of the default profile is always <code>00000000-0000-0001-0000-000000000000</code>.
            This causes issues with people connected to the same server who also use Ryujinx with the default profile ID.
            Public servers usually block this profile ID for that reason.
          </b-tooltip>
          Open the <code>Options &gt; Manage User Profiles</code> window in Ryujinx and click on the
          <code>Add New Profile</code> button. It'll ask you for the name of the new profile, which will be shown to other players.
          Once the profile is created, simply double-click on it to select it.
        </li>
      </ul>
    </p>

    <!-- Install the Super Mario Odyssey Online mod -->
    <h5>Install the Super Mario Odyssey Online mod</h5>
    <p>
      <b>Step 1</b>:
      Download the latest
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
      of the mod whose filename ends with <code>_for_Emulators.zip</code>.
      The last asset in the list is the newest.
    </p>
    <p>
      <b>Step 2</b>:
      In Ryujinx right-click on Super Mario Odyssey and choose <code>Open Mods Directory</code> to open the mod directory.
      <b-icon icon="info-circle-fill" id="play-ryujinx-mod-folder"/>
      <b-tooltip target="play-ryujinx-mod-folder" triggers="hover">
        On <font-awesome-icon icon="fa-brands fa-windows"/> Windows it should be located at <code>%appdata%\Ryujinx\mods\contents\0100000000010000</code>.
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
export default class PlayRyujinx extends Vue {}
</script>
