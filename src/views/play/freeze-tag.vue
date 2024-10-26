<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="freeze-tag"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header><smoo-role-icon type="freeze"/> <b>Freeze-Tag</b> game mode</template>
    <p>
      The <b>Freeze-Tag</b> game mode was developed by
      <a-ext href="https://github.com/Amethyst-szs/SuperMarioOdysseyOnline/tree/freeze-tag" icon="github">Amethyst-szs</a-ext>
      in 2022/2023 and was added to the official mod with version <code>v1.6.0</code>.
    </p>
    <p>
      The players are divided into two groups:
      <span class="text-primary">Chasers</span> try to catch all <span class="text-secondary">Runners</span> during a given round duration.
      When all <span class="text-secondary">Runners</span> are catched, then the <span class="text-primary">Chasers</span> win and the round ends immediately (wipeout).
      If on the other hand the time for a round runs out, then the <span class="text-secondary">Runners</span> will win the round.
      The round will be cancelled automatically when so many players left the game that a team is left without players.
    </p>
    <p>
      During a round the members of the teams are fixed.
      If a <span class="text-secondary">Runner</span> dies or is catched they will not join the <span class="text-primary">Chasers</span>
      but they instead enter a <smoo-role-icon type="freeze"/>frozen state
      in which they can spectate other <span class="text-secondary">Runners</span>.
      A <smoo-role-icon type="freeze"/>frozen <span class="text-secondary">Runner</span> that is touched by another <span class="text-secondary">Runner</span> that isn't <smoo-role-icon type="freeze"/>frozen yet will unfreeze.
    </p>
    <p>
      Players gain points instead of accumulating time based on their and their groups performance:
      <ul>
        <li><span class="text-primary">Chasers</span> receive points by catching <span class="text-secondary">Runners</span> and if the <span class="text-secondary">Runners</span> <smoo-role-icon type="freeze"/>freeze themselves.</li>
        <li><span class="text-secondary">Runners</span> receive points over time and by unfreezing other runners.</li>
        <li>The team that wins gets extra points at the end of a round.</li>
      </ul>
    </p>
    <p>
      A round is limited to the current stage, so checkpoint warps and stage changes are disabled.
    </p>
    <p>
      To start a new round one player first needs to enter the Host mode in the Freeze-Tag config menu.
    </p>
    <p>
      Controls:
      <ul>
        <li><smoo-btn L/> + <smoo-btn DLeft/> - Enable/disable the Freeze-Tag game mode.</li>
        <li><smoo-btn L/> + <smoo-btn DDown/> - Reset own score to <code>0</code>.</li>
        <li><smoo-btn DUp/> - Change the team outside of a round between <span class="text-secondary">Runners</span> and <span class="text-primary">Chasers</span>.</li>
        <li>
          Additionally in Host Mode:
          <ul>
            <li><smoo-btn R/> + <smoo-btn DUp/> Start a new round.</li>
            <li><smoo-btn R/> + <smoo-btn DDown/> Cancel a round manually.</li>
          </ul>
        </li>
        <li>
          Additionally in Debug Mode:
          <ul>
            <li><smoo-btn X/> + <smoo-btn DRight/> Unfreeze as a <span class="text-secondary">Runner</span>.</li>
            <li><smoo-btn Y/> + <smoo-btn DRight/> Freeze as a <span class="text-secondary">Runner</span>.</li>
            <li><smoo-btn A/> + <smoo-btn DRight/> Increase own score by <code>1</code>.</li>
            <li><smoo-btn A/> + <smoo-btn DLeft/> Set the remaining round time to <code>01:05</code>.</li>
            <li><smoo-btn B/> + <smoo-btn DLeft/> End the current round with a wipeout.</li>
          </ul>
        </li>
      </ul>
    </p>
    <p>
      Game mode settings in the Freeze-Tag config menu:
      <ul>
        <li><b>Host Mode</b>: Unlocks the button combinations to start and cancel a round.</li>
        <li><b>Debug Mode</b>: Unlocks extra button combinations that shouldn't be used when playing due to missing synchronization.</li>
        <li><b>Set Score</b>: Option to manually set the own score to a custom value.</li>
        <li><b>Set Round Duration</b>: Used by Hosts to configure how long a round that they start will be in minutes.</li>
        <li><b>Mario Collision</b>: Prevents running trough other players.</li>
        <li><b>Mario Bounce</b>: Jumping onto other players bounces the own player upwards.</li>
        <li><b>Cappy Collision</b>: Prevents running trough Cappy from other players.</li>
        <li><b>Cappy Bounce</b>: Jumping onto Cappy from other players bounces the own player upwards.</li>
      </ul>
    </p>
  </smoo-card>
</template>
