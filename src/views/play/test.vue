<template>
  <div>
    <!-- Test that it works -->
    <h5>Test that it works</h5>
    <p>
      When starting the game with the mod for the first time a keyboard dialog should pop up before the main menu asking for a server IP.
      Choose one of the <a-int name="servers">public servers</a-int> and type in its IPv4 address.
      <b-icon icon="info-circle-fill" :id="'play-test-hostname-' + _uid"/>
      <b-tooltip :target="'play-test-hostname-' + _uid" triggers="hover">
        <p>
          The <code>Host</code> entry in the server list is a convenient alternative to entering the IPv4 address.
          But it is currently only possible with a
          <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
          of the mod.
        </p>
        <p>
          Entering hostnames doesn't work with the <a-int name="play" id="yuzu">yuzu</a-int> emulator.
        </p>
      </b-tooltip>
      On newer versions of the mod the game will also ask for the port.
    </p>
    <p>
      If it can't connect to the server it'll briefly show the text <code>Failed to Connect!</code> before it continues to the main menu.
      Verify that the server is online and that your device is connected to the internet.
      Try out other public servers to rule out a (temporary) problem with a specific server by
      <a-int name="faq" id="102">changing the server</a-int>.
    </p>
    <p>
      When there is no immediate error, then <code>Start</code> a new game or <code>Resume</code> an existing save.
      Check out the in-game <a-int name="faq" id="101">debug menu</a-int> for the
      <code>Client Socket Connection Status: Socket Connected</code>.
      If there are other players connected to the server, the <code>Total Connected Players</code> count should be above <code>1</code>
      and they should appear in the player list.
    </p>
    <p>
      <a-int name="faq" id="110">FAQ: Something doesn't work / Where do I get help?</a-int>
    </p>
  </div>
</template>
