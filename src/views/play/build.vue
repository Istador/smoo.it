<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="build"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Build the mod from sources</template>
    <p>
      You usually shouldn't need to do that, unless you want to take part in developing the mod.
      The GitHub project of the mod should offer automatic builds for the
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/latest">latest release</a-ext> and the
      <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">development branch</a-ext>.
    </p>
    <p>
      Building it natively requires you to install development software on your computer.
      Check out the mods <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/#building-prerequisites">readme</a-ext> for details.
    </p>
    <p>
      An easier alternative is to use <a-ext href="https://docs.docker.com/get-docker/">Docker</a-ext>.
      That way the only required software you need to install on your system is Docker.
      All other dependencies will not be installed on your system directly but are only downloaded and used sandboxed.
      The source code of the mod comes with an <code>docker-build.sh</code> script to easily trigger building the mod: <kbd>./docker-build.sh</kbd>.
      The builded mod artifacts should be in the <code>starlight_patch_100</code> directory afterwards.
    </p>
    <p>
      When building for emulators you'll need to tell it that it's for emulators, by setting the environment variable <kbd>ISEMU=1</kbd>.
      With the docker script just call it with an additional parameter instead: <kbd>./docker-build.sh 1</kbd>.
      When switching between emulator and Switch builds, you should delete the temporary <code>build100</code> directory inbetween.
    </p>
  </smoo-card>
</template>
