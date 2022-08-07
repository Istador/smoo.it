<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="host"
    key="settings"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Configuring the server with the <code>settings.json</code> file</template>
<code class="style ml-3 mb-3 float-right">
<label>settings.json</label>
<pre class="code">
{
  <b>"Server"</b>: {
    <b>"Address"</b>: <a>"0.0.0.0"</a>,
    <b>"Port"</b>: <i>1027</i>,
    <b>"MaxPlayers"</b>: <i>8</i>
  },
  <b>"Flip"</b>: {
    <b>"Enabled"</b>: <i>true</i>,
    <b>"Players"</b>: [],
    <b>"Pov"</b>: <a>"both"</a>
  },
  <b>"Scenario"</b>: {
    <b>"MergeEnabled"</b>: <i>false</i>
  },
  <b>"BanList"</b>: {
    <b>"Enabled"</b>: <i>false</i>,
    <b>"Players"</b>: [],
    <b>"IpAddresses"</b>: []
  },
  <b>"Discord"</b>: {
    <b>"Token"</b>: <i>null</i>,
    <b>"Prefix"</b>: <a>"$"</a>,
    <b>"LogChannel"</b>: <i>null</i>
  },
  <b>"PersistShines"</b>: {
    <b>"Enabled"</b>: <i>false</i>,
    <b>"Filename"</b>: <a>"./moons.json"</a>
  }
}
</pre>
</code>
    <p>
      The <code>settings.json</code> file is automatically created when the server starts.
      At the right you can see the default values for server version <code>1.0.2</code>.
    </p>
    <ul>
      <li><b>Server</b>:
        <ul>
          <li>
            <b>Address</b>:
            The network interface the server listens on for incoming connections.
            Leave it at <code>"0.0.0.0"</code> to accept incoming connections from all networks.
            There are very few and rare use cases where you'd ever want to change this value.
            <sup id="server-address"><b-icon icon="info-circle-fill"/></sup>
            <b-tooltip target="server-address" triggers="hover" style="text-align: justified;">
              <p>One possible example:</p>
              <p class="mb-0">
                You're connected to your home network and a VPN, and therefore have two network interfaces.
                But you don't want other VPN clients to access the server.
                Then you could enter the IPv4 address your server has on the home network, to only listen to that interface.
              </p>
            </b-tooltip>
          </li>
          <li>
            <b>Port</b>:
            The TCP port clients use to connect to the server.
            You need to change this for example, if you're running multiple servers on the same computer or want to avoid firewalls blocking this port.
            When using <a-int name="host" id="docker">docker</a-int> you should not edit the port here, but inside the <code>docker-compose.yml</code>.
          </li>
          <li>
            <b>MaxPlayers</b>:
            Maximum amount of players that can be connected to the server at the same time.
            A value higher than <code>6</code> might currently cause lagging or crashing in Wooded Kingdom.
          </li>
        </ul>
      </li>
      <li><b>Flip</b>: Visually flips the 3D (and 2D) models of players on their head.
        <ul>
          <li>
            <b>Enabled</b>:
            <code>true</code> or <code>false</code>.
          </li>
          <li>
            <b>Players</b>:
            An array of unique profile IDs (not their names) which are flipped.
          </li>
          <li>
            <b>Pov</b>:
            Who sees the characters being flipped.
            Possible values: <code>"both"</code> (everyone),
            <code>"self"</code> (only the player being flipped),
            or <code>"others"</code> (everyone but the player being flipped).
          </li>
        </ul>
      </li>
      <li><b>Scenario</b>:
        <ul>
          <li>
            <b>MergeEnabled</b>:
            <code>true</code> or <code>false</code>.
            When the players are in different stages of the story (scenarios), they are technically in different levels and don't see each other.
            This option tries to merge them virtually all together, so they can see each other without being in the same level.
          </li>
        </ul>
      </li>
      <li><b>BanList</b>:
        <ul>
          <li>
            <b>Enabled</b>:
            <code>true</code> or <code>false</code>.
          </li>
          <li>
            <b>Players</b>:
            An array of unique profile IDs (not their names) that are prevented from joining the server.
            For example you could enter <code>"00000001-00000-0000-0000-000000000000"</code> to prevent
            <a-int name="play" id="ryujinx">Ryujinx</a-int> players to
            connect, that haven't changed their default profile yet.
          </li>
          <li>
            <b>IpAddresses</b>:
            An array of IPv4 addresses that are prevented from joining the server.
          </li>
        </ul>
      </li>
      <li><b>Discord</b>:
        <ul>
          <li>
            <b>Token</b>:
            Secret credential string with that the server can login to as the discord bot.
          </li>
          <li>
            <b>Prefix</b>:
            Messages that start with this prefix string are interpreted by the bot as
            <a-int name="host" id="commands">commands</a-int>
            to it.
          </li>
          <li>
            <b>LogChannel</b>:
            You can enter the unique ID of the Discord channel the bot should write log messages to (as a string).
          </li>
        </ul>
      </li>
      <li><b>PersistShines</b>: An option to save shines (moons) collected into a file, to survive server restarts and crashes.
        <ul>
          <li>
            <b>Enabled</b>:
            <code>true</code> or <code>false</code>.
          </li>
          <li>
            <b>Filename</b>:
            In which file to save the shines into.
          </li>
        </ul>
      </li>
    </ul>
  </smoo-card>
</template>
