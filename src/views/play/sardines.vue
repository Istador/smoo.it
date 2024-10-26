<template>
  <smoo-card
    class="smoo-view-play-sardines"
    :visible="$attrs.visible"
    accordion="play"
    key="sardines"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header><smoo-role-icon type="sardine"/> <b>Sardines</b> game mode</template>
    <p>
      The <b>Sardines</b> game mode was developed by
      <a-ext href="https://github.com/Amethyst-szs/SuperMarioOdysseyOnline/tree/sardines" icon="github">Amethyst-szs</a-ext>
      in 2022 and was added to the official mod with version <code>v1.6.0</code>.
      It is very similar to <a-int name="play" id="hide-and-seek">Hide &amp; Seek</a-int> but a bit different.
    </p>
    <p>
      The player roles are kind of inverted, meaning that the <smoo-role-icon type="pack"/>Hiders will <i>"catch"</i> the <smoo-role-icon type="sardine"/>Seekers.
      If a <smoo-role-icon type="sardine"/>Seeker finds <smoo-role-icon type="pack"/>Hiders and touches them,
      the <smoo-role-icon type="sardine"/>Seeker becomes a <smoo-role-icon type="pack"/>Hider and joins in hiding together with them.
      A <smoo-role-icon type="pack"/>Hider that dies will become a <smoo-role-icon type="sardine"/>Seeker again.
    </p>
    <p>
      The timer counts up for <smoo-role-icon type="pack"/>Hiders, so it's their goal to hide as long as possible undetected.
      Likewise the goal for the <smoo-role-icon type="sardine"/>Seekers is it to find the <smoo-role-icon type="pack"/>Hiders as fast as possible to join them,
      without helping the other <smoo-role-icon type="sardine"/>Seekers.
      Once everyone has become a <smoo-role-icon type="pack"/>Hider, the round is over.
    </p>
    <p>
      Opposite to <a-int name="play" id="hide-and-seek">Hide &amp; Seek</a-int> the optimal strategy regarding teamplay is also inverted.
      Instead of <smoo-role-icon type="sardine"/>Seekers working together they compete against each other, so it's best for them to seek alone.
      And <smoo-role-icon type="pack"/>Hiders should team up and hide together in one place instead of competitively hide on their own.
    </p>
    <p>
      Changing from a <smoo-role-icon type="sardine"/>Seeker to a <smoo-role-icon type="pack"/>Hider
      with the button combination only works if there are no <smoo-role-icon type="pack"/>Hiders already.
    </p>
    <p>
      Controls:
      <ul>
        <li><smoo-btn L/> + <smoo-btn DLeft/> - Enable/disable the Sardines game mode.</li>
        <li><smoo-btn DUp/> - Switch between <smoo-role-icon type="pack"/>Hider and <smoo-role-icon type="sardine"/>Seeker.</li>
        <li>[<smoo-role-icon type="pack"/>Hider] <smoo-btn DLeft/> - Decrease hiding time.</li>
        <li>[<smoo-role-icon type="pack"/>Hider] <smoo-btn DRight/> - Increase hiding time.</li>
        <li>[<smoo-role-icon type="pack"/>Hider] <smoo-btn L/> + <smoo-btn DDown/> - Reset hiding time.</li>
        <li>[Gravity] <smoo-btn L/> + <smoo-btn DRight/> - Toggle gravity camera.</li>
      </ul>
    </p>
    <p>
      Game mode settings in the Sardines config menu:
      <ul>
        <li><b>Sardine Gravity</b>: The players gravity changes depending on the ground Mario stands on. E.g. to run on walls.</li>
        <li><b>Sardine Tether</b>: Forces the <smoo-role-icon type="pack"/>Hiders to stay together.</li>
        <li><b>Tether Snapping</b>: A <smoo-role-icon type="pack"/>Hider that leaves the other <smoo-role-icon type="pack"/>Hiders becomes a <smoo-role-icon type="sardine"/>Seeker again.</li>
        <li><b>Mario Collision</b>: Prevents running trough other players.</li>
        <li><b>Mario Bounce</b>: Jumping onto other players bounces the own player upwards.</li>
        <li><b>Cappy Collision</b>: Prevents running trough Cappy from other players.</li>
        <li><b>Cappy Bounce</b>: Jumping onto Cappy from other players bounces the own player upwards.</li>
      </ul>
    </p>
  </smoo-card>
</template>
