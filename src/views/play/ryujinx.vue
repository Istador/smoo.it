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
      <a-ext href="https://github.com/Ryujinx/Ryujinx/wiki/Ryujinx-Setup-&amp;-Configuration-Guide">Ryujinx setup &amp; Configuration Guide</a-ext>
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
      of the mod (not the source code, unless you want to <a-int name="play" id="build">build it yourself</a-int>).
    </p>
    <p>
      <b>Step 2</b>:
      Open Ryujinx and choose <code>File &gt; Open Ryujinx Folder</code>.
      From the folder that opens, travel down into the <code>sdcard</code> folder.
      <b-icon icon="info-circle-fill" id="play-ryujinx-sdcard-folder"/>
      <b-tooltip target="play-ryujinx-sdcard-folder" triggers="hover">
        On Windows it should be located at <code>%appdata%\Ryujinx\sdcard</code>.
      </b-tooltip>
    </p>
    <p>
      <b>Step 3</b>:
      Extract the <code>atmosphere</code> folder from the <code>.zip</code> file that you downloaded in step 1
      into the <code>sdcard</code> folder from step 2.
      If there already is an <code>atmosphere</code> folder (e.g. from other mods),
      then accept all popups asking you to overwrite the existing directories and files.
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
