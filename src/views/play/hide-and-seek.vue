<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="hide-and-seek"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Common Hide &amp; Seek rules</template>
    <p>
      A kingdom that hasn't been played in is choosen randomly for a new round.
      Some of the players that haven't started a round as a seeker before are choosen randomly to be seekers for this round.
      (For fairness reasons the amount of seekers should be the same in all rounds or might be adjusted to the size of the kingdom.)
    </p>
    <p>
      The seekers go into the Odyssey and start to count down for 60 or more seconds.
      The hiders run away and look for a place to hide in.
      After the time is up, the hiders switch to hider mode (which will unpause their timer) and the seekers start seeking them.
      Hiders can move around at any time whenever they want and aren't limited to the first minute.
      Only seekers are allowed to use the checkpoints to warp around.
    </p>
    <p>
      If a seeker touches a hider, the hider dies.
      When a hider dies their timer pauses and they become seekers.
      Dieing within the first few minutes of a round is forgivable, unless while being chased by a seeker.
      Once everyone has become a seeker, the round is over.
      When everyone has started a round as a seeker, the game is over and the player with the highest time wins.
    </p>
    <p>
      After some time in a round - usually every two minutes - hiders are obligated to give the seekers a hint where they are.
      Seekers choose what kind of hint to provide.
      Starting with more general hints and as the round goes on more specific hints.
      The hint has to be a truthful statement at the moment given.
      Even if a second later it isn't true anymore.
      Common hints are:
      <br/>
      <ul>
        <li>Being in a sub-area or in the overworld.</li>
        <li>Top or bottom half of the in-game map.</li>
        <li>Left or right half of the in-game map.</li>
        <li>Cell coordinates of the in-game map (e.g. <code>C2</code>).</li>
        <li>Drawing a picture that hints to where they are.</li>
        <li>Sending a cutout of a screenshot.</li>
      </ul>
    </p>
    <p>
      Places that are forbidden to hide in:
      <ul>
        <li>Other kingdoms.</li>
        <li>Inside the Odyssey.</li>
        <li>Inside captures (using static captures like power lines temporarily to move somewhere is fine).</li>
        <li>Inside something without collision that occludes the player completely (e.g. trees).</li>
        <li>At a position where an object was located at before interacting with it (e.g. crates or chests).</li>
        <li>In areas inaccessible by others (e.g. rooms only acessible by wearing specific costumes).</li>
        <li>In special areas (e.g. the boss fight paintings in <code>Mushroom Kingdom</code> or race events like Koopa Freerunning).</li>
        <li>Out of bounds.</li>
      </ul>
    </p>
    <p>
      Kingdom specific rules:
      <ul>
        <li>
          <code>Deep Woods</code> is not considered to be a part of <code>Wooded Kingdom</code>.
          Accidentially falling into it counts as dieing.
          It might be used as its own kingdom to play a round in.
        </li>
        <li>
          In <code>Snow Kingdom</code> the hint for sub-area or not is extended by a third option: <code>Shiveria</code>.
          This option aggregates all (sub-)areas that are accessible after falling down the hole.
        </li>
      </ul>
    </p>
  </smoo-card>
</template>
