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
     This section of tutorial assumes that you have already hacked your switch and properly have installed and configured Yuzu. If you haven't, please check <a-ext href="https://yuzu-emu.org/help/quickstart/">Yuzu's quick guide</a-ext> to get started.
     </p>
     <p>
     Only Release builds above 1.0.0 and the Dev builds are currently working on emulator. Make sure you download the <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases">proper build</a-ext> before installing the mod.
     </p>
     <p>
     Make sure you have the latest version of <a-ext href="https://yuzu-emu.org/downloads/">Yuzu</a-ext> installed.
     </p>
    <br>
    <!-- Installing the mod -->
    <h5>Installing the mod</h5>
     <p>
     <ins>Step 1</ins>: Download the mod from <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases">Github</a-ext>.
     </p>
     <p>
     <ins>Step 2</ins>: Enable the Network Interface on Yuzu to allow connection to the internet. To do so, do the following: In Yuzu, on the top left corner, click on <code>Emulation => Configure</code>. Then in the new window, click <code>System</code> and select the <code>Network</code> tab. You should now be able to select a type of Network interface from a drop down-menu. Select <code>Ethernet </code>
      <b-icon icon="info-circle-fill" id="Ethernet"/>
      <b-tooltip target="Ethernet" triggers="hover">
       "Ethernet" may have a number following it. If you are using a wifi connection, there's also a possibility that your Network interface is named something else.
      </b-tooltip>.
     </p>
     <p>
     <ins>Step 3</ins>: Open Super Mario Odyssey's mod folder. This can be done from Yuzu by right-clicking on the game and then clicking on "Open Mod Data Location". Then, create a folder named however you like.
     </p>
     <p>
     <ins>Step 4</ins>: From the <code>.zip<b-icon icon="file-zip-fill" id="zip"/></code> file that you've obtained from Github, extract the "exefs" and "romfs" folder into the folder created on Step 3. Then, extract the <code>.ips</code> patch file in the "exefs" folder that was previously extracted.
     </p>
     <p>
     From there, the mod should be properly installed.
     </p>
    <br>
    <!-- Testing the mod -->
    <h5>Testing the mod</h5>
     <p>
     We now need to start the game. On the first launch of Super Mario Odyssey Online, it should ask you for an IP address. If it does, then you have successfully installed the mod and are now ready to play, otherwise, you will want to try again by removing entirely the mod and start from Step 3 again.
     Choose one of the <a-int name="servers">public servers</a-int> and type in its IPv4 address
      <b-icon icon="info-circle-fill" id="play-yuzu-hostname"/>
      <b-tooltip target="play-yuzu-hostname" triggers="hover">
       The <code>Host</code> entry in the server list is a convenient alternative to entering the IPv4 address, but it is currently only possible with a
       <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
       of the mod.
      </b-tooltip>
     or any other known addresses that you trust. It may also ask for a port, make sure to enter the proper one
      <b-icon icon="info-circle-fill" id="Port"/>
      <b-tooltip target="Port" triggers="hover">
       Under normal circumstances, the default port should be 1027.
      </b-tooltip>.
     </p>
     <p>
      If it can't connect to the server it'll briefly show the text <code>Failed to Connect!</code> before it continues to the main menu.
      Verify that the server is online and that the address is correct. You may try a different server to ensure that it's working properly. If any issue arises, you may visit the <a-int name="faq" id="101">FAQ</a-int> or inquire in the <code>#help</code> section of the <a-ext href="https://discord.gg/w3TnB899ww">official Discord</a-ext> server.
     </p>
  </smoo-card>
</template>
