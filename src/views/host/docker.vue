<template>
  <smoo-card
    class="smoo-view-host-docker"
    :visible="$attrs.visible"
    accordion="host"
    key="docker"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Using pre-build docker images with <code>docker-compose</code> to run the server</template>
    <p>
      The server project provides ready to use docker images for different architectures (<code>amd64</code>, <code>arm</code> and <code>arm64</code>).
      They can be used in a lot of different scenarios together with different cloud or hosting providers.
      But you can also run them on your system on which you already <a-ext href="https://docs.docker.com/get-docker/">installed docker</a-ext>.
    </p>
    <p>
      One benefit of this is, that you don't have to deal with installing any Micro$oft dependencies on your system or need to build the project on your own.
      The server is also running isolated in its own container separated from the rest of the system.
    </p>
    <p>
      Because plain <code>docker</code> commands become quite a hassle to use, one recommendation would be to use
      <a-ext href="https://docs.docker.com/compose/">docker-compose</a-ext>
      to have all options inside a <code>docker-compose.yml</code> file:
    </p>
<code class="style mb-3 mr-3 float-left">
<label><a href="https://github.com/Sanae6/SmoOnlineServer/blob/master/docker-compose.yml" target="_blank">docker-compose.yml</a></label>
<pre class="code">
<b>version</b>: <a>"3.7"</a>

<b>services</b>:
  <b>server</b>:
    <b>image</b>: <a href="https://github.com/Sanae6/SmoOnlineServer/pkgs/container/smo-online-server" target="_blank">ghcr.io/sanae6/smo-online-server</a>
    <del># build: .</del>
    <del># user: 1000:1000</del>
    <b>stdin_open</b>: <i>true</i>
    <b>restart</b>: <a>unless-stopped</a>
    <b>ports</b>:
    - <i>1027:1027</i>
    <b>volumes</b>:
    - <a>./data/:/data/</a>
</pre>
</code>
    <p>
      When the file is present you can start the server by calling <kbd>docker-compose up -d</kbd> in the same directory.
      This will download and start the server in the background listening on port <code>1027</code> (<code>external:internal</code>)
      and create the <code>settings.json</code> file in the <code>data</code> sub directory.
      You'll also need to run this after making any changes to the <code>docker-compose.yml</code>.
    </p>
    <p>
      The first time executing this will download the currently <code>latest</code> server version automatically.
      But once it downloaded it, it will stick to the version.
      If you want to update in the future you should call <kbd>docker-compose pull && docker-compose up -d</kbd> to update to newer versions.
      Alternatively in the <code>docker-compose.yml</code> after the image name,
      you can specify what version exactly you want to run, e.g. <code>image: ghcr.io/sanae6/smo-online-server:1.0.2</code>.
      Check out the GitHub repository for all available
      <a-ext href="https://github.com/Sanae6/SmoOnlineServer/pkgs/container/smo-online-server">docker tags</a-ext>.
    </p>
    <p>
      If you don't want to use a pre-build image but rather want to build the docker image yourself (e.g. with your own fixes to the source code),
      you can comment out the <code>image</code> line and comment in the <code>build</code> line in the <code>docker-compose.yml</code>.
      The <code>build</code> value needs to point to the server code directory that contains the
      <a-ext href="https://github.com/Sanae6/SmoOnlineServer/blob/master/Dockerfile">Dockerfile</a-ext>.
      To rebuild after changes you'll need to execute <kbd>docker-compose build && docker-compose up -d</kbd>.
    </p>
    <p>
      The <code>restart: unless-stopped</code> in the <code>docker-compose.yml</code>
      will automatically restart the server if it crashes or starts it again after a system reboot.
      To really stop the server you'll need to call <kbd>docker-compose stop</kbd>.
    </p>
    <p>
      To attach to the server on the command line interface, to send <a-int name="host" id="commands">commands</a-int>
      to it, use <kbd>docker attach `docker-compose ps -q` --sig-proxy=false</kbd>.
      If you only want to look at the server logs without giving it any commands you can use
      <kbd>docker-compose logs --tail=20 --follow</kbd>.
    </p>
    <p>
      For additional security on Linux it's advised to define which user should run the server (default: <code>root</code>).
      Comment in the <code>user</code> line in the <code>docker-compose.yml</code> and provide the user ID and group ID to use
      (execute <kbd>echo $(id -u):$(id -g)</kbd> to get your own IDs).
      You'll also need to modify the permissions of the <code>data</code> sub-directory,
      so that the user can write to it (<kbd>chown 1000:1000 -R ./data/</kbd>).
    </p>
  </smoo-card>
</template>

<style lang="scss">
.smoo-view-host-docker {
  code.style {
    @media (max-width: 650px) {
      float: none !important;
      width: 100%;
    }
  }
}
</style>
