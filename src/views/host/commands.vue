<template>
  <smoo-card
    class="smoo-view-host-commands"
    :visible="$attrs.visible"
    accordion="host"
    key="commands"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Commands to control or interact with a running server</template>

    <div>
      When running the server with the <a-int name="host" id="binary">binary</a-int>,
      attaching to the <a-int name="host" id="docker">docker</a-int> container,
      or using the <a-int name="host" id="discord">Discord</a-int> integration,
      you can send it commands to control and interact with it.
      Following are all the commands that the server version <code>1.0.2</code> understands.
    </div>

    <div>
      <kbd>help</kbd>
      Outputs a list of all possible commands.
    </div>

    <div>
      <kbd>list</kbd>
      Outputs the player names and profile IDs of all currently connected players.
    </div>

    <div>
      <kbd>loadsettings</kbd>
      Reloads the modified <a-int name="host" id="settings">settings.json</a-int>
      in without restarting the server.
    </div>

    <div>
      <kbd>maxplayers &lt;player-count&gt;</kbd>
      Sets the amount of players that can be connected to the server at the same time.
    </div>

    <div>
      <kbd>scenario {true|false}</kbd>
      Enables or disables the scenario merging.
      See the <a-int name="host" id="settings">settings</a-int> section for details.
    </div>

    <div>
      <kbd>sendall &lt;stage&gt;</kbd>
      Shortcut that will send all connected players to the given stage.
      <b-icon icon="info-circle-fill" id="commands-sendall"/>
      <b-tooltip target="commands-sendall" triggers="hover">
        This is identical to:
        <br/>
        <kbd>send &lt;stage&gt; "" -1 *</kbd>
      </b-tooltip>
      <br/>
      <ul>
        <li>
          <kbd>&lt;stage&gt;</kbd>
          <b-btn variant="info" size="sm" style="padding: 0 0.4em;" v-b-modal.host-commands-stages>show possible values</b-btn>
        </li>
      </ul>
    </div>

    <div>
      <kbd>send &lt;stage&gt; &lt;warp-id&gt; &lt;scenario&gt; &lt;player&gt;...</kbd>
      Sends individual player(s) to a specific stage.
      <br/>
      <ul>
        <li>
          <kbd>&lt;stage&gt;</kbd>
          <b-btn variant="info" size="sm" style="padding: 0 0.4em;" v-b-modal.host-commands-stages>show possible values</b-btn>
        </li>
        <li>
          <kbd>&lt;warp-id&gt;</kbd>
          <code>change stage ID</code> for the warp.
          To specify exactly where to spawn inside the <code>stage</code>.
          Use <kbd>""</kbd> for the default spawn point (the Odyssey).
        </li>
        <li>
          <kbd>&lt;scenario&gt;</kbd>
          What scenario to send the players to. Has to be an integer between <kbd>-1</kbd> and <kbd>127</kbd>.
          Use <kbd>-1</kbd> to keep the scenario unchanged.
        </li>
        <li>
          <kbd>&lt;player&gt;...</kbd>
          A list of players to send (separated by spaces).
          Can be their player name or their profile ID.
          <kbd>*</kbd> is also a valid value to send all connected players.
        </li>
      </ul>
    </div>

    <div>
      <kbd>rejoin &lt;player-name&gt;...</kbd>
      Closes the connection to the client of the player(s).
      The client will automatically reconnect again.
      <br/>
      <ul>
        <li>
          <kbd>&lt;player-name&gt;...</kbd>
          A list of player names to rejoin (separated by spaces).
          <kbd>*</kbd> is also a valid value for all connected players.
          If you start the list with <kbd>!*</kbd>, it will rejoin all but the following players.
        </li>
      </ul>
    </div>

    <div>
      <kbd>crash &lt;player-name&gt;...</kbd>
      Send the player(s) to an invalid stage that will crash the game,
      and then closes the connection to the client of the player(s).
      <br/>
      <ul>
        <li>
          <kbd>&lt;player-name&gt;...</kbd>
          A list of player names to crash (separated by spaces).
          <kbd>*</kbd> is also a valid value for all connected players.
          If you start the list with <kbd>!*</kbd>, it will crash all but the following players.
        </li>
      </ul>
    </div>

    <div>
      <kbd>ban &lt;player-name&gt;...</kbd>
      Sends the player(s) to an invalid stage that will crash the game,
      adds their profile IDs and IPv4 addresses to the <code>banlist</code> (see <a-int name="host" id="settings">settings</a-int>),
      and then closes the connection to the client of the player(s).
      <br/>
      <ul>
        <li>
          <kbd>&lt;player-name&gt;...</kbd>
          A list of player names to ban (separated by spaces).
          <kbd>*</kbd> is also a valid value for all connected players.
          If you start the list with <kbd>!*</kbd>, it will ban all but the following players.
        </li>
      </ul>
    </div>

    <div>
      <kbd>tag ...</kbd>
      Hide &amp; Seek helper functions.
      <div class="sub-commands">

        <div>
          <kbd>tag time &lt;player-name&gt; &lt;minutes&gt; &lt;seconds&gt;</kbd>
          Manually sets the Hide &amp; Seek timer for a player.
          <br/>
          <ul>
            <li><kbd>&lt;player-name&gt;</kbd> One specific player name or <kbd>*</kbd> for all connected players.</li>
            <li><kbd>&lt;minutes&gt;</kbd> Value between <kbd>0</kbd> and <kbd>65535</kbd>.</li>
            <li><kbd>&lt;seconds&gt;</kbd> Value between <kbd>0</kbd> and <kbd>59</kbd>.</li>
          </ul>
        </div>

        <div>
          <kbd>tag seeking &lt;player-name&gt; {true|false}</kbd>
          Manually sets the Hide &amp; Seek status for a player to seeker (<code>true</code>) or hider (<code>false</code>).
          <br/>
          <ul>
            <li><kbd>&lt;player-name&gt;</kbd> One specific player name or <kbd>*</kbd> for all connected players.</li>
          </ul>
        </div>

        <div>
          <kbd>tag start &lt;seconds&gt; &lt;player-name&gt;...</kbd>
          Starts a countdown that will set the Hide &amp; Seek status of all connected players when the time is over.
          <br/>
          <ul>
            <li><kbd>&lt;seconds&gt;</kbd> Value between <kbd>0</kbd> and <kbd>255</kbd>.</li>
            <li><kbd>&lt;player-name&gt;...</kbd> A list of player names that will be seekers. Everyone else will become hiders.</li>
          </ul>
        </div>

      </div>
    </div>

    <div>
      <kbd>flip ...</kbd>
      Commands to control the <code>flip</code> feature (see <a-int name="host" id="settings">settings</a-int>).
      <div class="sub-commands">

        <div>
          <kbd>flip list</kbd>
          Lists all profile IDs that are on the flip list.
        </div>

        <div>
          <kbd>flip set {true|false}</kbd>
          Enables or disabled the <code>flip</code> feature for all players on the flip list.
        </div>

        <div>
          <kbd>flip pov {both|self|others}</kbd>
          Sets for all players on the flip list who is able to see that they are flipped.
        </div>

        <div>
          <kbd>flip add &lt;profile-id&gt;</kbd>
          Adds a player to the flip list.
          <br/>
          <ul>
            <li><kbd>&lt;profile-id&gt;</kbd> The unique profile ID of the player (not its name) that should be added to the flip list.</li>
          </ul>
        </div>

        <div>
          <kbd>flip remove &lt;profile-id&gt;</kbd>
          Removes a player from the flip list.
          <br/>
          <ul>
            <li><kbd>&lt;profile-id&gt;</kbd> The unique profile ID of the player (not its name) that should be added to the flip list.</li>
          </ul>
        </div>

      </div>
    </div>

    <div>
      <kbd>shine ...</kbd>
      commands to manipulate shines (moons).
      <div class="sub-commands">

        <div>
          <kbd>shine list</kbd>
          Lists all shine IDs that have been collected globally by all players.
        </div>

        <div>
          <kbd>shine clear</kbd>
          Removes all saved shines on the server.
          This will not remove shines in-game from connected players.
        </div>

        <div>
          <kbd>shine sync</kbd>
          Manually syncs all saved shines to all connected players.
          Only those shines that are missing for the player from the point of view of the server are transferred.
          This will not remove shines in-game from connected players.
          This should normally happen automatically when entering the game, when there's a change to the shines and every two minutes.
        </div>

        <div>
          <kbd>shine send &lt;shine-id&gt; &lt;player-name&gt;...</kbd>
          Manually sends one shine to players.
          <br/>
          <ul>
            <li>
              <kbd>&lt;shine-id&gt;</kbd>
              The unique ID for an individual shine (moon) in the game.
            </li>
            <li>
              <kbd>&lt;player-name&gt;...</kbd>
              A list of player names that shall receive the shine (separated by spaces).
              <kbd>*</kbd> is also a valid value for all connected players.
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div>
      <kbd>dscrestart</kbd>
      Restarts the <a-int name="host" id="discord">Discord</a-int> bot.
    </div>

    <div>
      <kbd>restartserver</kbd>
      Stops the server and restarts it again in a new process.
      This doesn't work well with <a-int name="host" id="docker">docker</a-int>,
      because when its main process stops, the whole docker container will be stopped.
    </div>

    <div>
      <kbd>exit</kbd> <kbd>quit</kbd> <kbd>q</kbd>
      Stops the server.
    </div>

    <b-modal id="host-commands-stages" hide-footer>
      <template #modal-title><kbd>&lt;stage&gt;</kbd> values for <kbd>send</kbd> and <kbd>sendall</kbd></template>
      <table class="table table-striped table-borderless table-sm mb-0">
        <thead>
          <tr> <th>Stage</th> <th>Name</th> </tr>
        </thead>
        <tbody>
          <tr v-for="(v, k) in stages" :key="k">
            <th><kbd>{{ k }}</kbd></th>
            <td>{{ v }}</td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </smoo-card>
</template>

<style lang="scss">
.smoo-view-host-commands {
  kbd {
    display: inline-block;
    margin: 0.2rem;
    &:first-child {
      margin-left: 0;
    }
  }
  ul > li > kbd {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .card-body > div, .card-body .sub-commands > div {
    &:not(:first-child) {
      padding-top: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
    &:not(:last-child) {
      padding-bottom: 1rem;
    }
  }
  .sub-commands {
    margin-top: 1rem;
    & > div {
      margin-left: 1.5rem;
    }
  }
}
</style>

<script lang="ts" src="./commands.ts"/>
