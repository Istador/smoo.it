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
    <b>"IpAddresses"</b>: [],
    <b>"Stages"</b>: []
  },
  <b>"Discord"</b>: {
    <b>"Token"</b>: <i>null</i>,
    <b>"Prefix"</b>: <a>"$"</a>,
    <b>"CommandChannel"</b>: <i>null</i>,
    <b>"LogChannel"</b>: <i>null</i>
  },
  <b>"Shines"</b>: {
    <b>"Enabled"</b>: <i>true</i>,
    <b>"Excluded"</b>: [
      <i>496</i>
    ],
    <b>"ClearOnNewSaves"</b>: <i>false</i>
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
      At the right or above you can see the default values for server version <code>1.0.5</code>.
    </p>
    <ul>
      <li><b>Server</b>:
        <ul>
          <li>
            <b>Address</b>:
            The network interface the server listens on for incoming connections.
            Leave it at <code>"0.0.0.0"</code> to accept incoming connections from all networks.
            There are very few and rare use cases where you'd ever want to change this value.
            <b-icon icon="info-circle-fill" id="server-address"/>
            <b-tooltip target="server-address" triggers="hover">
              <p>One possible example:</p>
              <p>
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
            An array of unique profile IDs (not their names) of players which are on the flip list and therefore affected by this setting.
          </li>
          <li>
            <b>Pov</b>:
            Affects who sees whom as flipped.
            Possible values:
            <code>"self"</code> (affected players will see unaffected players as flipped),
            <code>"others"</code> (affected players will be seen as flipped by everyone),
            or <code>"both"</code> (affected players will see everyone as flipped and everyone sees them as flipped).
            <br/>Note: you'll never see yourself as flipped.
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
          <li>
            <b>Stages</b>:
            <b-badge variant="primary" v-b-tooltip.html="'This setting was added with server version <code>1.0.4</code>.'">1.0.4</b-badge>
            An array of
            <b-btn variant="info" size="sm" style="padding: 0 0.4em;" v-b-modal.host-settings-stage-known>&lt;stage&gt;</b-btn>
            values that result in a kick
            <b-icon icon="info-circle-fill" id="server-settings-kick"/>
            from the server when a player joins one of them.
            <b-tooltip target="server-settings-kick" triggers="hover">
              <p>
                A <code>kick</code> is not a <code>ban</code> from the server.
              </p>
              <p>
                When entering a banned stage a packet that should crash the game is send to the client.
                Until reconnecting again the server will not send or process any packets to or from the client.
              </p>
            </b-tooltip>
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
            <b>CommandChannel</b>:
            <b-badge variant="primary" v-b-tooltip.html="'This setting was added with server version <code>1.0.3</code>.'">1.0.3</b-badge>
            You can enter the unique ID of the Discord channel (between double quotes <code>"</code>) the bot should receive commands from but not send log messages to.
          </li>
          <li>
            <b>LogChannel</b>:
            You can enter the unique ID of the Discord channel (between double quotes <code>"</code>) the bot should write log messages to and receive commands from.
          </li>
        </ul>
      </li>
      <li>
        <b>Shines</b>:
        <ul>
          <li>
            <b>Enabled</b>:
            <b-badge variant="danger" class="mr-1" id="settings-shines-1.0.3">1.0.3</b-badge>
            <b-tooltip target="settings-shines-1.0.3" triggers="hover">
              <p>
                This setting was added with server version <code>1.0.3</code>.
              </p>
              <p>
                Before server version <code>1.0.3</code> moon synchronization was always enabled.
              </p>
              <p>
                Disabling it did not work correctly with server version <code>1.0.3</code>.
                It prevented the server from saving them, but the collected moons were still send to all connected players.
              </p>
            </b-tooltip>
            <b-badge variant="primary" class="mr-1" id="settings-shines-1.0.4">1.0.4</b-badge>
            <b-tooltip target="settings-shines-1.0.4" triggers="hover">
              <p>
                Server version <code>1.0.4</code> fixed the issue that moons were still send to connected players even when this setting was disabled.
              </p>
            </b-tooltip>
            <code>true</code> or <code>false</code>.
            Can be used to disable moon synchronization between players.
          </li>
          <li>
            <b>Excluded</b>:
            <b-badge variant="warning" v-b-tooltip.html="'This setting will be added with server version <code>1.0.5</code>.'">1.0.5</b-badge>
            An array of
            <b-btn variant="info" size="sm" style="padding: 0 0.4em;" v-b-modal.host-settings-shine-id>&lt;shine-id&gt;</b-btn>
            values that are excluded from being synchronized between players.
            By default the moon <code>496</code> is excluded because receiving it causes a soft lock where the Inverted Pyramid doesn't open up.
          </li>
          <li>
            <b>ClearOnNewSaves</b>:
            <b-badge variant="warning" class="mr-1" v-b-tooltip.html="'This setting will be added with server version <code>1.0.5</code>.'">1.0.5</b-badge>
            <code>true</code> or <code>false</code>.
            Enabling this will forget the collected moons that the server remembers when a player enters Cap Kingdom in scenario 1
            (this means a new save file before entering Cascade Kingdom).
            This can be useful for co-op gameplay or speedruns.
          </li>
        </ul>
      </li>
      <li>
        <b>PersistShines</b>:
        <b-badge variant="primary" v-b-tooltip.html="'These settings were added with server version <code>1.0.2</code>.'">1.0.2</b-badge>
        An option to save shines (moons) collected into a file, to survive server restarts and crashes.
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
    <moons-modal id="host-settings-shine-id"/>
    <stages-known-modal id="host-settings-stage-known"/>
  </smoo-card>
</template>

<script lang="ts" src="./settings.ts"/>
