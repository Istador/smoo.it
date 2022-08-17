<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="ryujinx"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Play with the <code>Ryujinx</code> emulator</template>

    <!-- Warnings and Notices -->
    <h5>Warnings and Notices</h5>
    <p>
      This section of tutorial assumes that you have already hacked your switch and properly have installed and configured Ryujinx.
      If you haven't, please check
      <a-ext href="https://github.com/Ryujinx/Ryujinx/wiki/Ryujinx-Setup-&-Configuration-Guide">Ryujinx's quick guide</a-ext>
      to get started.
    </p>
    <p>
      Only Release builds above 1.0.0 and the Dev builds are currently working on emulator.
      Make sure you download the
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases">proper build</a-ext>
      before installing the mod.
    </p>
    <p>
      Make sure you have the latest version of <a-ext href="https://ryujinx.org/download">Ryujinx</a-ext> installed.
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
      Enable the <code>Guess Internet Access</code> option on Ryujinx to allow connection to the internet.
      To do so, do the following:
      In Ryujinx, on the top left corner, click on <code>Options => Settings</code>.
      Then from the new window, select the <code>System</code> tab and ensure that <code>Enable Guess Internet Access</code> is on.
    </p>
    <p>
      <ins>Step 3</ins>:
      Create a new Ryujinx User Profile so that your player ID is unique. Ryujinx's default User profile
      <b-icon icon="info-circle-fill" id="PlayerID"/>
      <b-tooltip target="PlayerID" triggers="hover">
        Whose ID is 00000000-0000-0001-0000-000000000000.
      </b-tooltip>
      is not recommanded to use in servers due to various connection issues caused by it.
      To do so, do the following: In Ryujinx, on the top left corner, click on <code>Options => Manage User Profiles</code>.
      In the new window that oppened, click on the <code>Add New Profile</code> button and follow the steps to create the new profile.
      Once the profile is created, simply double-click on the new profile to select it.
    </p>
    <p>
      <ins>Step 4</ins>:
      Open Super Mario Odyssey's mod folder.
      This can be done from Ryujinx by right-clicking on the game and then clicking on "Open Atmosphere Mods Directory".
      From the folder that was openned, travel down to the <code>sdcard </code>
      <b-icon icon="info-circle-fill" id="sdcard-folder"/>
      <b-tooltip target="sdcard-folder" triggers="hover">
        <code class="text-danger"><ins>sdcard</ins>\atmosphere\contents\0100000000010000</code>
      </b-tooltip>
      folder.
    </p>
    <p>
      <ins>Step 5</ins>:
      From the <code>.zip<b-icon icon="file-zip-fill" id="zip"/></code>
      file that you've obtained from Github, extract the <code>atmosphere</code> folder
      into the <code>sdcard</code> folder and accept to overwrite the files if it is prompted to.
    </p>
    <p>
      From there, the mod should be properly installed.
    </p>
    <br>

    <!-- Testing the mod -->
    <h5>Testing the mod</h5>
    <p>
      We now need to start the game. On the first launch of Super Mario Odyssey Online, it should ask you for an IP address.
      If it does, then you have successfully installed the mod and are now ready to play,
      otherwise, you will want to try again by removing entirely the mod and start from Step 4 again.
      Choose one of the <a-int name="servers">public servers</a-int> and type in its IPv4 address
      <b-icon icon="info-circle-fill" id="play-ryu-hostname"/>
      <b-tooltip target="play-ryu-hostname" triggers="hover">
        The <code>Host</code> entry in the server list is a convenient alternative to entering the IPv4 address,
        but it is currently only possible with a
        <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
        of the mod.
      </b-tooltip>
      or any other known addresses that you trust.
      It may also ask for a port, make sure to enter the proper one
      <b-icon icon="info-circle-fill" id="Port"/>
      <b-tooltip target="Port" triggers="hover">
        Under normal circumstances, the default port should be 1027.
      </b-tooltip>.
    </p>
    <p>
      If it can't connect to the server it'll briefly show the text <code>Failed to Connect!</code> before it continues to the main menu.
      Verify that the server is online and that the address is correct.
      You may try a different server to ensure that it's working properly.
      If any issue arises, you may visit the <a-int name="faq" id="101">FAQ</a-int>
      or inquire in the <code>#help</code> section of the
      <a-ext href="https://discord.gg/w3TnB899ww">official Discord</a-ext>
      server.
    </p>
  </smoo-card>
</template>
