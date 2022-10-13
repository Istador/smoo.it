<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="switch"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Play on a hacked <code>Nintendo Switch</code> console</template>

    <!-- Hack the Nintendo Switch -->
    <h5>Hack the Nintendo Switch</h5>
    <p>
      In order to install any custom software on the Nintendo Switch, it first needs to be
      <a-int name="faq" id="103">hacked</a-int>.
      If you have already done this in the past,
      make sure to check out the instructions anyway,
      so you don't miss out on anything important.
    </p>

    <!-- Downgrade Super Mario Odyssey to 1.0.0 -->
    <h5>Downgrade Super Mario Odyssey to 1.0.0</h5>
    <p>
      The multiplayer mod does not work with SMO version <code>1.3.0</code>, but requires version <code>1.0.0</code>.
      If you have that version installed already you're done with this step.
      But even if you are on version <code>1.0.0</code>
      it's advisable to upgrade to version <code>1.3.0</code> anyway and downgrade the game in the following way.
      Because then the operation system of the Nintendo Switch won't complain on every software start
      that there is a new game update available that you should install.
    </p>
    <p>
      To conveniently downgrade, there is the <code>Odyssey Downgrade</code> tool made by Shadów.
      Unlike other tools (like <code>Tinfoil</code>, <code>Goldleaf</code>, <code>dbi</code>, ...) that mess around with software installations (which might get you a console ban)
      it makes a dump of the base game and applies it as a mod to the game.
      That way the installed game will stay on version <code>1.3.0</code> but it will launch as <code>1.0.0</code>.
    </p>
    <p>
      <ul>
        <li>
          Go to the <a-ext href="https://github.com/Istador/odyssey-downgrade/releases">releases page</a-ext>
          and download the latest <code>odyssey_downgrade.nro</code> file.
        </li>
        <li>
          Put the file onto your SD card into the <code>/switch/</code> directory.
          <b-icon icon="info-circle-fill" id="play-downgrade-keys"/>
          <b-tooltip target="play-downgrade-keys" triggers="hover">
            <p>
              Please keep in mind, that the <code>Osyssey Downgrade</code> needs the
              <a-int name="faq" id="103">console keys</a-int>
              on the SD card in order to work.
            </p>
            <p>
              And again: it is highly recommended to use <code>FAT32</code> and not <code>extFAT</code>
              for the SD card.
              Otherwise the downgrade will likely be corrupted and doesn't work.
            </p>
          </b-tooltip>
        </li>
        <li>
          Launch the homebrew menu by opening the <code>Album</code>.
          Select the <code>Odyssey Downgrade</code> app
          from the list and launch it by pressing <smoo-btn A/>.
        </li>
        <li>
          In the simple menu that opens choose <code>Add downgrade</code> and press <smoo-btn A/>.
          This will dump the game which takes about 2-3 minutes and requires about <code>5.2 GiB</code> of space on the SD card.
          Once that is done press <smoo-btn B/> to get back to the menu.
        </li>
        <li>
          Choose <code>Add patch</code> and press <smoo-btn A/>.
          This second step only takes a brief moment after which
          you can exit the <code>Odyssey Downgrade</code> app by pressing <smoo-btn B/> twice.
          If you're using a cartridge, then you'll need to remove and reinsert the cartridge now before you can start the game.
        </li>
        <li>
          <a-int name="faq" id="105">Now go check</a-int> that the game is on version <code>1.0.0</code>.
        </li>
      </ul>
    </p>
    <p>
      If you ever want to remove the downgrade,
      simply launch the <code>Odyssey Downgrade</code> app again, and choose <code>Remove downgrade</code> and <code>Remove patch</code>
      to get back to version <code>1.3.0</code>.
    </p>

    <!-- Install the Super Mario Odyssey Online mod -->
    <h5>Install the Super Mario Odyssey Online mod</h5>
    <p>
      <b>Step 1</b>:
      Download the latest
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases">release build</a-ext>
      of the mod (not the source code, unless you want to
      <a-int name="play" id="build">build it yourself</a-int>).
    </p>
    <p>
      <b>Step 2</b>:
      Extract the downloaded <code>.zip</code> file to receive an <code>atmosphere</code> folder,
      which you need to copy to the root directory of the SD card.
    </p>
    <p>
      Please notice, that there should already be an <code>atmosphere</code> folder on the SD card.
      The folder from the mod does not replace the existing directory, but is meant to be merged with it.
      Existing directories and files should be overwritten.
    </p>
    <p>
      If you ever want to uninstall the mod (why?!) look at the file structure from the <code>.zip</code> file and remove all the files manually.
      <b-icon icon="info-circle-fill" id="play-switch-uninstall"/>
      <b-tooltip target="play-switch-uninstall" triggers="hover">
        At the time of writing, the following folders and file can be deleted:
        <ul>
          <li><code class="text-danger">/atmosphere/contents/0100000000010000/exefs/</code></li>
          <li><code class="text-danger">/atmosphere/contents/0100000000010000/romfs/</code></li>
          <li><code class="text-danger">/atmosphere/exefs_patches/StarlightBase/3CA12DFAAF9C82DA064D1698DF79CDA1.ips</code></li>
        </ul>
      </b-tooltip>
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
export default class PlaySwitch extends Vue {}
</script>
