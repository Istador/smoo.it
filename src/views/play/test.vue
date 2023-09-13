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
        </p>
        <p>
          It is not possible with the <code>v1.0.0</code> version of the mod,
          but requires mod version <code>v1.1.0</code> or
          <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/latest">later</a-ext>.
        </p>
        <p>
          Entering hostnames doesn't work with the <a-int name="play" id="yuzu">yuzu</a-int> emulator.
        </p>
      </b-tooltip>
      On version <code>v1.1.0</code> or later of the mod the game will also ask for the server port.
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
      <code>Client Socket Connection Status: Socket Connected</code> <b-icon icon="info-circle-fill" :id="'play-test-socket-status-' + _uid"/>
      at the top of the menu.
      <b-tooltip :target="'play-test-socket-status-' + _uid" triggers="hover">
        <p>
          If you are not connected it should read
          <code>Client Socket Connection Status: Socket unavailable</code>
          instead.
        </p>
        <p>
          Note that the
          <code>Connection Status: Online</code>
          or
          <code>Connection Status: Offline</code>
          further down in the menu is not your own connection status,
          but the status of the selected puppet slot for other players.
        </p>
      </b-tooltip>
      If there are other players connected to the server, the <code>Total Connected Players</code> count should be above <code>1</code>
      and they should appear in the player list.
    </p>
    <p>
      <a-int name="faq" id="110">FAQ: Something doesn't work / Where do I get help?</a-int>
    </p>
  </div>
</template>
